let lettersBlock = document.querySelector(".letters")

document.addEventListener('keypress', (e) => {
    if ((e.keyCode >= 97 && e.keyCode <= 122) || (e.keyCode >= 1072 && e.keyCode <= 1103) || e.keyCode === 1105) {
        lettersBlock.innerHTML += `<div class="letter">${e.key.toUpperCase()}</div>`;
        anime({
            targets: '.letter',
            duration: 3000,
            opacity: 1,
          });
    }
})