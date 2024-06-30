document.getElementById('next-btn').addEventListener('click', (e) => {
    e.preventDefault()
    document.getElementById('form-image').style.transform = "translateX(0)"
})

document.getElementById('back-btn').addEventListener('click', (e) => {
    e.preventDefault()
    document.getElementById('form-image').style.transform = "translateX(100%)"
})
document.getElementById('form-1').addEventListener('submit', (e) => {
    e.preventDefault()
    window.location.href = './index.html'
})