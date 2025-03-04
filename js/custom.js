function fadeIn(){

    const element = document.querySelector('.main');
    element.classList.add('animation'); 

    setTimeout(() =>{
        location.assign('landing.html')
    } , 3000) 

}
document.addEventListener("DOMContentLoaded", function () {
    const container = document.getElementById('container');

    function loadPage(url, transitionClass = 'hidden-fade-slide') {
                container.classList.add(transitionClass);
                setTimeout(() => {
                    fetch(url)
                        .then(response => response.text())
                        .then(containerr => {
                            container.innerHTML = containerr;
                            console.log(containerr);
                            container.removeAttribute('class');
                            container.className = '';
                        });
                }, 800);
            }

    document.querySelectorAll('.links a').forEach(link => {
        link.addEventListener('click', event => {
            event.preventDefault();
            const url = link.getAttribute('href');
            console.log(url);
            const transitionClass = link.dataset.transition || 'hidden-fade-slide';
            loadPage(url, transitionClass);
        });
    });
});
// document.addEventListener('DOMContentLoaded', () => {
//     const content = document.getElementById('content');

//     function loadPage(url, transitionClass = 'hidden-fade-slide') {
//         content.classList.add(transitionClass);
//         setTimeout(() => {
//             fetch(url)
//                 .then(response => response.text())
//                 .then(html => {
//                     content.innerHTML = html;
//                     content.className = '';
//                 });
//         }, 500);
//     }

//     document.querySelectorAll('a').forEach(link => {
//         link.addEventListener('click', event => {
//             event.preventDefault();
//             const url = link.getAttribute('href');
//             const transitionClass = link.dataset.transition || 'hidden-fade-slide';
//             loadPage(url, transitionClass);
//         });
//     });
// });

// document.addEventListener('DOMContentLoaded', () => {
//     const content = document.getElementById('content');

//     function loadPage(url, direction = 'left') {
//         content.classList.add(`hidden-${direction}`);
//         setTimeout(() => {
//             fetch(url)
//                 .then(response => response.text())
//                 .then(html => {
//                     content.innerHTML = html;
//                     content.className = '';
//                 });
//         }, 500);
//     }

//     document.querySelectorAll('a').forEach(link => {
//         link.addEventListener('click', event => {
//             event.preventDefault();
//             const url = link.getAttribute('href');
//             const direction = link.dataset.direction || 'right';
//             loadPage(url, direction);
//         });
//     });
document.addEventListener("DOMContentLoaded", function () {
    const cursorTag = document.querySelector("div.cursors");
    
    if (!cursorTag) return; 

    const ball = cursorTag.querySelector("div");
    if (!ball) return;

    document.addEventListener("mousemove", function (event) {
        ball.style.left = event.pageX + "px";
        ball.style.top = event.pageY + "px";
    });
});
