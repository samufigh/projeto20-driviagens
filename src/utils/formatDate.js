export function convertDate(dataStr) {
    var partes = dataStr.split('-');
    if (partes.length === 3) {
      return partes[2] + '-' + partes[1] + '-' + partes[0];
    }
    return null; 
  }