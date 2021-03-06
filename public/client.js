const socket = io()
let name;
let messageArea =document.querySelector('.message_area') 
let textarea = Document.querySelector('#textarea')
do
{
    name = prompt('plz enter your name:')
}while(!name)

textarea.addEventListener('keyup', (e) => {
    if(e.key === 'Enter') {
        sendMessage(e.target.value)
    }
})

function sendMessage(msg){
    let msg ={
        user:name,
        message:msg
    }
    //append
    appendMessage(msg, 'outgoing')
}

function appendMessage()