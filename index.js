let count_home = 0;
let count_guest = 0;

let score_home = document.getElementById('home')
let score_guest = document.getElementById('guest')

let add1 = () =>{
    count_home +=1 
    score_home.textContent = count_home
}

let add2 = () =>{
    count_home +=2 
    score_home.textContent = count_home
}

let add3 = () =>{
    count_home +=3
    score_home.textContent = count_home
}

let add1g = () =>{
    count_guest +=1 
    score_guest.textContent = count_guest
}

let add2g = () =>{
    count_guest +=2 
    score_guest.textContent = count_guest
}

let add3g = () =>{
    count_guest +=3
    score_guest.textContent = count_guest
}