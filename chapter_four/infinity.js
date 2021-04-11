//Infinit for loop



for(;;){
    var rand = Math.floor(Math.random() * 10 +1 )
    if (rand == 9) {
        console.log('winner')
        break
    } else {
        console.log('Got ' + rand )
    }
}