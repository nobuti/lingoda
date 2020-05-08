/*
 * Ubersimple templating engine.
 *
 * @param {string} str - The string used as base to inject the data values
 * @param {object} data - The data values
 */

export const template = (str:string, data:Object):string => {
  for (const p in data) {
    str = str.replace(new RegExp(`{${p}}`, 'g'), data[p])
  }

  return str
}
