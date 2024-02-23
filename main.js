let sidebar = document.querySelector('.sidebar')
let arrow = document.querySelector('.arrow')

let sidebarText = sidebar.querySelectorAll('p')
let sidebarIcons = sidebar.querySelectorAll('.sidebar div span img')

arrow.onclick = () => {
    if (arrow.dataset.state === 'true') {
        closeSidebar()
        restoreSidebar()
        arrow.dataset.state = false
    } else {
        openSibebar()
        arrow.dataset.state = true
    }
}

function openSibebar() {
    sidebar.style.width = '20%'
    arrow.style.right = '0'
    arrow.style.rotate = '90deg'
    sidebarText.forEach(i => i.removeAttribute('style'))
    sidebarIcons.forEach(i => i.removeAttribute('style'))
}

function closeSidebar() {
    sidebar.style.width = '5%'
    arrow.style.right = '-30%'
    arrow.style.rotate = '-90deg'
}

function restoreSidebar() {
    sidebarText.forEach(i => i.style.display = 'none')
    sidebarIcons.forEach(i => {
        i.style.width = '64px'
        i.style.marginLeft = '-8px'
    })
}

let createCol = document.forms.createCol
let formBtn = createCol.querySelector('button')

let columns_place = document.querySelector('.columns_place')
let add_column = document.querySelector('.add_column')
let cancel = document.querySelector('.cancel')

let circle = document.querySelector('.circle')
let columns = []

cancel.onclick = () => {
    createCol.style.display = 'none !important'
    circle.style.display = 'block !important'
}


add_column.onclick = () => {
    createCol.style.display = 'block'
    circle.style.display = 'none'
}

formBtn.onsubmit = (e) => {
    e.preventDefault()
    let fm = new FormData(createCol)

    fm.forEach((key, val) => {
        createCol[val] = key
    })

    console.log(e);
}

// function reload(arr, place) {
//     place.innerHTML = ""

//     for (let item of arr) {
//         let box = document.createElement('div')
//         box.classList.add('box')
//         box.innerHTML = item.title
//         place.append(box)
//     }
// }