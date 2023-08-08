function addingEventListener() {
    const button = document.getElementById('button')

    function clickAlert(){
        alert('I was clicked!')
    
    }
    button.addEventListener('click',clickAlert)
}


addingEventListener()
//using arrow functiom
document.querySelector('#button').addEventListener
(click,function(){
    return alert("I was Clicked")
})
//to invoke inside a function
document.querySelector('#button').addEventListener
(click,clickMe)
function clickMe(){
    return alert("I was Clicked")
}
