// Initialize button with user's preferred color
let extractInfo = document.getElementById("extractInfo");
extractInfo.style.backgroundColor = '#3aa757';

// When the button is clicked, inject extractInfoFromPage into current page
extractInfo.addEventListener("click", async () => {
    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        function: extractInfoFromPage,
    });
});

// The body of this function will be executed as a content script inside the
// current page
// TODO(songzy): complete this function.
function extractInfoFromPage() {
    console.log("hi!");
}