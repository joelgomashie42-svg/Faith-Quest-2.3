function chooseCategory(category) {
    localStorage.setItem("category", category);
    window.location.href = "levels.html";
}

function chooseLevel(level) {
    localStorage.setItem("level", level);
    window.location.href = "quiz.html";
}

history.pushState(null, null, location.href);
window.onpopstate = function () {
    history.go(1);
};
