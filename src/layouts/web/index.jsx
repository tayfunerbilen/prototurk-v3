import { Outlet } from "react-router-dom";
import Header from "./components/header";
import Sidebar from "./components/sidebar";
import { useTheme } from "~/stores/app/hooks";
import useColorScheme from "~/hooks/use-color-scheme";
import { useEffect } from "react";
import { useModals } from "~/stores/modal/hooks";
import Modals from "~/modals";

export default function WebLayout() {

  const modals = useModals()
  const theme = useTheme()
  const { colorScheme } = useColorScheme()

  console.log('modals', modals)

  useEffect(() => {
    if (theme === 'default') {
      document.body.className = colorScheme
    } else {
      document.body.className = theme
    }
  }, [theme, colorScheme])

  return (
    <>
      {modals.length > 0 && <Modals />}
      <Header />
      <Sidebar />
      <main className="p-6 mt-14 ml-[250px] dark:text-white">
        <Outlet />
      </main>
    </>
  )
}
