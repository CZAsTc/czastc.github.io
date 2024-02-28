fetch(`https://ipinfo.io/json?token=${process.env.IPINFO_TOKEN}`)
    .then(response => response.json())
    .then(data => {
        const country = data.country;
        if (country === "US") {
            window.location.href = "https://czastc.pages.dev/en"
        } else if (country === "GB") {
            window.location.href = "https://czastc.pages.dev/en"
        } else if (country === "CA") {
            window.location.href = "https://czastc.pages.dev/en"
        } else if (country === "CN") {
            window.location.href = "https://czastc.pages.dev/zh-CN"
        }
    })
    .catch(error => {
        console.error("Error: ", error);
    });