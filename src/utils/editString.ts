export const editString = (str: string): string => {
  if (str) {
    const newStr = str.replace(/&/g, "\n")
    return newStr
  }
  return ''
}