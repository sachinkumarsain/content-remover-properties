let img1 = document.querySelectorAll(".one")
for (let i = 0; i < img1.length; i++) {
    img1[i].onmouseover = () => {
        let child = img1[i].parentElement.children
        for (let j = 0; j < child.length; j++) {
            if (j === child.length - 1) {
                child[j].style.display = 'block'           
            }
            else {
                child[j].style.display = 'none'
            }
        }
    }
}

let img2 = document.querySelectorAll(".two")
for (let i = 0; i < img2.length; i++) {
    img2[i].onmouseout = () => {
        let child = img2[i].parentElement.children
        for (let j = 0; j < child.length; j++) {
            if (j === child.length - 1) {
                child[j].style.display = 'none'
            }
            else {
                child[j].style.display = 'block'
            }
        }
    }
}
