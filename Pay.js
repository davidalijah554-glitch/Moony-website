let PPbutton = document.getElementById('a');
PPbutton.addEventListener('click', () =>{PPbutton.innerHTML = "Loading...";setTimeout(() => {
    location = "Pay.html";
}, 1500);})