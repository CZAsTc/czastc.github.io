fetch(`https://ipinfo.io/json?token=b300d35c14a289`)
    .then(response => response.json())
    .then(data => {
        const country = data.country;
        if (country === "US") {
            window.location.href = "https://czastc.pages.dev/en-US"
        } else if (country === "GB") {
            window.location.href = "https://czastc.pages.dev/en-GB"
        } else if (country === "CA") {
            window.location.href = "https://czastc.pages.dev/en-US"
        } else if (country === "CN") {
            window.location.href = "https://czastc.pages.dev/zh-CN"
        }
        else {
            window.location.href = "https://czastc.pages.dev/en-US"
        }
    })
    .catch(error => {
        console.error("Error: ", error);
    });
