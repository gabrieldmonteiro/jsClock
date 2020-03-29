// DOM elements
const greeting = document.getElementById('greeting'),
    name = document.getElementById('name'),
    focus = document.getElementById('focus');

//setBg and greetings    
function setBgGreet() {
    let today = new Date(),
        hour = today.getHours();

    if (hour < 12) {
        //Morning
        document.body.style.backgroundImage = "url('../src/img/morning.jpg')"
        greeting.textContent = 'Good Morning';
        document.body.style.color = 'white';

    } else if (hour < 18) {
        //Afternoon
        document.body.style.backgroundImage = "url('../src/img/afternoon.jpg')"
        greeting.textContent = 'Good Afternoon';
    } else {
        //Evening         
        document.body.style.backgroundImage = "url('../src/img/evening.jpg')"
        greeting.textContent = 'Good Evening';
        document.body.style.color = 'white';
    }
}

//Set Name
function setName(e) {
    if (e.type === 'keypress') {
        //Make sure enter is pressed
        if (e.keyCode == 13) {
            localStorage.setItem('name', e.target.innerText);
            name.blur();
        } else {
            localStorage.setItem('name', e.target.innerText);
        }
    }
}

//Get Name
function getName() {
    if (localStorage.getItem('name') === null) {
        name.textContent = '[Enter Name]';
    } else {
        name.textContent = localStorage.getItem('name');
    }
}

//Set Focus
function setFocus(e) {
    if (e.type === 'keypress') {
        //Make sure enter is pressed
        if (e.keyCode == 13) {
            localStorage.setItem('focus', e.target.innerText);
            focus.blur();
        } else {
            localStorage.setItem('focus', e.target.innerText);
        }
    }
}

//Get Focus
function getFocus() {
    if (localStorage.getItem('focus') === null) {
        focus.textContent = '[Enter Focus]';
    } else {
        focus.textContent = localStorage.getItem('focus');
    }
}

//Events
name.addEventListener('keypress', setName);
name.addEventListener('blur', setName);
focus.addEventListener('keypress', setFocus);
focus.addEventListener('blur', setFocus);

//Run 
setBgGreet();
getName();
getFocus();
