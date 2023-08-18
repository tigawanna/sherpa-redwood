import { Link } from "@redwoodjs/router";
import { RoutesToolbar } from "./RoutesToolbar";

interface GlobalNavBarProps {

}

export function GlobalNavBar({}:GlobalNavBarProps){
return (
  <div className="p-2 w-full h-12 flex items-center
  justify-between sticky py-2 px-3 bg-secondary/20 opacity-90">
    <Link to="/" className="text-2xl text-primary">Sherpa</Link>
    <RoutesToolbar/>
  </div>
)
}
