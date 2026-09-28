document.addEventListener("DOMContentLoaded", () => {
    const btn = document.getElementById("fakt-btn");
    const anzeige = document.getElementById("fakt-anzeige");

    if (btn) {
        btn.addEventListener("click", () => {
            anzeige.textContent = "Pfirsiche bestehen zu 89% aus Wasser!";
        });
    }
});

