export const simpleDate = (unformated) => {
  let date = new Date(0).setUTCSeconds(unformated)
  date = new Date(date)
  let formated =
    (date.getDate() <= 9 ? '0' + date.getDate() : date.getDate()) +
    '-' +
    (date.getMonth() <= 9 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) +
    '-' +
    date.getFullYear()
  return formated
}
