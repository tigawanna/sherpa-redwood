import { createAuthentication } from '@redwoodjs/auth'
import PocketBase, { BaseAuthStore } from "pocketbase"

const pb = new PocketBase(process.env.PB_URL)

type PbAuthModel =  typeof pb.authStore.model

export interface PBUser {
  access_token: string;
  avatar: string;
  bio: string;
  collectionId: string;
  collectionName: string;
  created: string;
  email: string;
  emailVisibility: boolean;
  github_avatar: string;
  github_login: string;
  id: string;
  updated: string;
  username: string;
  verified: boolean;
  expand: {};
}

export interface PBUserAuthFields{
  username: string
  emailVisibility: boolean
  email: string
  password: string
  passwordConfirm: string
  bio: string

  avatar?: string
  access_token?: string
  github_login?: string
  github_avatar?: string
  verified?: boolean
}



export interface PbUserResponse{
  record:PBUser&BaseAuthStore
  token: string
}


// If you're integrating with an auth service provider you should delete this interface.
// Instead you should import the type from their auth client sdk.

async function pbSignUp(data: PBUserAuthFields) {
  return (await pb.collection('users').create<PbUserResponse>(data))
}
async function pbSignIn(data: Pick<PBUserAuthFields, 'email' | 'password'>) {
  return await pb.collection('devs').authWithPassword(data.email,data.password
);
}


async function pbOauthLogin({ provider, scopes }: { provider: string; scopes: string[]; }) {
try {
    const authData = await pb
      .collection("devs")
      .authWithOAuth2<PBUser>({
        provider,
        scopes,
      });
    if (authData?.meta?.accessToken) {
    await pb.collection("devs").update<PBUser>(authData.record.id, {
        access_token: authData?.meta.accessToken,
        avatar: authData?.meta.avatarUrl ?? authData.record.avatar,
      });
    }
    return pb.authStore.model as unknown as PBUser;
  } catch (error) {
    throw error;
  }
}




async function pbGetUser(){
// return pb.authStore.model as unknown as PBUser
 return  {
      "id":pb.authStore.model.id,
      "aud": "authenticated",
      "role": "authenticated",
      "roles": ["admin"],
      "email":pb.authStore.model.email,
     "app_metadata": pb.authStore.model,
     "user_metadata":pb.authStore.model,
     "created_at":pb.authStore.model.created,
     "updated_at":pb.authStore.model.updated
   }

}




export type SignInWithOAuthOptions = Parameters<typeof pbOauthLogin>[0] & {
  authMethod: 'oauth'
}



export type SignInWithPasswordOptions = Parameters<typeof pbSignIn>[0] & {
  authMethod: 'password'
}


export interface ValidateResetTokenResponse {
  error?: string
  [key: string]: string | undefined
}

// Replace this with the auth service provider client sdk
const client_config = {
  pb_client:pb,
  login: async (creds:SignInWithPasswordOptions|SignInWithOAuthOptions) => {
    if(creds.authMethod==="password"){
      return await pbSignIn(creds)
    }
    if(creds.authMethod==="oauth"){
      return await pbOauthLogin(creds)
    }
  },

  signup: async(data:PBUserAuthFields) => await pbSignUp(data),
  logout: () => pb.authStore.clear(),
  getToken: () => pb.authStore.token,
  getUserMetadata: () => pbGetUser(),
}

function createAuth() {
  const authImplementation = createAuthImplementation(client_config)
  return createAuthentication(authImplementation)
}

// This is where most of the integration work will take place. You should keep
// the shape of this object (i.e. keep all the key names) but change all the
// values/functions to use methods from the auth service provider client sdk
// you're integrating with
function createAuthImplementation(client:typeof client_config) {
  return {
    type: 'custom-auth',
    client,
    login: async (creds: SignInWithPasswordOptions | SignInWithOAuthOptions) => client.login(creds),
    logout: async () => client.logout(),
    signup: async (data: PBUserAuthFields) => client.signup(data),
    getToken: async () => client.getToken(),
    getUserMetadata: () => client.getUserMetadata(),

  }
}

export const { AuthProvider, useAuth } = createAuth()
