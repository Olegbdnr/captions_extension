chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === "captureCaptions") {
        captureCaptions();
    }
});

function captureCaptions() {
    let captionsContainer = document.querySelector('pjsdiv span')
    ?.parentElement;

    if (captionsContainer) {
        captionsContainer.addEventListener("click", (event) => {
            console.log("Caption clicked:", event.target.innerText);
        });
        alert("Captions captured! Click on subtitles to see logs.");
    } else {
        alert("Start the video first, then click again.");
    }
}