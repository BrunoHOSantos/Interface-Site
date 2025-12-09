localStorage.setItem('theme', 'dark');


document.getElementById("toggleTheme").addEventListener('click', function() {
    document.documentElement.classList.toggle('dark')
});


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

