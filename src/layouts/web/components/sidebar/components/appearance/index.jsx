import {Menu} from '@headlessui/react'
import {setTheme} from "~/stores/app/actions"
import {useTheme} from "~/stores/app/hooks"
import {appearance, getAppearanceIcon, getLanguageName, languages} from '~/utils/languages/appearance.jsx'
import classNames from 'classnames'
import useColorScheme from '~/hooks/use-color-scheme'
import {useTranslation} from 'react-i18next'
import languagesLn from "~/utils/languages/index.js";

export default function Appearance() {

  const theme = useTheme()
  const { colorScheme } = useColorScheme()
  const { i18n } = useTranslation()
  return (

    <div className="mt-auto gap-y-1 gap-x-2 grid grid-cols-2">

      <Menu as="nav" className="relative">
        <Menu.Button className="h-10 rounded border w-full  border-zinc-300 bg-zinc-50 dark:bg-zinc-800 dark:text-white dark:border-zinc-700 gap-x-2.5 font-medium text-primary flex items-center justify-center text-sm">
          <span className="text-black dark:text-white">
            {getAppearanceIcon(theme, colorScheme)}
          </span>
          {languagesLn("appearance", theme)}
        </Menu.Button>
        <Menu.Items as="div" className="absolute bottom-full left-0 w-[234px] bg-white border border-zinc-300 rounded overflow-hidden grid -translate-y-1 dark:bg-zinc-800 dark:text-white dark:border-zinc-700">
          {appearance.map(({ key, value }, index) => (
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
                >
                  <span className={classNames({
                    "!text-white": active,
                    "text-black dark:text-white": !active,
                    "text-blue-800 dark:text-white": key === theme
                  })}>
                    {getAppearanceIcon(key)}
                  </span>
                  {languagesLn("appearance", `${value}`, true)}
                </button>
              )}
            </Menu.Item>
          ))}
        </Menu.Items>
      </Menu>

      <Menu as="nav" className="relative">
        <Menu.Button className="h-10 rounded border w-full border-zinc-300 bg-zinc-50 dark:bg-zinc-800 dark:text-white dark:border-zinc-700 gap-x-2.5 font-medium text-primary flex items-center justify-center text-sm">
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
