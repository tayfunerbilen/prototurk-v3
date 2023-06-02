import { Outlet } from "react-router-dom";
import Header from "./components/header";
import Sidebar from "./components/sidebar";
import { useTheme } from "~/stores/app/hooks";
import useColorScheme from "~/hooks/use-color-scheme";
import { useEffect } from "react";

export default function WebLayout() {

  const theme = useTheme()
  const { colorScheme } = useColorScheme()

  useEffect(() => {
    if (theme === 'default') {
      document.body.className = colorScheme
    } else {
      document.body.className = theme
    }
  }, [theme, colorScheme])

  return (
    <>
      <Header />
      <Sidebar />
      <main className="p-6 mt-14 ml-[250px] dark:text-white">
        <Outlet />
      </main>
    </>
  )
}
