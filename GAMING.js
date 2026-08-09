
let button = document.getElementById('changePage');


button.addEventListener('click', () =>{button.innerHTML = "Loading...";setTimeout(() => {
    location = "Second.html";
}, 1500);})

