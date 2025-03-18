
let countEl = document.getElementById("count-el")
let missEl = document.getElementById("miss-el")
let saveEl = document.getElementById("save-el")
let count = 0
let total = 0
let stats
//let ciao = count + "/" + total
function increment(){
    total += 1
    count += 1
    countEl.textContent = count + "/" + total
}
function miss(){
    total += 1
    countEl.textContent = count + "/" + total
}
function save(){
    stats = (count / total) * 100
    stats = stats.toFixed(2); // Limita a due decimali
    let countStr = count + "/" + total  + "(" + stats + "%) <br>" 
    saveEl.innerHTML += countStr 
    //innerText vs textContent, look Modzilla
    count = 0
    total = 0
    countEl.textContent = count + "/" + total 
}