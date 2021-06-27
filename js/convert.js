function convert(number) {
  var array = new Array()
  var remainder = 0
  var i = 0


  while(number !== 0) {
    remainder = number % 2
    array[i] = remainder
    number = parseInt(number / 2)
    i++
  }

  return array.reverse().join()
}

module.exports = convert