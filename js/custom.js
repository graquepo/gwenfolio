function fadeIn(){

    const element = document.querySelector('.main');
    element.classList.add('animation'); 

    setTimeout(() =>{
        location.assign('landing.html')
    } , 3000) 

}