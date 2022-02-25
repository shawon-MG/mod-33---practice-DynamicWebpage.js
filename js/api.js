//  getting users name : 
document.getElementById('btn-name').addEventListener('click', function(){
    fetch ('https://jsonplaceholder.typicode.com/users')
    .then (res => res.json())
    .then (showData => console.log(usersName(showData)))
});


function usersName (showData){
    const ul =  document.getElementById('user-ul-name');
    for (const user of showData){
        const li = document.createElement('li');
        li.innerHTML = `
            user : ${user.name}
        `;
        ul.appendChild(li);
    }
};


// getting user email: 
document.getElementById('btn-email').addEventListener('click', function(){
    fetch ('https://jsonplaceholder.typicode.com/users')
    .then (res => res.json())
    .then (showData => console.log(userEmail(showData)))
});

function userEmail (showData){
    const ul = document.getElementById('user-ul-email');
    for (const user of showData){
        const li = document.createElement('li')
        li.innerHTML = `
            userEmail : ${user.email}
        `;
        ul.appendChild(li);
    }
}
