async function loadLeaderboard(){

 const res = await 
fetch("https://rusu-eduard.github.io/knowledge-league/leaderboard.json")

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
