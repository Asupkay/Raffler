 (function () {
    console.log("here");
    let raffleForm = document.getElementById("raffle-input-form");
    let emails = document.getElementById("emails");
    let raffleWinner = document.getElementById("raffle-winner-text");
    raffleForm.addEventListener("submit", function(event) {
        event.preventDefault();

        //var xmlHttp = new XMLHttpRequest();
        //xmlHttp.open("POST", "https://us-central1-raffler-185618.cloudfunctions.net/randomGET", false);
        //xmlHttp.send(emails);
        //console.log(emails);
        raffleWinner.innerHTML = "here";
    });
})();
