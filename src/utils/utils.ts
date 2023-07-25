export const formatString = (str: string) => {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase()
}
export function removeAccents(text: string) {
  return text.normalize('NFD').replace(/[\u0300-\u036f]/g, '')
}
export const handleClickSite = () => {
  window.open('https://w3erp.com.br/', '_blank')
}
