var prev = document.getElementById('prev')
var next = document.getElementById('next')
var curr = document.getElementById('curr')
    
var newCard = document.createElement('div')
newCard.id = 'newCard'
document.getElementById('menu-container').appendChild(newCard)


let i = 1


let descs = [
    'Toripaitan ramen miso is a delectable Japanese noodle dish that combines a creamy chicken-based broth with the rich, savory flavor of miso paste. The broth is silky and full-bodied, made by simmering chicken bones until they release their collagen, resulting in a smooth, milky texture',
    'Toripaitan ramen shoyu is a flavorful Japanese noodle dish that blends a creamy, chicken-based broth with the deep, savory notes of shoyu (soy sauce). The broth is rich and velvety, achieved by simmering chicken bones to extract their collagen, resulting in a smooth, milky texture.',
    'Toripaitan ramen shio is a refined Japanese noodle dish featuring a silky, creamy chicken-based broth seasoned with shio (salt) for a light and delicate flavor. The broth is created by simmering chicken bones until they dissolve, producing a smooth and rich consistency.',
    'Toripaitan ramen ekstrim is a luxurious Japanese noodle dish featuring an exceptionally creamy and rich chicken-based broth, achieved by boiling chicken bones for hours until they dissolve into a milky consistency.',
    'Tokyo ramen is a popular Japanese noodle dish characterized by its clear, soy-based broth, typically made from chicken bones, fish, and vegetables. It features curly, medium-thick noodles and is often garnished with toppings such as sliced chicken, menma, nori, and a soft-boiled egg.',
    'Spicy ramen is a bold and flavorful Japanese noodle dish known for its rich, fiery broth, which often includes chili paste, garlic, and other spices to create a deep heat. The noodles are typically thick and chewy, paired with toppings like sliced chicken, green onions, and soft-boiled eggs'
]

let titles = [
    'Toripaitan ramen miso',
    'Toripaitan ramen shoyu',
    'Toripaitan ramen shio',
    'Toripaitan ramen ekstrim',
    'Tokyo ramen',
    'Spicy ramen'
]
let prices = [
    'IDR 80.000,-',
    'IDR 60.000,-',
    'IDR 120.000,-',
    'IDR 100.000,-',
    'IDR 90.000,-',
    'IDR 100.000,-'
]


let header = document.createElement('h4')
header.innerHTML = titles[(i + 3)%6]
newCard.appendChild(header)
let desc = document.createElement('p')
desc.innerHTML = descs[(i + 3)%6]
newCard.appendChild(desc)
let price = document.createElement('h4')
price.innerHTML = prices[(i + 3)%6]
header.className = 'header'
desc.className = 'desc'
price.className = 'price'
newCard.appendChild(price)

function change(){
    document.getElementById('ramen').style.opacity = 0;
    setTimeout(() => {
        document.getElementById('ramen').src = `./asset/ramen_${i}.jpg`
        document.getElementById('ramen').style.opacity = 1;
    }, 500);
    
    // document.getElementById('next-header').innerHTML = titles[i-1]
    // document.getElementById('next-desc').innerHTML = descs[i-1]
    // document.getElementById('next-price').innerHTML = prices[i-1]s
}

change()

movePrev = () => {
    if (i == 1) i = 6
    else i--
    curr.style.left = '45%'
    next.style.left = '70%'
    prev.style.left = '20%'
    prev.style.opacity = '0'
    newCard.style.left = '95%'
    
    change()
    setTimeout(() => {
        document.getElementById('menu-container').removeChild(prev)
        curr.id = 'prev'
        prev = curr
        next.id = 'curr'
        curr = next
        newCard.id = 'next'
        next = newCard
        newCard = document.createElement('div')
        newCard.id = 'newCard'
        let header = document.createElement('h4')
        header.innerHTML = titles[0]
        newCard.appendChild(header)
        let desc = document.createElement('p')
        desc.innerHTML = descs[0]
        newCard.appendChild(desc)
        let price = document.createElement('h4')
        price.innerHTML = prices[0]
        header.className = 'header'
        desc.className = 'desc'
        price.className = 'price'
        newCard.appendChild(header)
        newCard.appendChild(desc)
        newCard.appendChild(price)

        document.getElementById('menu-container').appendChild(newCard)
        prev.addEventListener('click', movePrev)
        curr.addEventListener('click', movePrev)
    }, 500);
}

prev.addEventListener('click', movePrev)
curr.addEventListener('click', movePrev)
