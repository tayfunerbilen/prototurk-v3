export default function Search() {
	return (
		<div className="max-w-[600px] w-full">
			<input
				type="text"
				className="w-full h-10 rounded bg-white/40 dark:bg-zinc-700/50 border border-zinc-300 dark:border-zinc-700 focus:border-zinc-500 dark:focus:border-zinc-500 dark:text-white backdrop-blur px-4 outline-none text-sm font-semibold"
				placeholder="Ara"
			/>
		</div>
	)
}
