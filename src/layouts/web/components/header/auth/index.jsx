import Button from "~/components/button";
import {modal} from "~/stores/modal/actions";
import {useAuth} from "~/stores/auth/hooks.js";
import {Menu, Transition} from '@headlessui/react'
import {Link} from "react-router-dom";
import {removeUser} from "~/stores/auth/actions";
import {MdArrowDropDown} from "react-icons/md";
import classNames from "classnames";
import {useBreakpoint} from "~/hooks/use-breakpoint";
import {LuUser} from "react-icons/lu";
import languagesLn from "~/utils/languages/index.js";

function UserMenu() {
	const user = useAuth()

	return (
		<Menu as="nav" className="relative">
			<Menu.Button className="flex items-center gap-x-2.5 text-15 font-medium">
				<img
					src="https://www.gravatar.com/avatar/8b0987af0a615d1535491eca8c1362e4?s=80&d=mp&r=g"
					className="w-8 h-8 rounded-full object-cover"
				 alt={"User avatar"}/>
				<div className="flex items-center dark:text-white">
					<span className="hidden md:block">@{user.username}</span>
					<MdArrowDropDown size={22}/>
				</div>
			</Menu.Button>
			<Transition
				enter="transition duration-100 ease-out"
				enterFrom="transform scale-95 opacity-0 translate-y-0"
				enterTo="transform scale-100 opacity-100 translate-y-1.5"
				leave="transition duration-75 ease-out"
				leaveFrom="transform scale-100 opacity-100 translate-y-1.5"
				leaveTo="transform scale-95 opacity-0 translate-y-0"
			>
				<Menu.Items
					className="absolute top-0 right-0 w-[200px] rounded bg-white dark:bg-zinc-800 dark:border-zinc-700 shadow-lg grid p-1.5 border border-zinc-300">
					<Menu.Item>
						{({active}) => (
							<Link
								className={classNames("h-8 text-sm text-zinc-800 font-medium rounded hover:bg-zinc-100 hover:text-black dark:hover:bg-zinc-700 dark:text-white flex items-center px-3", {
									"bg-zinc-100 dark:bg-zinc-700 text-black": active
								})}
								to="/uye/tayfunerbilen"
							>
								{languagesLn("modal_menu","profile")}
							</Link>
						)}
					</Menu.Item>
					<Menu.Item>
						{({active}) => (
							<Link
								className={classNames("h-8 text-sm text-zinc-800 font-medium rounded hover:bg-zinc-100 hover:text-black dark:hover:bg-zinc-700 dark:text-white flex items-center px-3", {
									"bg-zinc-100 dark:bg-zinc-700 text-black": active
								})}
								to="/profil"
							>
								{languagesLn("modal_menu","profile_edit")}
							</Link>
						)}
					</Menu.Item>
					<Menu.Item>
						{({active}) => (
							<Link
								className={classNames("h-8 text-sm text-zinc-800 font-medium rounded hover:bg-zinc-100 hover:text-black dark:hover:bg-zinc-700 dark:text-white flex items-center px-3", {
									"bg-zinc-100 dark:bg-zinc-700 text-black": active
								})}
								to="/profil/takipciler"
							>
								{languagesLn("modal_menu","profile_followers")}
							</Link>
						)}
					</Menu.Item>
					<Menu.Item>
						{({active}) => (
							<Link
								className={classNames("h-8 text-sm text-zinc-800 font-medium rounded hover:bg-zinc-100 hover:text-black dark:hover:bg-zinc-700 dark:text-white flex items-center px-3", {
									"bg-zinc-100 dark:bg-zinc-700 text-black": active
								})}
								to="/profil/takip-ettiklerin"
							>
								{languagesLn("modal_menu","profile_what_ı_follower")}
							</Link>
						)}
					</Menu.Item>
					<Menu.Item>
						{({active}) => (
							<Link
								className={classNames("h-8 text-sm text-zinc-800 font-medium rounded hover:bg-zinc-100 hover:text-black dark:hover:bg-zinc-700 dark:text-white flex items-center px-3", {
									"bg-zinc-100 dark:bg-zinc-700 text-black": active
								})}
								to="/profil/sorular"
							>
								{languagesLn("modal_menu","questions")}
							</Link>
						)}
					</Menu.Item>
					<Menu.Item>
						{({active}) => (
							<Link
								className={classNames("h-8 text-sm text-zinc-800 font-medium rounded hover:bg-zinc-100 hover:text-black dark:hover:bg-zinc-700 dark:text-white flex items-center px-3", {
									"bg-zinc-100 dark:bg-zinc-700 text-black": active
								})}
								to="/profil/cevaplar"
							>
								{languagesLn("modal_menu","answers")}
							</Link>
						)}
					</Menu.Item>
					<Menu.Item>
						{({active}) => (
							<Link
								className={classNames("h-8 text-sm text-zinc-800 font-medium rounded hover:bg-zinc-100 hover:text-black dark:hover:bg-zinc-700 dark:text-white flex items-center px-3", {
									"bg-zinc-100 dark:bg-zinc-700 text-black": active
								})}
								to="/profil/bildirimler"
							>
								{languagesLn("modal_menu","notifications")}
							</Link>
						)}
					</Menu.Item>
					<Menu.Item>
						{({active}) => (
							<button
								className={classNames("h-8 text-sm text-red-600 dark:text-red-500 font-medium rounded hover:bg-red-50 dark:hover:bg-red-500 dark:hover:text-white flex items-center px-3", {
									"bg-red-50 dark:bg-red-500 dark:!text-white": active
								})}
								onClick={() => removeUser()}
							>
								{languagesLn("modal_menu","logout")}
							</button>
						)}
					</Menu.Item>
				</Menu.Items>
			</Transition>
		</Menu>
	)
}

export default function Auth() {
	const {breakpoint} = useBreakpoint()
	const user = useAuth()
	return (
		<>
			{(!user && breakpoint === 'desktop') && (
				<Button
					onClick={() => modal.append('auth.login', {
						name: 'Tayfun',
						surname: 'Erbilen'
					})}
					type="button"
				>
					{languagesLn("login","login_button_text")}
				</Button>
			)}
			{(!user && breakpoint !== 'desktop') && (
				<button
					className="w-9 h-9 flex items-center justify-center text-primary dark:text-zinc-400"
					onClick={() => modal.append('auth.login', {
						name: 'Tayfun',
						surname: 'Erbilen'
					})}
					type="button"
				>
					<LuUser size={24} />
				</button>
			)}
			{user && <UserMenu/>}
		</>
	)
}
