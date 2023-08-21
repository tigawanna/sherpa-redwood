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
const text_fields:Array<keyof FormUserProfile>=["email","name"]
const text_area_fields:Array<keyof FormUserProfile>=["about_me"]
return (
  <div className="w-full h-full flex flex-col items-center justify-center">
    <form className="w-full h-full flex flex-col \justify-center">
      <div
        className="w-full  h-full flex flex-col md:flex-row
       bg-secondary/5 gap-10 rounded-lg p-2"
      >
        {/* avatar */}
        <ProfilePic
          img_url={input.image_url}
          setFileImage={(file) => setFile(file)}
        />
        <div className="w-full h-full flex flex-col items-center ">
          {/* text fields */}
          <div className="w-full flex flex-col md:flex-row items-center justify-center gap-1">
            {text_fields.map((field) => {
              return (
                <div
                  key={field}
                  className="w-full flex flex-col justify-center"
                >
                  <label htmlFor={field} className="text-sm font-serif">
                    {field}
                  </label>
                  <input
                    id={field}
                    name={field}
                    value={input[field]}
                    onChange={handleChange}
                    className="input input-bordered input-sm w-full  "
                  />
                </div>
              )
            })}
          </div>
          {/* text area fields */}
          <div className="w-full flex flex-col items-center justify-center gap-1">
            {text_area_fields.map((field) => {
              return (
                <div
                  key={field}
                  className="w-full flex flex-col justify-center"
                >
                  <label htmlFor={field} className="text-sm font-serif">
                    {field}
                  </label>
                  <textarea
                    id={field}
                    name={field}
                    value={input[field]}
                    onChange={handleChange}
                    className="textarea textarea-bordered textarea-sm w-full "
                  />
                </div>
              )
            })}
          </div>
        </div>
      </div>

      <div>
        <label></label>
      </div>
    </form>
  </div>
)
}
