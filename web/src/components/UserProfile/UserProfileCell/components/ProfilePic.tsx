import { useState, useRef } from 'react'
import { BiImageAdd } from 'react-icons/bi'

interface ProfilePicProps {
  img_url: string
  setFileImage?: (file: File | null) => void
}

export function ProfilePic({ img_url,setFileImage }: ProfilePicProps) {
  const [pic, setPic] = useState(img_url)
  const [input_pic, setInputPic] = useState<File>(null)
  const ref = useRef<HTMLInputElement>(null)

function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
  setInputPic(e.target.files[0])
  setPic((prev)=>{
    if (e.target.files[0]) {
      return URL.createObjectURL(e.target.files[0])
    }
    return prev
  })
  setFileImage&&setFileImage(input_pic)
}
  return (
    <div className="w-full h-full">
      {typeof pic === 'string' && pic.length > 0 ? (
        <div className="avatar" onClick={() => ref.current?.click()}>
          <div className=" rounded md:w-[40%]">
            <img
            className='tounded-lg'
            src={pic} height={"300"} width={"400"}/>
          </div>
        </div>
      ) : null }

        <div className='w-full h-full'>
          <input type="file" ref={ref} className="hidden"
          onChange={(e) => handleChange(e)}/>
          <BiImageAdd
            onClick={() => ref.current?.click()}
            className="h-7 w-7"
          ></BiImageAdd>
        </div>

    </div>
  )
}
