import { useFormHook } from "src/state/hooks/form";
import { ProfilePic } from "./ProfilePic";
import { EditUserProfileById } from "types/graphql";
import { useState } from "react";

interface ProfileFormProps {

}
type FormUserProfile = NonNullable<EditUserProfileById['userProfile']>
export function ProfileForm({}:ProfileFormProps){
const {error,handleChange,input,setError,setInput,validateInputs} =  useFormHook<FormUserProfile>({
  initialValues:{
  about_me: "",
  id: 0,
  createdAt: "",
  updatedAt: "",
  email: "",
  name: "",
  image_url: "",
  resumeId: 0
}
})
const [file,setFile] = useState<File>(null)

return (
 <div className='w-full h-full flex flex-col items-center justify-center'>
  <form className="w-full h-full flex flex-col \justify-center">
  {/* avatar */}
  <div className="w-full  h-full flex flex-col items-center">
      <ProfilePic img_url={input.image_url} setFileImage={(file)=>setFile(file)}/>
  </div>
  </form>
 </div>
);
}
