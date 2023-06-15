import {useEffect} from "react";
import {setSidebarType} from "~/stores/app/actions.js";
import {Outlet} from "react-router-dom";

export default function Profile() {

	useEffect(() => {
		setSidebarType('profile')
		return () => {
			setSidebarType('app')
		}
	}, [])

	return (
		<Outlet />
	)
}
