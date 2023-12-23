/* This code is selecting all elements with the class "button" and storing them in the `button`
constant. It is also selecting the `<body>` element and storing it in the `body` constant. */
const buttons = document.querySelectorAll('.button');
const body = document.querySelector("body");

buttons.forEach(function (button) {
    console.log(button);
    button.addEventListener('click', function (e) {
        console.log(e);
        console.log(e.target);
        /* This code is checking if the `id` of the clicked element is equal to "grey". If it is, it
        sets the background color of the `body` element to "grey". */
        if(e.target.id === "grey") { 
            body.style.backgroundColor = e.target.id;
        }
        if(e.target.id === "red") { 
            body.style.backgroundColor = e.target.id;
        }
        if(e.target.id === "green") { 
            body.style.backgroundColor = e.target.id;
        }
        if(e.target.id === "yellow") { 
            body.style.backgroundColor = e.target.id;
        }
       
    })
})