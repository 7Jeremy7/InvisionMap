let starting = document.getElementById("start");
start.addEventListener("click", function(event){
    document.getElementById("starting-screen").style.display = "none";
    document.getElementById("pantalla-secundaria").style.display = "block";
    document.getElementById("full").style.backgroundImage = "linear-gradient(-225deg, #FF3CAC 0%, #562B7C 52%, #2B86C5 100%)";  
})
