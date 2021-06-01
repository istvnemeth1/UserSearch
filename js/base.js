function pageLoad() {
    document.body.insertAdjacentHTML('afterbegin', '<div id="container"></div> <div id="users"></div>');
    const conatiner = document.querySelector("#container");
    const users = document.querySelector("#users");
    conatiner.insertAdjacentHTML('afterbegin', '<h1><span class="red">Realtime</span> User Search</h1>');
    conatiner.insertAdjacentHTML('beforeend', '<input type="text" onchange="runThis()">');
    users.insertAdjacentHTML('afterbegin', '<div id="userCard"></div>');
    const userCard = document.querySelector("#userCard");
    userCard.insertAdjacentHTML('afterbegin', '<img src="media/profile.png" alt="profile picture">');
    userCard.insertAdjacentHTML('beforeend', '<div id="data"></div');
    const cardData = document.querySelector('#data');
    cardData.insertAdjacentHTML('afterbegin', '<h3>First Second</h3>');
    cardData.insertAdjacentHTML('beforeend', '<p>Age</p>');
};




pageLoad();
