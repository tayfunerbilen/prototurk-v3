import {useAuth} from "~/stores/auth/hooks";
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
	}, [user, redirect])

	if (user) {
		return children
	}
}
