import { useSidebarType } from "~/stores/app/hooks"
import SidebarMenu from "./components/menu"
import { PROFILE_SIDEBAR_MENU, QA_SIDEBAR_MENU, SIDEBAR_MENU } from "~/utils/consts/sidebar"
import Appearance from "./components/appearance"
import Categories from "~/layouts/web/components/sidebar/components/categories/index.jsx";

export default function Sidebar() {

  const type = useSidebarType()

  return (
    <aside className="w-[250px] border-r border-zinc-200 h-[calc(100vh-3.5rem)] fixed top-[3.5rem] p-2 flex flex-col overflow-auto transition-colors dark:border-zinc-700">
      {type === 'app' && (
        <>
          <SidebarMenu menu={SIDEBAR_MENU} />
          <Categories/>
        </>
      )}
      {type === 'qa' && <SidebarMenu menu={QA_SIDEBAR_MENU} />}
      {type === 'profile' && <SidebarMenu menu={PROFILE_SIDEBAR_MENU} />}
      <Appearance />
    </aside>
  )
}
