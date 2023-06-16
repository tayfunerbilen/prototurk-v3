import { Link } from "react-router-dom";
import {useBreakpoint} from "~/hooks/use-breakpoint.js";

export default function Logo() {

  const {breakpoint} = useBreakpoint()

  return (
    <Link to="/" className="text-2xl font-semibold text-primary transition-colors dark:text-white">
      ./prototurk
      {breakpoint === 'desktop' && (
        <span className="text-sm ml-2 text-zinc-400">
          v3.0.0
        </span>
      )}
    </Link>
  )
}
