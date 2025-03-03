const addEventListenerToCaptions = () => {
    
    const captionsDiv = document.querySelector("pjsdiv span");
    
    if (captionsDiv) {
        captionsDiv.addEventListener("click", () => {
            console.log(captionsDiv.innerText);
        });
        console.log("Caption found and event listener added.");
    } else {
        console.log("Captions not found yet.");
    }
};

const observer = new MutationObserver(() => {
    addEventListenerToCaptions();
});

const parentContainer = document.getElementById("cdnplayer");
observer.observe(parentContainer, {
    childList: true,  
    subtree: true     
});

addEventListenerToCaptions();