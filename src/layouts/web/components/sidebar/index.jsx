import { useSidebarType } from "~/stores/app/hooks"
import SidebarMenu from "./components/menu"
import { PROFILE_SIDEBAR_MENU, QA_SIDEBAR_MENU, SIDEBAR_MENU } from "~/utils/consts/sidebar"
import Appearance from "./components/appearance"
import Categories from "~/layouts/web/components/sidebar/components/categories/index.jsx";
import {useBreakpoint} from "~/hooks/use-breakpoint.js";
import classNames from "classnames";
import {Suspense} from "react";
import OpacityContent from "~/components/animated/opacity";

export default function Sidebar() {

  const {breakpoint} = useBreakpoint()
  const type = useSidebarType()

  return (
    <OpacityContent className={classNames("h-[calc(100vh-3.5rem)] fixed top-[3.5rem] p-2 flex flex-col overflow-auto transition-colors", {
      "w-[250px] border-r border-zinc-200 dark:border-zinc-700": breakpoint === 'desktop',
      "w-full bg-white/90 dark:bg-zinc-900/90 backdrop-blur z-10": breakpoint !== 'desktop',
    })}>
      {type === 'app' && (
        <>
          <SidebarMenu menu={SIDEBAR_MENU} />
          <Categories/>
        </>
      )}
      {type === 'qa' && <SidebarMenu menu={QA_SIDEBAR_MENU} />}
      {type === 'profile' && <SidebarMenu menu={PROFILE_SIDEBAR_MENU} />}
      <Suspense fallback="..">
        <Appearance />
      </Suspense>
    </OpacityContent>
  )
}
