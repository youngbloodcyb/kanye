const kanyeWisdom = document.querySelector('#kanye-wisdom');

const button = document.querySelector('#click');

async function kanye() {
    const requestOptions = {
        method: 'GET',
        redirect: 'manual'
    };
    
    let response = await fetch("https://api.kanye.rest", requestOptions);
    let data = await response.json();

    kanyeWisdom.textContent = data.quote;
}

button.addEventListener("click", kanye);