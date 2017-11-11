 (function () {
    console.log("here");
    let raffleForm = document.getElementById("raffle-input-form");
    let raffleWinner = document.getElementById("raffle-winner-text");
    raffleForm.addEventListener("submit", function(event) {
        event.preventDefault();

        raffleWinner.innerHTML = "here";
    });
})();
