import { Menu } from '@headlessui/react'
import { setTheme } from "~/stores/app/actions"
import { useTheme } from "~/stores/app/hooks"
import { apperance, getApperanceIcon, getApperanceName, getLanguageName, languages } from '~/utils/consts/apperance'
import classNames from 'classnames'
import useColorScheme from '~/hooks/use-color-scheme'
import { useTranslation } from 'react-i18next'

export default function Appearance() {

  const theme = useTheme()
  const { colorScheme } = useColorScheme()
  const { t, i18n } = useTranslation()

  return (
    <div className="mt-auto grid gap-y-1 gap-x-2 grid grid-cols-2">

      <Menu as="nav" className="relative">
        <Menu.Button className="h-10 rounded border w-full text-zinc-600 border-zinc-300 bg-zinc-50 dark:bg-zinc-800 dark:text-white dark:border-zinc-700 gap-x-2.5 font-medium text-primary flex items-center justify-center text-sm">
          <span className="text-black dark:text-white">
            {getApperanceIcon(theme, colorScheme)}
          </span>
          {t(getApperanceName(theme))}
        </Menu.Button>
        <Menu.Items as="div" className="absolute bottom-full left-0 w-[234px] bg-white border border-zinc-300 rounded overflow-hidden grid -translate-y-1 dark:bg-zinc-800 dark:text-white dark:border-zinc-700">
          {apperance.map(({ key, value }, index) => (
            <Menu.Item key={index}>
              {({ active }) => (
                <button
                  onClick={() => {
                    setTheme(key)
                  }}
                  className={classNames("h-9 px-3 flex items-center text-zinc-600 dark:text-white/80 gap-x-2.5 text-sm font-medium", {
                    "bg-zinc-700 !text-white": active,
                    "bg-blue-50 dark:bg-primary text-blue-600 dark:text-white": key === theme
                  })}
                  href="/account-settings"
                >
                  <span className={classNames({
                    "!text-white": active,
                    "text-black dark:text-white": !active,
                    "text-blue-800 dark:text-white": key === theme
                  })}>
                    {getApperanceIcon(key)}
                  </span>
                  {t(value)}
                </button>
              )}
            </Menu.Item>
          ))}
        </Menu.Items>
      </Menu>

      <Menu as="nav" className="relative">
        <Menu.Button className="h-10 rounded border w-full text-zinc-600 border-zinc-300 bg-zinc-50 dark:bg-zinc-800 dark:text-white dark:border-zinc-700 gap-x-2.5 font-medium text-primary flex items-center justify-center text-sm">
          <img
            src={`/icons/${i18n.language}.svg`}
            className="w-4 h-4 rounded-full object-cover"
            alt={getLanguageName(i18n.language)}
          />
          {i18n.language.toUpperCase()}
        </Menu.Button>
        <Menu.Items as="div" className="absolute bottom-full right-0 w-[234px] bg-white border border-zinc-300 rounded overflow-hidden grid -translate-y-1 dark:bg-zinc-800 dark:text-white dark:border-zinc-700">
          {languages.map(({ key, value }, index) => (
            <Menu.Item key={index}>
              {({ active }) => (
                <button
                  onClick={() => {
                    i18n.changeLanguage(key)
                  }}
                  className={classNames("h-9 px-3 flex items-center text-zinc-600 dark:text-white gap-x-2.5 text-sm font-medium", {
                    "bg-zinc-700 !text-white": active,
                    "bg-blue-50 dark:bg-primary text-blue-600 dark:text-white": key === i18n.language
                  })}
                  href="/account-settings"
                >
                  <img
                    src={`/icons/${key}.svg`}
                    className="w-4 h-4 rounded-full object-cover"
                    alt={value}
                  />
                  {value}
                </button>
              )}
            </Menu.Item>
          ))}
        </Menu.Items>
      </Menu>

    </div>
  )
}
