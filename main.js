let allGeneratedCards = localStorage.getItem('card');

if (allGeneratedCards == null) {
    allGeneratedCards = '';
}

function cardCreator() {
    console.log('Hello');
    let img = document.getElementById('img').value;
    let title = document.getElementById('title').value;
    let price = document.getElementById('price').value;
    let exp = document.getElementById('exp').value;
    let colors = document.getElementById('colors-container').outerHTML;

    allGeneratedCards += `<div class="final-card">
                            <div class="img-container" style="background-image: url(${img});"></div>
                            <div class='title-container'>
                                <div class="title">${title}</div>
                                <div class="price">€${price}</div>
                            </div>
                            <div class="description">${exp}</div>
                            ${colors}
                        </div>`

    localStorage.setItem('card', allGeneratedCards);
}

function addColor() {
    let pickedColor = document.getElementById('color').value;

    document.getElementById('colors-container').innerHTML += `<div onclick="removeColor(this)" class="color-box" style="background-color: ${pickedColor};"></div>`

    console.log(colorList);
    return colorList;
}

function removeColor(el) {
    let element = el;
    console.log(element);

    element.remove();
} 



/* function addColor() {
    let pickedColor = document.getElementById('color').value;

    //add it to the colors array
    colorList.push(pickedColor);

    //put it in the DOM
    document.getElementById('colors-container').innerHTML += `<div onclick="remove(this)" class="color-box" style="background-color: ${pickedColor};"></div>`

    console.log(colorList);
    return colorList;
}

function remove(el) {
    let element = el;
    console.log(element);

    element.remove();
} */

