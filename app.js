const keyInfo = {
    welcome: document.getElementById(`button`),
    button: document.getElementById(`reveal`),
    container: document.getElementById(`container`),
    heading: document.getElementById(`heading`),
    key: document.getElementById(`key`),
    which: document.getElementById(`which`),
    location: document.getElementById(`location`),
    code: document.getElementById(`code`)

};

keyInfo.button.addEventListener(`click`, () => {
        keyInfo.welcome.style.display = `none`;
        keyInfo.container.style.display = `flex`;
});

document.addEventListener(`keydown`, (event) => {
    keyInfo.heading.innerHTML = event.key
    keyInfo.key.innerHTML = event.which
    keyInfo.location.innerHTML = event.location
    keyInfo.code.innerHTML = event.code
});