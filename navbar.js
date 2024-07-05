let navbar = document.querySelector('#navbar')


let firstElement ={
    '/index.html' : document.getElementById('about-us'),
    '/menu.html' : document.querySelector('#prev'),
    '/register.html' : document.querySelector('#form-1'),
}

window.addEventListener('scroll', () => {

    let attr = window.location.pathname
    let element = firstElement[attr]
    

    if (window.scrollY + navbar.clientHeight >= element.getBoundingClientRect().top){
        navbar.style.backgroundColor = '#fbeecd'
        document.querySelector('.nav-container').style.boxShadow = 'none'
        document.querySelector('.nav-container').style.border = 'none'
    }else{
        navbar.style.backgroundColor = 'transparent'
        document.querySelector('.nav-container').style.border = 'black solid 2px'
        document.querySelector('.nav-container').style.boxShadow = 'black 3px 3px'
    }
    


})