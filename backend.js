localStorage.setItem('theme', 'dark');


document.getElementById("toggleTheme").addEventListener('click', function() {
    document.documentElement.classList.toggle('dark')
});

document.getElementById("thePretender").addEventListener("click", () => {
    window.location.href = "../Paginas/ThePretender.html"
})

document.getElementById("bestOfYou").addEventListener("click", () => {
    window.location.href = "../Paginas/BestOfYou.html"
})

document.getElementById("everlong").addEventListener("click", () => {
    window.location.href = "../Paginas/Everlong.html"
})

document.getElementById("learnToFly").addEventListener("click", () => {
    window.location.href = "../Paginas/LearnToFly.html"
})

document.getElementById("myHero").addEventListener("click", () => {
    window.location.href = "../Paginas/MyHero.html"
})

document.getElementById("timesLikeThese").addEventListener("click", () => {
    window.location.href = "../Paginas/TimesLikeThese.html"
})

document.getElementById("bruno").addEventListener("click", () => {
    window.location.href = "https://www.linkedin.com/in/bruno-henrique-oliveira-dos-santos-112187131/"
})

document.getElementById("daveGrohlCard").addEventListener("click", () => {
    window.location.href = "https://www.instagram.com/davestruestories/"
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



