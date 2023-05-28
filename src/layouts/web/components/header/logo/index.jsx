import { Link } from "react-router-dom";

export default function Logo() {
  return (
    <Link to="/" className="text-2xl font-semibold text-primary transition-colors dark:text-white">
      ./prototurk
      <span className="text-sm ml-2 text-zinc-400">
        v3.0.0
      </span>
    </Link>
  )
}
