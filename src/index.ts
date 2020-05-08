import { get } from './utils/get'
import { template } from './utils/template'

type Lingoda = {
  t: Function
  set: Function
  lang: Function
}

type Dictionary = Object | null | undefined
type Languaje = string | null | undefined

let locales:Object = {}
let locale:string = ''

const set = (lang:string, dictionary:Object):void => {
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

const t = (key:string, data?:object):string => {
  const value:string = get(locales[locale], key, key)
  return data != null ? template(value, data) : value
}

const lang = (l:Languaje) => {
  if (l != null) {
    !locales[l] ? console.warn(`lingoda: locale ${l} doesn't exist`) : locale = l
  }

  return locale
}

const lingoda = (dictionary:Dictionary, initial:string):Lingoda => {
  locales = { ...dictionary }
  lang(initial)

  return {
    t,
    set,
    lang
  }
}

export default lingoda
