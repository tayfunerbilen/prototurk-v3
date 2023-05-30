import { LuMoonStar } from "react-icons/lu"
import { FiSun } from "react-icons/fi"
import { CgScreen } from "react-icons/cg"

export const apperance = [
  {
    key: 'default',
    value: 'apperance.default'
  },
  {
    key: 'light',
    value: 'apperance.light'
  },
  {
    key: 'dark',
    value: 'apperance.dark'
  }
]

export const getApperanceName = key => apperance.find(a => a.key === key)?.value
export const getApperanceIcon = (key, colorScheme = false) => {
  switch (key) {
    case 'default':
      if (!colorScheme) {
        return <CgScreen size={16} />
      } else {
        if (colorScheme === 'light') {
          return <FiSun size={16} />
        } else {
          return <LuMoonStar size={16} />
        }
      }
    case 'light':
      return <FiSun size={16} />
    case 'dark':
      return <LuMoonStar size={16} />
  }
}

export const languages = [
  {
    key: 'tr',
    value: 'Türkçe'
  },
  {
    key: 'az',
    value: 'Azərbaycan dili'
  },
  {
    key: 'en',
    value: 'English'
  }
]

export const getLanguageName = langCode => languages.find(l => l.key === langCode)?.value
