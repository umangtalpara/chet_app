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

function sendMessage(message){
    let msg ={
        user:name,
        message:message
    }
    //append
    appendMessage(msg, 'outgoing')
}

function appendMessage(msg, type) {
    let mainDiv = document.createElement('div')
    let className = type
    mainDiv.classList.add(className, 'message')

    let markup = `
        <h4>${msg.user}</h4>
        <p>${msg.message}</p>
    `
    mainDiv.innerHTML = markup
    messageArea.appendChild(mainDiv)
}


