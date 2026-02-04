let menubar = document.getElementById('menubar')
function openmenu() {
    if (menubar.style.left === '-100%') {
        menubar.style.left = 0
    } else {
        menubar.style.left = '-100%'
    }
}

let cardcontainer =document.getElementById('cardcontainer')
const iler = ['<i class="fa-solid fa-car"></i>', '<i class="fa-solid fa-user-shield"></i>', '<i class="fa-solid fa-arrow-right-arrow-left"></i>', '<i class="fa-solid fa-phone"></i>']
const adlar = ['Free Shipping', 'Security Payment', '30 Day Return', '24/7 Support']
const aciqlama = ['Free on order over $300', '100% security payment', '30 day money guarantee', 'Support every time fast']

for(let i = 0 ; i < iler.length ; i++){
    cardcontainer.innerHTML += `
            <div class="card">
                <div class="smal-icons">${iler[i]}</div>
                <h1>${adlar[i]}</h1>
                <p>${aciqlama[i]}</p>
            </div>
    `
}