const games=[
["Click Rush","Arcade","🎯","Hit the target in 20 seconds.","games/click-rush.html","assets/thumbs/click-rush.svg","4.8"],
["Guess Number","Puzzle","🔢","Guess the secret number from 1 to 100.","games/guess-number.html","assets/thumbs/guess-number.svg","4.7"],
["Reaction Test","Action","⚡","Test your reaction speed.","games/reaction-test.html","assets/thumbs/reaction-test.svg","4.9"],
["Memory Match","Puzzle","🧠","Match all pairs as fast as you can.","games/memory-match.html","assets/thumbs/memory-match.svg","4.8"],
["Snake Classic","Arcade","🐍","Eat food, grow longer and beat your best score.","games/snake.html","assets/thumbs/snake.svg","4.9"],
["Number Click","Action","🔢","Click every number in the correct order.","games/number-click.html","assets/thumbs/number-click.svg","4.6"]
];
let cat="All";
function render(){const q=search.value.toLowerCase().trim();const a=games.filter(g=>(cat==="All"||g[1]===cat)&&g.slice(0,2).join(" ").toLowerCase().includes(q));grid.innerHTML=a.map(g=>`<a class="card" href="${g[4]}"><div class="thumb"><img src="${g[5]}" alt="${g[0]} game thumbnail" loading="lazy"><span class="play-pill">▶ Play</span></div><div class="card-body"><div class="card-meta"><span class="card-category">${g[1]}</span><span class="card-rating">★ ${g[6]}</span></div><h3>${g[0]}</h3><p>${g[3]}</p><div class="card-footer"><span>Play Now</span><span>→</span></div></div></a>`).join("");count.textContent=`${a.length} game${a.length===1?"":"s"}`;}
const cats=["All",...new Set(games.map(g=>g[1]))];
cats.forEach(c=>{const b=document.createElement("button");b.className="chip"+(c==="All"?" active":"");b.textContent=c;b.onclick=()=>{cat=c;document.querySelectorAll(".chip").forEach(x=>x.classList.remove("active"));b.classList.add("active");render()};document.querySelector("#cats").appendChild(b)});
if(document.querySelector("#categoryCards"))document.querySelector("#categoryCards").innerHTML=cats.slice(1).map(c=>`<span class="cat">${c}</span>`).join("");
search.oninput=render;render();