interface ThemeToggleProps {

}

export function ThemeToggle({}:ThemeToggleProps){
return (
  <ul className="w-fit h-full flex items-center justify-center">
    <li className="flex items-center justify-evenly">
      <select
        data-choose-theme
        className=" select select-sm min-w-xs pr-0 pl-2 bg-secondary/60"
      >
        <option value="">Default</option>
        <option value="bumblebee">BumbleBee</option>
        <option value="dark">Dark</option>
        <option value="light">light</option>
        <option value="lofi">lofi</option>
        <option value="cupcake">Cupcake</option>
      </select>
    </li>
  </ul>
)
}
