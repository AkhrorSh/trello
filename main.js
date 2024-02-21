let menu = document.querySelector('.menu')
let sidebar = document.querySelector('.sidebar')
let close_menu = document.querySelector('.close_menu')
let desk_container = document.querySelector('.desk_container')


let columns_place = document.querySelector('.columns_place')
let add_column = document.querySelector('.add_column')

let columns = []

add_column.onclick = () => {
    openSibebar("1")
}




menu.onclick = () => {
    sidebar.innerHTML = `
    <nav>
    <div class="left">
        <p>
        <figure class="wp">P</figure>
        <span class="wp_name">Prodigy</span>: Working zone</p>
    </div>

    <span class="close_menu"><img src="./public/icons/expand_more.svg" alt="expand more"></span>
</nav>

<div class="desks">
    <p><span><img src="./public/icons/desks.svg" alt=""></span>Desks</p>
</div>

<div class="users">
    <p><span><img src="./public/icons/user.svg" alt=""></span>Users</p>
    <img src="./public/icons/add.svg" alt="">
</div>

<div class="settings">
    <p><span><img src="./public/icons/settings.svg" alt=""></span>Desktop Settings space</p>
    <img src="./public/icons/expand_more.svg" alt="">
</div>

<p class="text">Desktop view modes...</p>

<div class="tables">
    <p><span><img src="./public/icons/tables.svg" alt=""></span>Tables</p>
</div>

<div class="calendar">
    <p><span><img src="./public/icons/calendar.svg" alt=""></span>Calendar</p>
</div>

<p class="text">My Desks<img src="./public/icons/add.svg" alt=""></p>

<div class="desk-menu_container">
    <div class="desk-menu">
        <figure class="desk-menu_bg"></figure>
        <p class="desk-menu_title">Desk</p>
    </div>


</div>
    `
    openSibebar()
}

close_menu.onclick = () => {
    closeSidebar()
}


function openSibebar(key) {
    if (key === '1') {
        sidebar.innerHTML = ""

        let inp = document.createElement('input')
        let btn = document.createElement('button')
        inp.classList.add('column_title')
        btn.classList.add('send')
        inp.type = "text"
        btn.innerHTML = "Send"
        sidebar.append(inp, btn)

        btn.onclick = () => {
            if (inp.value.trim != "") {
                let column = {
                    title: inp.value,
                    id: Math.random
                }

                columns.push(column)

                closeSidebar()
                reload(columns, columns_place)
            }
        }
    }

    sidebar.style.left = "0"
    sidebar.style.position = "relative"
    desk_container.style.width = "73%"


}

function closeSidebar() {
    sidebar.style.left = "-27%"
    sidebar.style.position = "absolute"
    desk_container.style.width = "100%"
}

function reload(arr, place) {
    place.innerHTML = ""

    for (let item of arr) {
        let box = document.createElement('div')
        box.classList.add('box')
        box.innerHTML = item.title
        place.append(box)
    }
}