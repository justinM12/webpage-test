// create div elements by manipulating DOM

function createItemNode(text){
    const itemTemplate = document.getElementById('item')
    const itemElement = document.importNode(itemTemplate.content, true)
    console.dir(itemElement.querySelector('p'))
    itemElement.querySelector('p').innerText = text

    return itemElement
}

function createHeadContent(){

}

function addDivToDom(){
    const main = document.querySelector('main')

    //const headContent = createHeadContent()
    const optionsContainer = document.createElement()
    const taskContainer =  document.createElement()
    const footerContent = document.createElement()

    const grid = document.createElement('div')
    grid.className = "grid"
    main.appendChild(grid)

    const item1 = createItemNode('Text Item 1')
    const item2 = createItemNode('Text Item 2')
    const item3 = createItemNode('Text Item 3')

    let div1 = document.createElement('div')
    div1.id = "div1"
    div1.innerText = "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
    let div2 = document.createElement('div')
    div2.id = "div2"
    div2.innerText = "bbbbbbbbbbbbbbbb"
    let div3 = document.createElement('div')
    div3.id = "div3"
    div3.innerText = "ccccccccccccccc"
    grid.appendChild(div1)
    grid.appendChild(div2)
    grid.appendChild(div3)
    grid.append(item1)
    grid.append(item2)
    grid.append(item3)
    
    console.log(main)
}
addDivToDom()