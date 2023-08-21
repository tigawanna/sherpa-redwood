
import { CellSuccessProps } from "@redwoodjs/web/dist/components/createCell";
import { FindUserProfileById } from "types/graphql";
import { ProfilePic } from "./ProfilePic";

interface ProfileContatinerProps {
 props: CellSuccessProps<FindUserProfileById>
}

export function ProfileContatiner({props}:ProfileContatinerProps){
  const profile = props.userProfile
return (
 <div className='w-full h-full flex items-center justify-center'>
    <ProfilePic img_url={profile.image_url}/>
 </div>
);
}
