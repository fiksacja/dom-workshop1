console.log('Warsztat- Ustaw tło elementów HTML');

const setBackground = () => {
    let p1 = document.querySelector('.first');
    let p2 = document.querySelector('.last');
    

    p1.classList.toggle('bg-red');
    p2.classList.toggle('bg-yellow');

    // p1.style.backgroundColor = 'red' ;
    // p2.style.backgroundColor = 'yellow' ;

}

let btnSetBackground = document.getElementById('set-backgroud');

btnSetBackground.addEventListener('click', setBackground);
