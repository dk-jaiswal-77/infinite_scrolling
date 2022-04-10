window.addEventListener("scroll", loadData);
localStorage.setItem("list_count", JSON.stringify(0));

// displaying the data when user lands
showData();
document.querySelector(".loading").classList.add("show_loading");

let timeout_id = null;
function loadData() {
    let { scrollHeight, clientHeight, scrollTop } = document.documentElement;
    if (clientHeight + scrollTop >= scrollHeight - 5) {
        document.querySelector(".loading").classList.add("show_loading");
        if (timeout_id == null) {
            timeout_id = setTimeout(showData, 800);
        }
        else {
            clearTimeout(timeout_id);
            timeout_id = setTimeout(showData, 800);
        }
    }
}

function showData() {
    let list_count = JSON.parse(localStorage.getItem("list_count"));
    const list_container = document.querySelector(".list_container");

    for (let i = list_count + 1; i <= list_count + 25; i++) {
        let p = document.createElement("p");
        p.textContent = "list " + i;
        list_container.append(p);
    }
    document.querySelector(".loading").classList.remove("show_loading");
    localStorage.setItem("list_count", JSON.stringify(list_count + 25));
}