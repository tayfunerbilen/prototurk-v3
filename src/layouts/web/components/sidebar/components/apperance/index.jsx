import Button from "~/components/button"
import { setTheme } from "~/stores/app/actions"
import { useTheme } from "~/stores/app/hooks"

export default function Apperance() {

  const theme = useTheme()

  return (
    <div className="mt-auto grid gap-y-1">
      <Button
        onClick={() => {
          setTheme('default')
        }}
        variant={theme === 'default' ? 'primary' : 'gray'}
      >
        Sistem
      </Button>
      <Button
        onClick={() => {
          setTheme('light')
        }}
        variant={theme === 'light' ? 'primary' : 'gray'}
      >
        Açık
      </Button>
      <Button
        onClick={() => {
          setTheme('dark')
        }}
        variant={theme === 'dark' ? 'primary' : 'gray'}
      >
        Koyu
      </Button>
    </div >
  )
}
