import { useEffect } from "react";
import { themeChange } from "theme-change";
import { GlobalNavBar } from "./components/navigation/GlobalNavBar";

interface RootLayoutProps {
children:React.ReactNode
}

export default function RootLayout({children}:RootLayoutProps){
    useEffect(() => {
      themeChange(false)
      // 👆 false parameter is required for react project
    }, [])
return (
 <div className='w-full h-full flex flex-col'>
  <GlobalNavBar/>
  {children}
 </div>
);
}
