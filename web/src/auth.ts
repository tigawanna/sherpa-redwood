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

async function pbOauthLogin(){
try {
    const authData = await pb
      .collection("devs")
      .authWithOAuth2<PBUser>({
        provider: "github",
        scopes: ["user", "repo",],
      });
    //console.log("pocketbase github user  === ", authData);
    if (authData?.meta?.accessToken) {
      //console.log("pocketbase github user  === ", authData?.meta?.accessToken);
      await pb.collection("devs").update<PBUser>(authData.record.id, {
        access_token: authData?.meta.accessToken,
        avatar: authData?.meta.avatarUrl ?? authData.record.avatar,
      });
    }
    return pb.authStore.model as unknown as PBUser;
  } catch (error) {
    //console.log("error getting pocketbase github user ==== ", error);
    throw error;
  }
}




function pbGetUser(){
return pb.authStore.model as unknown as PBUser
}


export interface AuthClient {
  pb_client: typeof pb,
  login: (data: Parameters<typeof pbSignIn>[0]) => ReturnType<typeof pbSignIn>
  oauthLogin: () => ReturnType<typeof pbOauthLogin>
  logout: () => void
  signup: (data:Parameters<typeof pbSignUp>[0]) => ReturnType<typeof pbSignUp>
  getToken: () => string
  getUserMetadata: () => ReturnType<typeof pbGetUser>| null
}

// If you're integrating with an auth service provider you should delete this interface.
// This type should be inferred from the general interface above.

// interface User {
//   // The name of the id variable will vary depending on what auth service
//   // provider you're integrating with. Another common name is `sub`
//   id: string
//   email?: string
//   username?: string
//   roles: string[]
// }

// If you're integrating with an auth service provider you should delete this interface
// This type should be inferred from the general interface above
export interface ValidateResetTokenResponse {
  error?: string
  [key: string]: string | undefined
}

// Replace this with the auth service provider client sdk
const client:AuthClient = {
  pb_client:pb,
  login: async (data: Pick<PBUserAuthFields, 'email' | 'password'>) => await pbSignIn(data),
  oauthLogin: async () => await pbOauthLogin(),
  signup: async(data:PBUserAuthFields) => await pbSignUp(data),
  logout: () => pb.authStore.clear(),
  getToken: () => pb.authStore.token,
  getUserMetadata: () => pbGetUser(),
}

function createAuth() {
  const authImplementation = createAuthImplementation(client)

  // You can pass custom provider hooks here if you need to as a second
  // argument. See the Redwood framework source code for how that's used
  return createAuthentication(authImplementation)
}

// This is where most of the integration work will take place. You should keep
// the shape of this object (i.e. keep all the key names) but change all the
// values/functions to use methods from the auth service provider client sdk
// you're integrating with
function createAuthImplementation(client: AuthClient) {
  return {
    type: 'custom-auth',
    client,
    login: async (data: Pick<PBUserAuthFields, 'email' | 'password'>) => client.login(data),
    oauthLogin: async () => client.oauthLogin(),
    logout: async () => client.logout(),
    signup: async (data: PBUserAuthFields) => client.signup(data),
    getToken: async () => client.getToken(),

    getUserMetadata: async () => client.getUserMetadata(),
  }
}

export const { AuthProvider, useAuth } = createAuth()
