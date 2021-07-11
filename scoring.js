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
function rbScoring(rbStats) {
    let receptionScore = rbStats.receiving.receptions
    let rushingYardScore = rbStats.rushing.yards / 10
    let rushingTouchdownScore = rbStats.rushing.touchdowns * 6
    let rushingFumbleScore = rbStats.rushing.fumbles * -3
    let recYardScore = rbStats.receiving.yards / 10
    let recTouchdownScore = rbStats.receiving.touchdowns * 6
    let recFumbleScore = rbStats.receiving.fumbles * -3
    let kickReturnYardsScore = rbStats.return.kickreturn.yards / 15
    let kickReturnTouchdownScore = rbStats.return.kickreturn.touchdowns * 6
    let kickreturnFumbleScore = rbStats.return.kickreturn.fumbles * -3
    let puntReturnYardsScore = rbStats.return.puntreturn.yards / 15
    let puntreturnTouchdownScore = rbStats.return.puntreturn.touchdowns * 6
    let puntreturnFumbleScore = rbStats.return.puntreturn.fumbles * -3
    
    return receptionScore +
          rushingTouchdownScore +
          rushingYardScore +
          rushingFumbleScore +
          recYardScore +
          recTouchdownScore +
          recFumbleScore +
          kickReturnYardsScore +
          kickReturnTouchdownScore +
          kickreturnFumbleScore +
          puntReturnYardsScore +
          puntreturnTouchdownScore +
          puntreturnFumbleScore
  
  }



function checkPosition(player) { 
  if (player.position === 'QB') {
    return qbScoring(player.stats)
  }

  else if (player.position === 'RB') {
    return rbScoring(player.stats)
  }
  else return 0
}
function calculateScore(player) {
  let score = checkPosition(player)

  return score
}

module.exports = calculateScore
