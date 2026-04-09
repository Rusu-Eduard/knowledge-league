async function loadLeaderboard(){

 const res = await fetch(
 "https://raw.githubusercontent.com/Rusu-Eduard/knowledge-league/main/leaderboard.json"
 )

 const data = await res.json()

 const container = document.getElementById("leaderboard")

 container.innerHTML = ""

 data.teams.forEach(team=>{
  container.innerHTML += `
   <p>${team.name} - ${team.points}</p>
  `
 })

}

loadLeaderboard()

setInterval(loadLeaderboard,5000)
