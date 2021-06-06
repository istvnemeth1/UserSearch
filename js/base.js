function pageLoad(user) {
    document.body.insertAdjacentHTML('afterbegin', '<div id="container"></div> <div id="users"></div>');
    const conatiner = document.querySelector("#container");
    const users = document.querySelector("#users");
    conatiner.insertAdjacentHTML('afterbegin', '<h1><span class="red">Realtime</span> User Search</h1>');
    conatiner.insertAdjacentHTML('beforeend', '<input type="text">');
    
    const input = document.querySelector('input');

    for (var i = 0; i < userProfs.length; i++){
        users.insertAdjacentHTML('afterbegin', '<div id="userCard"></div>');
        const userCard = document.querySelector("#userCard");
        userCard.insertAdjacentHTML('afterbegin', '<img src="media/profile.png" alt="profile picture">');
        userCard.insertAdjacentHTML('beforeend', '<div id="data"></div');
        const cardData = document.querySelector('#data');
        cardData.insertAdjacentHTML('afterbegin', `<h3>${userProfs[i].firstName} ${userProfs[i].secondName}</h3>`);
        cardData.insertAdjacentHTML('beforeend', `<p>${userProfs[i].age}</p>`);
        let userProfsArray = Object.values(userProfs[i]);
        input.oninput = function () {
            // Onlu show user card's wich have the input.value of the First or Second name or the age.
            const name = document.querySelector('h3');
            const age = document.querySelector('p');
            if (userProfsArray[0].includes(input.value) || userProfsArray[1].includes(input.value) || userProfsArray[2].includes(input.value)) {
                return name.style.backgroundColor = "yellow";
            } else {
                console.log('type something valid');
            }
        }
    }
};


pageLoad();