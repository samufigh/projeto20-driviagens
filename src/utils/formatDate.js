export function convertDate(date) {
    const parts = date.split('-')
    if (parts.length === 3) {
      return parts[2] + '-' + parts[1] + '-' + parts[0]
    }
    return null
  }

export function formatDate(date) {
  const pattern = /^\d{2}-\d{2}-\d{4}$/
  return pattern.test(date)
}

export function desconvertDate(date) {
  const parts = date.split('-')
    const [day, month, year] = parts
    const newDate = `${year}-${month}-${day}`
    return newDate
}