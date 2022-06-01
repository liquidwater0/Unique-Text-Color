const textInput = document.getElementById("textInput");
textInput.addEventListener("input", ({ target }) => updateTextColor(target.value));

function updateTextColor(text) {
    const characters = text.split("");

    const charCodesSum = characters.reduce((previous, current) => {
        return previous + current.charCodeAt();
    }, 0);

    textInput.style.color = `hsl(${Math.pow(charCodesSum, 7) % 360}, 100%, 50%)`;
}