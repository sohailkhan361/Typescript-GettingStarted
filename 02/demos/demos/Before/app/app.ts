function startGame(){
    //starting a new game
    //adding exclamation operator to remove null errors
    var messagesElement = document.getElementById('messages')
    messagesElement!.innerText = 'Welcome to MultiMath ! Starting new Game';
}

document.getElementById('startGame')!.addEventListener('click',startGame);
