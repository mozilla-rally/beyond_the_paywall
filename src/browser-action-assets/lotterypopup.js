(async function() {
    // Load the redeem code from local storage
    const codeStorageKey = "redeemCode";
    const codeResults = await browser.storage.local.get(codeStorageKey);
    if(codeResults[codeStorageKey]) {
        const redeemCode = codeResults[codeStorageKey]
        const contentElement = document.getElementById("redeemCode");
        contentElement.textContent = redeemCode
    }
    
    // Listen for clicks on the buttons
    document.addEventListener("click", async (e) => {
        if (e.target.name === "redeemed") {
            await browser.runtime.sendMessage({type: "WebScience.redeemed"});
            window.close()
        }
    });
})();
