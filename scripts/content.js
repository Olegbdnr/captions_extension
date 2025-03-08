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
            if(captionsContainer.childNodes.length <= 1) {
                console.log("Caption clicked:", event.target.innerText);
                replaceCaptionWithCustomSpans();
            }
        });
        alert("Captions captured! Click on subtitles to see logs.");
    } else {
        alert("Start the video first, then click again.");
    }
}

function replaceCaptionWithCustomSpans() {
    const caption = document.querySelector("pjsdiv span");
    if (!caption) return;

    const text = caption.innerHTML.replace(/<br\s*\/?>/g, " \n ");
    const words = text.split(/\s+/); 

    const captionContainer = caption.parentElement;

    words.forEach((word, index) => {
        const wordSpan = document.createElement("span");
        wordSpan.innerHTML = word + " ";
        wordSpan.style = caption.style.cssText;
        wordSpan.style.cursor = "pointer";
        wordSpan.style.padding = "2px 4px"

        wordSpan.addEventListener("mouseenter", () => {
            wordSpan.style.backgroundColor = "rgba(255, 255, 255, 0.3)"; 
        });

        wordSpan.addEventListener("mouseleave", () => {
            wordSpan.style.backgroundColor = "rgba(0,0,0,0.7)";
        });

        wordSpan.addEventListener("click", (event) => {
            console.log(`Clicked word: ${word}`);
        });

        captionContainer.appendChild(wordSpan);
    });

    caption.style.display = "none";
}