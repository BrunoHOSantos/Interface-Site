localStorage.setItem('theme', 'dark');


document.getElementById("toggleTheme").addEventListener('click', function() {
    document.documentElement.classList.toggle('dark')
});

document.getElementById("ThePretender").addEventListener("click", () => {
    window.location.href = "../Paginas/ThePretender.html"
})

document.getElementById("BestOfYou").addEventListener("click", () => {
    window.location.href = "../Paginas/BestOfYou.html"
})

document.getElementById("Everlong").addEventListener("click", () => {
    window.location.href = "../Paginas/Everlong.html"
})

document.getElementById("LearnToFly").addEventListener("click", () => {
    window.location.href = "../Paginas/LearnToFly.html"
})

document.getElementById("MyHero").addEventListener("click", () => {
    window.location.href = "../Paginas/MyHero.html"
})

document.getElementById("TimesLikeThese").addEventListener("click", () => {
    window.location.href = "../Paginas/TimesLikeThese.html"
})

document.getElementById("sendComment").addEventListener("click", function() {
    const text = document.getElementById("commentInput").value.trim();

    if (text === "") return;

    const feed = document.getElementById("commentFeed");

    const item = document.createElement("div");
    item.classList.add("list-group-item");
    item.textContent = text;

    feed.prepend(item); // adiciona no topo

    document.getElementById("commentInput").value = "";
});

