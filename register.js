document.getElementById('first-form').addEventListener('submit', (e) => {
    e.preventDefault()
    document.getElementById('form-image').style.left = 0
})

document.getElementById('second-form').addEventListener('submit', (e) => {
    e.preventDefault()
    window.location.href = '/'
})