const cube = document.getElementById('animatedCube');
const optionsContainer = document.getElementById('options');
const option1 = document.getElementById('cube1')
const option2 = document.getElementById('cube2')
const option3 = document.getElementById('cube3')
let animationPaused = false;

/* Funcion que detiene y reactiva el moviemiento del cubo */
cube.addEventListener('click' , () => {
    console.log('Di click en el cubo')
    if (!animationPaused){
        console.log('Animación pausada');
        cube.style.animationPlayState = 'paused';
        optionsContainer.style.display = 'flex';
        optionsContainer.style.flexDirection = 'column'
        animationPaused = true;
        setTimeout(()=>{
            optionsContainer.style.display = 'none';
            cube.style.animationPlayState = 'running';
            animationPaused = false;
        },5000)
    }
});

/* Funcion para paginas */
option1.addEventListener('click', () =>{
    console.log("Di clic en la opcion 1");
    window.location.href = '../pages/services.html';
})

option2.addEventListener('click', () =>{
    console.log("Di clic en la opcion 2");
    window.location.href = '../pages/newsletter.html';
})

option3.addEventListener('click', () =>{
    console.log("Di clic en la opcion 3");
    window.location.href = '../pages/contact.html';
})
