async function fetchQuote() {
    const response = await fetch("http://api.quotable.io/quotes/random");
    const data = await response.json();
    document.getElementById("quoteText").textContent = `"${data[0].content}"`;
    document.getElementById("quoteAuthor").textContent = `- ${data[0].author}`;

    // Random background image
    document.body.style.backgroundImage = `url('https://source.unsplash.com/1600x900/?nature,abstract')`;
}

function copyQuote() {
    const quote = document.getElementById("quoteText").textContent + " " + document.getElementById("quoteAuthor").textContent;
    navigator.clipboard.writeText(quote);
    alert("Quote copied!");
}

function shareOnTwitter() {
    const quote = document.getElementById("quoteText").textContent + " " + document.getElementById("quoteAuthor").textContent;
    const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(quote)}`;
    window.open(twitterUrl, "_blank");
}

function exportImage() {
    html2canvas(document.getElementById("quoteContainer")).then(canvas => {
        let link = document.createElement("a");
        link.href = canvas.toDataURL("image/png");
        link.download = "quote.png";
        link.click();
    });
}

// Fetch first quote on load
fetchQuote();
