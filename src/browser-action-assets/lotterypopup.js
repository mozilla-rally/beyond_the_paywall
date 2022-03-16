(async function() {
    // Load the redeem code from local storage
    const codeStorageKey = "redeemCode";
    const codeResults = await browser.storage.local.get(codeStorageKey);
    if(codeResults[codeStorageKey]) {
        const redeemCode = codeResults[codeStorageKey]
        const contentElement = document.getElementById("content");
        contentElement.innerHTML = `<h3><center>Beyond the Paywall</center></h3><p>Congratulations, you've won this week's lottery for participants in the Beyond the Paywall study!<br><br>To claim your $50 Amazon.com gift card, use the code <b>${redeemCode}</b><br><br>Please redeem your code at <a href="https://www.amazon.com/gc/redeem">amazon.com/redeem</a> and then click the "Redeemed" button below to clear this message.</p>`
    }
    
    // Listen for clicks on the buttons
    document.addEventListener("click", async (e) => {
        if (e.target.name === "redeemed") {
            await browser.runtime.sendMessage({type: "WebScience.redeemed"});
            window.close()
        }
    });
})();
