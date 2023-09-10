export function convertDate(date) {
    var partes = date.split('-');
    if (partes.length === 3) {
      return partes[2] + '-' + partes[1] + '-' + partes[0];
    }
    return null; 
  }

export function formatDate(date) {
  console.log(date)
  const formattedDate = date.substring(0, 10); 
  return formattedDate;
}