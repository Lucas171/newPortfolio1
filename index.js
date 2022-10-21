function nice() {
    document.getElementById("addFade").classList.add("fade-out");
    function delay(time) {
        return new Promise((resolve) => setTimeout(resolve, time));
    }

    delay(1000).then(() => {
        document.getElementById("addFade").classList.add("hidden");
        document.getElementById("removeHidden").classList.remove("hidden");
    });
}

function card1() {
    window.open("https://lucas171.github.io/react-todolist/");
}
function card2() {
    window.open("https://weatherapi23.herokuapp.com/");
}
function card3() {
    window.open("https://authentication-app21.herokuapp.com/");
}
function card4() {
    window.open("https://lucas171.github.io/ShowTrackr/");
}

const $ = document;

const button = $.querySelector("#openModal");
const modal = $.querySelector("dialog");
const close = $.querySelector("dialog button");

button.onclick = () => modal.showModal();
close.onclick = () => modal.close();
