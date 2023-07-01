// 
let block1 = document.querySelector('#mini_cakes1')
let block2 = document.querySelector('#mini_cakes2')
let block3 = document.querySelector('#mini_cakes3')
let block4 = document.querySelector('#mini_cakes4')


function showBlock1(){
    block1.style.display = 'flex'
    block2.style.display = 'none'
    block3.style.display = 'none'
    block4.style.display = 'none'
}
function showBlock2(){
    block1.style.display = 'none'
    block2.style.display = 'flex'
    block3.style.display = 'none'
    block4.style.display = 'none'
}
function showBlock3(){
    block1.style.display = 'none'
    block2.style.display = 'none'
    block3.style.display = 'flex'
    block4.style.display = 'none'
}
function showBlock4(){
    block1.style.display = 'none'
    block2.style.display = 'none'
    block3.style.display = 'none'
    block4.style.display = 'flex'
}

// слайдер
function showSlader(){
    let mass=['assets/img/отзыв 1.png','assets/img/отзыв 4.png','assets/img/отзыв 5.png','assets/img/отзыв 1.png', 'assets/img/отзыв 4.png', 'assets/img/отзыв 5.png','assets/img/отзыв 1.png',]

    let btn1 = document.querySelector('#prev');
    let btn2 = document.querySelector('#next');
    let sliders = document.querySelector('#sliders');
    btn2.addEventListener('click', ()=> {
        let mass0 = mass[0]
        mass.shift()
        mass.push(mass0)

        for(let i =0; i<sliders.children.length;i++){
            sliders.children[i].src=mass[i]
        }
        console.log(mass)
    })

    btn1.addEventListener('click', ()=> {
        let mass1 = mass[mass.length-1]
        mass.unshift(mass[mass.length-1])
        mass.pop(mass1)
        for(let i =0; i<sliders.children.length;i++){
            sliders.children[i].src=mass[i]
        }
        console.log(mass)
    })
    console.log(sliders.children[1])
}
showSlader()

let modal = document.querySelector('.modal')
function showModal(){
    modal.style.display = 'flex'
}
function closeModal(){
    modal.style.display = 'none'
}
//