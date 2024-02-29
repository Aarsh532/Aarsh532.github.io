var message; 
var key;
var blocksize;

function rangeSlide(value) {
    document.getElementById('rangeValue').innerHTML = value;
    blocksize = value;
}

function Encrypt(){
    key = document.getElementById('KeyToEncrypt').value
    message = document.getElementById('MessageTOEncrypt').value
    
    
}
