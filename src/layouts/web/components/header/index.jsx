import Auth from "./auth";
import Logo from "./logo";
import Search from "./search";
import {useBreakpoint} from "~/hooks/use-breakpoint.js";
import {HiOutlineMenuAlt2} from "react-icons/hi";
import classNames from "classnames";
import {setSidebarVisibility} from "~/stores/app/actions.js";
import {useSidebarVisibility} from "~/stores/app/hooks.js";

export default function Header() {

  const sidebarVisibility = useSidebarVisibility()
  const {breakpoint} = useBreakpoint()

  return (
    <header className={classNames("h-14 dark:bg-zinc-900/70 dark:border-zinc-700 transition-colors border-b border-zinc-200 flex items-center justify-between fixed top-0 left-0 w-full bg-white/70 backdrop-blur z-10", {
      "px-4": breakpoint === 'desktop',
      "px-2": breakpoint !== 'desktop'
    })}>
      {breakpoint !== 'desktop' && (
        <button
          onClick={() => {
            setSidebarVisibility(!sidebarVisibility)
          }}
          className="w-9 h-9 flex items-center justify-center text-primary dark:text-zinc-400"
        >
          <HiOutlineMenuAlt2 size={24} />
        </button>
      )}
      <Logo />
      {breakpoint === 'desktop' && (
        <Search />
      )}
      <Auth />
    </header>
  )
}
