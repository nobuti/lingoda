/*
 * Gets the value at path of object.
 *
 * @param {object} obj  - The data model
 * @param {string} path - The key you are trying to get, dot separated
 * @param defaultValue  - The value returned if not found
 */

export const get = (obj:object, path:string, defaultValue?:any):any => {
  const travel = (regexp:RegExp) =>
    String.prototype.split
      .call(path, regexp)
      .filter(Boolean)
      .reduce((res:object, key:string) => (res !== null && res !== undefined ? res[key] : res), obj)
  const result = travel(/[,[\]]+?/) || travel(/[,[\].]+?/)
  return result === undefined || result === obj ? defaultValue : result
}
