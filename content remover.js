let icon = document.querySelectorAll('i')
for (let i = 0; i < icon.length; i++) {
    icon[i].onclick = () => {
        let child = icon[i].parentElement.children
        for (let j = 0; j < child.length; j++) {
            if (j < child.length - 1) {
                child[j].style.display = 'none'
            }
            else {
                child[j].style.display = 'block'
            }
        }
    }
}
let anchor = document.querySelectorAll('a')
for (let m = 0; m < anchor.length; m++) {
    anchor[m].onclick = (e) => {
        e.preventDefault()
        let child = anchor[m].parentElement.parentElement.children
        for (let j = 0; j < child.length; j++) {
            if (j < child.length - 1) {
                child[j].style.display = 'block'
            }
            else {
                child[j].style.display = 'none'
            }
        }
    }
}