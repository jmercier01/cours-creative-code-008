let state = 0;
let btn = document.getElementById("btn");
btn.addEventListener("click", toogleLight)
function toogleLight() {
    if (state === 0) {
        document.documentElement.style.setProperty("--bg-color", "black");
        document.documentElement.style.setProperty("--text-color", "#F5F5F5");
        state = 1;
    } else {
        document.documentElement.style.setProperty("--bg-color", "#F5F5F5");
        document.documentElement.style.setProperty("--text-color", "black");
        state = 0;
    }
}
