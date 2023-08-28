function formatDate(date) {
  var d = new Date(date),
      month = '' + (d.getMonth() + 1),
      day = '' + d.getDate(),
      year = d.getFullYear();

  if (month.length < 2) 
      month = '0' + month;
  if (day.length < 2) 
      day = '0' + day;

  return [year, month, day].join('-');
}

export function  getDates() {
  let newDate = new Date()
  let startDate = newDate.setDate(newDate.getDate() - 6)
  startDate = formatDate(startDate)
  const endDate = formatDate(new Date())

  const dates = [startDate, endDate]

  return dates
}

export function formatDateToChart(date) {
  return new Date(date).toLocaleDateString('en-us', {  timeZone: 'UTC', month:"short", day:"numeric" })
}
