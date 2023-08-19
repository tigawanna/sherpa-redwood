
import { CellSuccessProps } from "@redwoodjs/web/dist/components/createCell";
import { FindUserProfileById } from "types/graphql";

interface ProfileContatinerProps {
 props: CellSuccessProps<FindUserProfileById>
}

export function ProfileContatiner({props}:ProfileContatinerProps){
return (
 <div className='w-full h-full flex items-center justify-center'>
  
 </div>
);
}
