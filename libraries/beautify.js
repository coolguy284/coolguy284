Beautifyp = 6; // place value of beautify
Beautifyl = ['million', 'billion', 'trillion', 'quadrillion', 'quintillion', 'sextillion', 'septillion', 'octillion', 'nonillion', 'decillion', 'undecillion', 'duodecillion', 'tredecillion', 'quattuordecillion', 'quindecillion', 'sexdecillion', 'septendecillion', 'octodecillion', 'novemdecillion', 'vigintillion']; // prefixes
// adds commas to string
function BeautifyC(num) {
  var parts = num.toString().split('.');
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  return parts.join('.');
}
// formats number cookie-clicker style
function Beautify(num) {
  if (Game && Game.prefs.format) return BeautifyC(num);
  if (num < 0) return '-' + Beautify(-num);
  if (num < 1000) return num + '';
  if (num < 1000000) return BeautifyC(num);
  var sec = Math.floor(Math.log10(num)/3-2);
  var sed = num / Math.pow(10, sec * 3 + 6);
  sed = Math.floor(sed * Math.pow(10, Beautifyp)) / Math.pow(10, Beautifyp);
  if (sec < Beautifyl.length) {
    return sed.toFixed(Beautifyp) + ' ' + Beautifyl[sec];
  } else return BeautifyC(num);
}
