function fadeIn(){

    const element = document.querySelector('.main');
    element.classList.add('animation'); 

    setTimeout(() =>{
        location.assign('landing.html')
    } , 3000) 

}

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

document.addEventListener('DOMContentLoaded', () => {
    const content = document.getElementById('content');

    function loadPage(url, direction = 'right') {
        content.classList.add(`hidden-${direction}`);
        setTimeout(() => {
            fetch(url)
                .then(response => response.text())
                .then(html => {
                    content.innerHTML = html;
                    content.className = '';
                });
        }, 3000);
    }

    document.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', event => {
            event.preventDefault();
            const url = link.getAttribute('href');
            const direction = link.dataset.direction || 'right';
            loadPage(url, direction);
        });
    });
});
