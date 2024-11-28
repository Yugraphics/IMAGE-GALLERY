let vep = document.querySelector ('.vep')
let prev = document.querySelector ('.prev')

vep.addEventListener ('click', function (){
    let items = document.querySelectorAll ('.samok')
    document.querySelector ('.nmo').appendChild (items [0])
})
prev.addEventListener ('click', function (){
    let items = document.querySelectorAll ('.samok')
    document.querySelector ('.nmo').prepend (items [items.length - 1])
})
