import {Outlet, ScrollRestoration, useLocation} from "react-router-dom";
import Header from "./components/header";
import Sidebar from "./components/sidebar";
import {useSidebarVisibility, useTheme} from "~/stores/app/hooks";
import useColorScheme from "~/hooks/use-color-scheme";
import {useEffect} from "react";
import {useModals} from "~/stores/modal/hooks";
import Modals from "~/modals";
import {useBreakpoint} from "~/hooks/use-breakpoint.js";
import classNames from "classnames";
import {setSidebarVisibility} from "~/stores/app/actions.js";

export default function WebLayout() {

	const location = useLocation()
	const sidebarVisibility = useSidebarVisibility()
	const {breakpoint} = useBreakpoint()
	const modals = useModals()
	const theme = useTheme()
	const {colorScheme} = useColorScheme()

	useEffect(() => {
		if (breakpoint !== 'desktop') {
			if (sidebarVisibility) {
				document.body.style.overflow = 'hidden'
			} else {
				document.body.style.overflow = 'auto'
			}
		} else {
			document.body.style.overflow = 'auto'
		}
	}, [sidebarVisibility, breakpoint]);

	useEffect(() => {
		if (breakpoint === 'desktop') {
			setSidebarVisibility(true)
		} else {
			setSidebarVisibility(false)
		}
	}, [breakpoint])

	useEffect(() => {
		if (breakpoint !== 'desktop') {
			setSidebarVisibility(false)
		}
	}, [location, breakpoint])

	useEffect(() => {
		if (theme === 'default') {
			document.body.className = colorScheme
		} else {
			document.body.className = theme
		}
	}, [theme, colorScheme])

	return (
		<>
			<ScrollRestoration/>
			{modals.length > 0 && <Modals/>}
			<Header/>
			{sidebarVisibility && <Sidebar/>}
			<main className={classNames("p-4 md:p-6 mt-14 dark:text-white", {
				"ml-[250px]": breakpoint === 'desktop'
			})}>
				<Outlet/>
			</main>
		</>
	)
}
