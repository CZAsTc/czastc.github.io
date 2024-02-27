export default {
    async fetch(request) {
        const countryMap = {
            US: "https://czastc.pages.dev/en", 
            GB: "https://czastc.pages.dev/en", 
            CA: "https://czastc.pages.dev/en", 
            CN: "https://czastc.pages.dev/zh-CN", 
        };
        const country = request.cf.country;
        if (country != null && country in countryMap) {
            const url = countryMap[country];
            return Response.redirect(url);
        } else {
            return fetch("https://czastc.pages.dev/zh-CN", request);
        }
    },
};