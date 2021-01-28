var accordeonBtns = document.querySelectorAll(".accordeon")

for (var btn = 0; btn < accordeonBtns.length; btn++) {
    var currentBtn = accordeonBtns[btn]

    currentBtn.addEventListener('click', function() {
        var accordeonContent = this.parentNode.parentNode
        var list = accordeonContent.querySelector('.list')
        list.classList.toggle('active')
    })
}


var randomBtn = document.querySelector(".random");

randomBtn.addEventListener("click", function alea() {
    var apprenants = [
        "Abdoulaye", "Adil",  "Alexis", "Alicia", "Asad", "Ayoub","Bamba", "Caroline", "Charles","David", "Denis", "Fodie","Elyesse", "Gaëlle","Lobna", "Jonathan", "Maëlys", "Mumu", "Mohamed", "Kevin", "Lyes", "Nasser", "Flora"];
    
    var random = apprenants[Math.floor(Math.random() * apprenants.length)];
    randomBtn.textContent = random;
})