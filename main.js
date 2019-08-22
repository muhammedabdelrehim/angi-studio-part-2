function TaxicabGeometry() {
  var dataInput =
    'R2, L3, R2, R4, L2, L1, R2, R4, R1, L4, L5, R5, R5, R2, R2, R1, L2, L3, L2, L1, R3, L5, R187, R1, R4, L1, R5, L3, L4, R50, L4, R2, R70, L3, L2, R4, R3, R194, L3, L4, L4, L3, L4, R4, R5, L1, L5, L4, R1, L2, R4, L5, L3, R4, L5, L5, R5, R3, R5, L2, L4, R4, L1, R3, R1, L1, L2, R2, R2, L3, R3, R2, R5, R2, R5, L3, R2, L5, R1, R2, R2, L4, L5, L1, L4, R4, R3, R1, R2, L1, L2, R4, R5, L2, R3, L4, L5, L5, L4, R4, L2, R1, R1, L2, L3, L2, R2, L4, R3, R2, L1, L3, L2, L4, L4, R2, L3, L3, R2, L4, L3, R4, R3, L2, L1, L4, R4, R2, L4, L4, L5, L1, R2, L5, L2, L3, R2, L2'
  var blocks = dataInput.split(',')
  var xAxis = 0
  var yAxis = 0
  var xOrYAxis = [0, 1]
  var xAndYSet = new Set()
  for (var i = 0; i < blocks.length; i++) {
    var block = blocks[i].trim()
    var direction = block.charAt(0)
    var distance = block.substr(1)

    xOrYAxis =
      direction === 'L'
        ? [xOrYAxis[1], -xOrYAxis[0]]
        : [-xOrYAxis[1], xOrYAxis[0]]
    for (var j = 0; j < distance; j++) {
      xAxis += xOrYAxis[0]
      yAxis += xOrYAxis[1]
      var xAndYAxis = `${xAxis},${yAxis}`
      xAndYSet.add(xAndYAxis)
    }
  }

  return Math.abs(xAxis) + Math.abs(yAxis)
}

document.getElementById('root').innerHTML = TaxicabGeometry()
