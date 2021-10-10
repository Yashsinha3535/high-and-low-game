let btn = document.getElementById("btn")
let resultText = document.getElementById("result")
random = Math.floor(Math.random() * 100)


btn.addEventListener('click',function(){
    input = document.getElementById("input").value
    num = parseInt(input)

    if(num == random){
        resultText.innerHTML = `You win! The number is ${random} uwu`
    }
    else if(num > random){
        resultText.innerHTML = "The number is lower than your input. Try again :)"
    }
    else if(num < random){
        resultText.innerHTML = "The number is higher than your input. Try again :)"
    }


})