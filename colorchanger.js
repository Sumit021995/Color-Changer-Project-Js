 const buttons = document.querySelectorAll('.button');
 const body = document.querySelector('body');

 // Some event basis
 // like movement of cursor is an event
 // click on anything is also an event
 // Tab closing is also an event
 //.........console.log(buttons);
 /*
 NodeList(4) [span#gray.button, span#white.button, span#blue.button, span#yellow.button]
0: span#gray.button
1: span#white.button
2: span#blue.button
3: span#yellow.button
length: 4
[[Prototype]]: NodeList
  */
 

 buttons.forEach((button)=>{
    //.........console.log(button);
    //span#gray.button
    //span#white.button
    //span#blue.button
    //span#yellow.button

    button.addEventListener('click', function(element){
        //.........console.log(element);
        // when we click on any button with color given then console.log(element) shows
        // PointerEvent {isTrusted: true, pointerId: 3, width: 1, height: 1, pressure: 0, …}
        //.........console.log(element.target);
        // in PointerEvent {} .. there is a target 
        // in 'target' there is an 'id' which relate to id in index.html file
        // and that id relate to id of different colors where 'addEventListner' is working 
        // <span class="button" id="gray"></span>

        switch (element.target.id) {
          case "gray":
            body.style.backgroundColor = 'gray'
            break;
          case "white":
            body.style.backgroundColor = 'white'
            break;
          case "yellow":
            body.style.backgroundColor = 'yellow'
            break;
          case "blue":
            body.style.backgroundColor = 'blue'
            break;
          case "orange":
            body.style.backgroundColor = 'orange'
            break;
          case "purple":
            body.style.backgroundColor = 'purple'
            break;
        
          default:
            break;
        }
        
        // if (e.target.id === 'gray') {
        //   body.style.backgroundColor = e.target.id;
        // }
        // if (e.target.id === 'blue') {
        //   body.style.backgroundColor = e.target.id;
        // }
        // if (e.target.id === 'white') {
        //   body.style.backgroundColor = e.target.id;
        // }
        // if (e.target.id === 'yellow') {
        //   body.style.backgroundColor = e.target.id;
        // }
        
    })
 });

 