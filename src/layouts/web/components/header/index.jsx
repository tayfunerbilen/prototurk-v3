import Auth from "./auth";
import Logo from "./logo";
import Search from "./search";

export default function Header() {
  return (
    <header className="h-14 border-b border-zinc-200 flex items-center px-4 justify-between sticky top-0 bg-white z-10">
      <Logo />
      <Search />
      <Auth />
    </header>
  )
}
