let show = () => {

    let elements = document.querySelectorAll('.reveal')
    // console.log(elements.length)

    elements.forEach((e) => {
        let height = window.innerHeight
        let revTop = e.getBoundingClientRect().top

        if (revTop < height - 100){
            e.classList.add('active')
        }else{
            e.classList.remove('active')
        }

    })

}


window.addEventListener('scroll', show)

