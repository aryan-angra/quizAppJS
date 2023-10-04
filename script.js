let i;
let count=0
let labelList = document.getElementsByClassName("correctAns")
let correctAns = document.getElementsByClassName("correct")
document.querySelector("span.totalScore").innerHTML = correctAns.length
let marksObtained = 0
let resultElements = document.getElementsByClassName("result")
function loadResult(){
    for(i=0;i<correctAns.length;i++){
        if(correctAns[i].checked){
            resultElements[i].innerHTML = "Yes, your answer is correct !"
            resultElements[i].classList.add("correctOpt")
            resultElements[i].classList.remove("incorrectOpt")
            marksObtained++;
        }
        else{
            resultElements[i].innerHTML = "Incorrect Answer !"
            resultElements[i].classList.add("incorrectOpt")
            resultElements[i].classList.remove("correctOpt")
        }
    }
    document.querySelector(".marksObtained").innerHTML = marksObtained
    if(marksObtained<correctAns.length/2)
        document.querySelector(".emoji").innerHTML = "&#129402;"
    else
        document.querySelector(".emoji").innerHTML = "&#128515;"

    document.querySelector(".score-count").setAttribute("style","display:block")
    marksObtained = 0
}