
function sumarLikes(elemento){
    var like=parseInt(document.querySelector('#'+elemento).textContent)
    like++;
    document.querySelector('#'+elemento).innerHTML=like;
    
}