import { Link } from "@redwoodjs/router";
import { ThemeToggle } from "./ThemeToggle";


interface RoutesToolbarProps {

}

export function RoutesToolbar({}:RoutesToolbarProps){
return (
  <nav className="flex flex-col md:flex-row items-center  gap-3">
    <Link to="/">
      Home
    </Link>
    <Link to="/posts" >
      posts
    </Link>

    <Link to="/profile" >
      profile
    </Link>
    <Link to="/admin" >
      admin
    </Link>
    <ThemeToggle/>
  </nav>
);
}
