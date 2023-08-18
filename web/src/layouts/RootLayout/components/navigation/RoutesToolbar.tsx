import { Link } from "@redwoodjs/router";
import { ThemeToggle } from "./ThemeToggle";


interface RoutesToolbarProps {

}

export function RoutesToolbar({}:RoutesToolbarProps){
return (
  <nav className="flex flex-col md:flex-row items-center  gap-3">
    <Link to="/" className="p-2">
      Home
    </Link>
    <Link to="/posts" >
      posts
    </Link>

    <Link to="/profile" >
      profile
    </Link>

    </nav>
);
}
