import {useAuth} from "~/stores/auth/hooks.js";
import {useNavigate} from "react-router-dom";
import {useEffect} from "react";

export default function AuthLayout({ children }) {
	const user = useAuth()
	const redirect = useNavigate()

	useEffect(() => {
		if (!user) {
			redirect('/', {
				replace: true
			})
		}
	}, [user])

	if (user) {
		return children
	}
}
