import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import 'dayjs/locale/tr'

dayjs.extend(relativeTime)
dayjs.locale('tr')

export const timeAgo = time => dayjs(time).fromNow()
