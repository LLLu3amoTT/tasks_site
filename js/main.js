let items = document.querySelector('.list_item')
let list = []
var index = 1
let btnadd = document.querySelector('#btn_js')
let btnremove = document.querySelector('#btn-delete')
let value = document.querySelector('input');

btnadd.addEventListener('click', funcadd)
btnremove.addEventListener('click', funremove)

function funcadd(){
    index++
    // list[index] = listitem.value
    let textValue = document.querySelector('#input_js').value
    let item = document.querySelector(".list_item")
    item.insertAdjacentHTML("beforeend", `
        <li class="item-text font" id="${index}">${textValue}
            <div class="buttons">
            <button class="btn-task btn-delete" id="btn-delete"><i class="fa-solid fa-trash-can"></i></button>
            <button class="btn-task btn-check" id="btn-check"><i class="fa-solid fa-check"></i></button>
            </div>
        </li>
    `)
    let addlist = list.push(item)
    console.log(list)
    // localStorage.setItem('', 'ss')
    return addlist
}

function funremove(){
    addlist.firstChild.remove()
}