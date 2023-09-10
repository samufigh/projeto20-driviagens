export function convertDate(date) {
    var partes = date.split('-')
    if (partes.length === 3) {
      return partes[2] + '-' + partes[1] + '-' + partes[0]
    }
    return null
  }

export function formatDate(date) {
  const pattern = /^\d{2}-\d{2}-\d{4}$/
  return pattern.test(date)
}

export function desconvertDate(date) {
  const partes = date.split('-')
    const [dia, mes, ano] = partes
    const dataNoNovoFormato = `${ano}-${mes}-${dia}`
    return dataNoNovoFormato
}