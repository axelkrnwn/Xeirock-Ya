let navbar = document.querySelector('#navbar')


let firstElement ={
    ''              : document.getElementById('about-us'),
    'index.html'    : document.getElementById('about-us'),
    'menu.html'     : document.querySelector('#prev'),
    'register.html' : document.querySelector('#form-1'),
}

window.addEventListener('scroll', () => {

    let attr = window.location.pathname.split('/')
    console.log(attr)

    console.log(attr[attr.length - 1])
    let element = firstElement[attr[attr.length - 1]]
    

    if (window.scrollY + navbar.clientHeight >= element.getBoundingClientRect().top){
        navbar.style.backgroundColor = '#fbeecd'
        navbar.style.height = '12vh'
        document.querySelector('.nav-container').style.boxShadow = 'none'
        document.querySelector('.nav-container').style.border = 'none'
    }else{
        navbar.style.backgroundColor = 'transparent'
        navbar.style.height = '16vh'
        document.querySelector('.nav-container').style.border = 'black solid 2px'
        document.querySelector('.nav-container').style.boxShadow = 'black 3px 3px'
    }
    


})