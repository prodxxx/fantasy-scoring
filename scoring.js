const calculateScore = (player) => {

  switch (player.position) {
    case 'QB':
      return passingScore() + rushingScore()
    case 'RB':
    case 'WR':
      return rushingScore() + kickReturnScore() + puntReturnScore() + receivingScore()
    case 'TE':
      return receivingScore()
    default:
      return 0
  }


  function passingScore() {
    const passingScore = (player.stats.passing.yards / 25) + (player.stats.passing.touchdowns * 6) + (player.stats.passing.interceptions * -3)
    return passingScore
  }

  function rushingScore() {
    const rushingScore = (player.stats.rushing.yards / 10) + (player.stats.rushing.touchdowns * 6) + (player.stats.rushing.fumbles * -3)
    return rushingScore
  }

  function receivingScore() {
    const receivingScore = player.stats.receiving.receptions + (player.stats.receiving.yards / 10) + (player.stats.receiving.touchdowns * 6) + (player.stats.receiving.fumbles * -3)
    return receivingScore
  }

  function kickReturnScore() {
    const kickReturnScore = (player.stats.return.kickreturn.yards / 15) + (player.stats.return.kickreturn.touchdowns * 6) + (player.stats.return.kickreturn.fumbles * -3)
    return kickReturnScore
  }

  function puntReturnScore() {
    const puntReturnScore = (player.stats.return.puntreturn.yards / 15) + (player.stats.return.puntreturn.touchdowns * 6) + (player.stats.return.puntreturn.fumbles * -3)
    return puntReturnScore
  }
}

module.exports = calculateScore

