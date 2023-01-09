let elForm = document.querySelector('.form')
let elInput = document.querySelector('.input')
let elResult = document.querySelector('.result')
let elSelect = document.querySelector('.select')


elForm.addEventListener('submit', (e) => {
    e.preventDefault()
    let select = elSelect.value

    const encodedParams = new URLSearchParams();
    encodedParams.append("q", elInput.value);
    encodedParams.append("target", `${select}`);
    encodedParams.append("source", "uz");

    const options = {  
        
    };

    fetch('https://google-translate1.p.rapidapi.com/language/translate/v2', {
        method: 'POST',
        headers: {
            'content-type': 'application/x-www-form-urlencoded',
            'Accept-Encoding': 'application/gzip',
            'X-RapidAPI-Key': '4bf5c7caeamsh1d7e19e47337168p1e5cb4jsn461051f4ec1f',
            'X-RapidAPI-Host': 'google-translate1.p.rapidapi.com'
        },
        body: encodedParams
    })
        .then(response => response.json())
        .then(response => elResult.textContent = response.data.translations[0].translatedText)
        .catch(err => console.error(err));


})