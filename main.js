let grossAmount = document.getElementById("gt")
let gstEl = document.getElementById("gst")
let tipEl = document.getElementById("tip")
let submit = document.getElementById("btn")
let popup = document.getElementById("popup")
let ans = document.getElementById("h1")

submit.addEventListener("click", function(){
    let ga = parseFloat(grossAmount.value)
    let gst = parseFloat(gstEl.value)
    let tip = parseFloat(tipEl.value)
    let netAmount = ga + ga*(gst/100) + tip
    if (isNaN(netAmount)){
        alert("PLEASE ADD VALID VALUES!!!!")
        location.reload()
    }else{
        popup.style.transform = "scale(1)"
        ans.innerHTML = `Net Amount is ${netAmount}₹`  
        popup.innerHTML += `<br><button onclick="location.reload()">Reset</button>`
    }
})
