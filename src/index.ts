import { get } from './utils/get'
import { template } from './utils/template'

export type Lingoda = {
  t: (path: string, data?: object) => string;
  set: (locale: string, dictionary: object) => void;
  lang: (locale?: string) => string | void;
}

type Dictionary = object | null | undefined
type Languaje = string | undefined

let locales: object = {}
let locale: string = ''

const set = (lang: string, dictionary: object): void => {
  const l = locales[lang] || {}
  const result = {
    ...l,
    ...dictionary
  }

  locales = {
    ...locales,
    [lang]: result
  }
}

const t = (key: string, data?: object): string => {
  const value: string = get(locales[locale], key, key)
  return data != null ? template(value, data) : value
}

const lang = (l: Languaje) => {
  if (l) {
    !locales[l] ? console.warn(`lingoda: locale ${l} doesn't exist`) : locale = l
  }

  return locale
}

const lingoda = (dictionary: Dictionary, initial: string): Lingoda => {
  locales = { ...dictionary }
  lang(initial)

  return {
    t,
    set,
    lang
  }
}

export default lingoda
