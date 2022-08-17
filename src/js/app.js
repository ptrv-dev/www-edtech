const items = document.querySelectorAll('.questions-item__title');
items.forEach((element) => {
    element.addEventListener("click", () => {
        items.forEach((el) => {
            if(el == element) {
                return;
            }
            el.parentElement.classList.remove('questions-item_active');
        }); 
        element.parentElement.classList.toggle('questions-item_active');
    })
});


// let els = document.getElementsByClassName('questions-item__title');

// Array.prototype.forEach.call(els, function(el) {
//     el.onclick = function() {
//         el.parentNode.classList.toggle('questions-item_active');
//     }
// });