function qbScoring(qbStats) {
  let passingYardScore = qbStats.passing.yards / 25
  let passingTouchdownScore = qbStats.passing.touchdowns * 6
  let interceptionScore = qbStats.passing.interceptions * -3
  let rushingYardScore = qbStats.rushing.yards / 10
  let rushingTouchdownScore = qbStats.rushing.touchdowns * 6
  let rushingFumbleScore = qbStats.rushing.fumbles * -3

  return passingYardScore + passingTouchdownScore + 
  interceptionScore + rushingYardScore + rushingTouchdownScore + rushingFumbleScore
}



function checkPosition(player) { 
  if (player.position === 'QB') {
    return qbScoring(player.stats)
  }

  else return 0
}
function calculateScore(player) {
  let score = checkPosition(player)

  return score
}

module.exports = calculateScore
