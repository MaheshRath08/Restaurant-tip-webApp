let grossAmount = document.getElementById("gt")
let gstEl = document.getElementById("gst")
let tipEl = document.getElementById("tip")
let submit = document.getElementById("btn")
let popup = document.getElementById("popup")
let ans = document.getElementById("h1")

submit.addEventListener("click", function(){
    let ga = grossAmount.value
    let gst = gstEl.value
    let tip = tipEl.value
    let netAmount = ga + ga*(gst/100) + tip
    popup.style.transform = "scale(1)"
    ans.innerHTML = `Net Amount is ${netAmount}`  
    popup.innerHTML += `<br><button onclick="location.refresh()">Reset</button>`
})