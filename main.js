let grossAmount = document.getElementById("gt")
let gstEl = document.getElementById("gst")
let tipEl = document.getElementById("tip")
let submit = document.getElementById("btn")
let popup = document.getElementById("popup")
let ans = document.getElementById("h1")
let containerEl = document.getElementById("container")

submit.addEventListener("click", function(){
    let ga = parseFloat(grossAmount.value)
    let gst = parseFloat(gstEl.value)
    let tip = parseFloat(tipEl.value)
    let gstCalculated = ga*(gst/100)
    let netAmount = ga + gstCalculated + tip
    if (isNaN(netAmount)){
        alert("PLEASE ADD VALID VALUES!!!!")
        location.reload()
    }else{
        popup.style.transform = "scale(1)"
        ans.innerHTML = `Net Amount is ${netAmount}₹<br>GST is ${gstCalculated}₹<br> Tip is ${tip}₹`  
        containerEl.style.transform = "scale(0)"
        popup.innerHTML += `<br><button onclick="location.reload()">Reset</button>`
    }
})
