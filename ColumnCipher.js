var message; 
var key;
var blocksize;

function rangeSlide(value) {
    document.getElementById('rangeValue').innerHTML = value;
    blocksize = value;
}

function Encrypt(){
    key = document.getElementById('KeyToEncrypt').value
    input = document.getElementById('MessageTOEncrypt').value
    blocksize = document.getElementById('myRange').value
    
    fs.readFile('/encrypt.py', encrypt(input, key, blocksize))
        enc
   //encryptedSentence = runEncryption(input, key, blocksize)
   console.log(encryptedSentence)
}

function runEncryption(input, key, blocksize){
    var jqXHR = $.ajax({
        type: "POST",
        url: "/encrypt.py",
        data: { param: input, key, blocksize},
    });

    return jqXHR.responseText;
}
