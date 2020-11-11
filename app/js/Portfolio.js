

var mainNavbar = document.querySelector("#mainNavbar");
function toggleShow() {
    mainNavbar.style.visibility = "visible"
    mainNavbar.style.opacity = "1"
};
function toggleClose() {
    mainNavbar.style.visibility = "hidden"
    mainNavbar.style.opacity = "0"
};

toggleClose()
toggleShow()

console.log('hh');
// let view = document.getElementById('view');

// view.addEventListener("click", ()=>{

//     console.log("hyyy");
// })

// var registerAccountButton = document.getElementById('registerAccountButton');
// var registerAccountModal = new bootstrap.Modal(document.getElementById('registerAccountModal'), {
//     keyboard: false
// })
// view.addEventListener('click', function () {
//     registerAccountModal.toggle();
// })
    


