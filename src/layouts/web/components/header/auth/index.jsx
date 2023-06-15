import Button from "~/components/button";
import {modal} from "~/stores/modal/actions";
import {useAuth} from "~/stores/auth/hooks.js";
import {Menu, Transition} from '@headlessui/react'
import {Link} from "react-router-dom";
import {removeUser} from "~/stores/auth/actions.js";
import {MdArrowDropDown} from "react-icons/md";
import classNames from "classnames";

function UserMenu() {
	const user = useAuth()
	return (
		<Menu>
			<Menu.Button className="flex items-center gap-x-2.5 text-15 font-medium">
				<img
					src="https://www.gravatar.com/avatar/8b0987af0a615d1535491eca8c1362e4?s=80&d=mp&r=g"
					className="w-8 h-8 rounded-full object-cover"
				/>
				<div className="flex items-center">
					@{user.username}
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
					className="absolute top-0 right-0 w-[200px] rounded bg-white shadow-lg grid p-1.5 border border-zinc-300">
					<Menu.Item>
						{({active}) => (
							<Link
								className={classNames("h-8 text-sm text-zinc-800 font-medium rounded hover:bg-zinc-100 hover:text-black flex items-center px-3", {
									"bg-zinc-100 text-black": active
								})}
								to="/uye/tayfunerbilen"
							>
								Profil
							</Link>
						)}
					</Menu.Item>
					<Menu.Item>
						{({active}) => (
							<Link
								className={classNames("h-8 text-sm text-zinc-800 font-medium rounded hover:bg-zinc-100 hover:text-black flex items-center px-3", {
									"bg-zinc-100 text-black": active
								})}
								to="/profil"
							>
								Profil Düzenle
							</Link>
						)}
					</Menu.Item>
					<Menu.Item>
						{({active}) => (
							<Link
								className={classNames("h-8 text-sm text-zinc-800 font-medium rounded hover:bg-zinc-100 hover:text-black flex items-center px-3", {
									"bg-zinc-100 text-black": active
								})}
								to="/profil/takipciler"
							>
								Takipçiler
							</Link>
						)}
					</Menu.Item>
					<Menu.Item>
						{({active}) => (
							<Link
								className={classNames("h-8 text-sm text-zinc-800 font-medium rounded hover:bg-zinc-100 hover:text-black flex items-center px-3", {
									"bg-zinc-100 text-black": active
								})}
								to="/profil/takip-ettiklerin"
							>
								Takip Ettiklerin
							</Link>
						)}
					</Menu.Item>
					<Menu.Item>
						{({active}) => (
							<Link
								className={classNames("h-8 text-sm text-zinc-800 font-medium rounded hover:bg-zinc-100 hover:text-black flex items-center px-3", {
									"bg-zinc-100 text-black": active
								})}
								to="/profil/sorular"
							>
								Sorular
							</Link>
						)}
					</Menu.Item>
					<Menu.Item>
						{({active}) => (
							<Link
								className={classNames("h-8 text-sm text-zinc-800 font-medium rounded hover:bg-zinc-100 hover:text-black flex items-center px-3", {
									"bg-zinc-100 text-black": active
								})}
								to="/profil/cevaplar"
							>
								Cevaplar
							</Link>
						)}
					</Menu.Item>
					<Menu.Item>
						{({active}) => (
							<Link
								className={classNames("h-8 text-sm text-zinc-800 font-medium rounded hover:bg-zinc-100 hover:text-black flex items-center px-3", {
									"bg-zinc-100 text-black": active
								})}
								to="/profil/bildirimler"
							>
								Bildirimler
							</Link>
						)}
					</Menu.Item>
					<Menu.Item>
						{({active}) => (
							<button
								className={classNames("h-8 text-sm text-red-600 font-medium rounded hover:bg-red-50 flex items-center px-3", {
									"bg-red-50": active
								})}
								onClick={() => removeUser()}
							>
								Çıkış Yap
							</button>
						)}
					</Menu.Item>
				</Menu.Items>
			</Transition>
		</Menu>
	)
}

export default function Auth() {

	const user = useAuth()

	return (
		<div>
			{!user && (
				<Button
					onClick={() => modal.append('auth.login', {
						name: 'Tayfun',
						surname: 'Erbilen'
					})}
					type="button"
				>
					Giriş yap
				</Button>
			)}
			{user && <UserMenu/>}
		</div>
	)
}
