const logs = document.querySelector('.logs');
console.log(logs);

fetch('/api/v1/userData').then((res) => res.json()).then((data) => {
  if (data.username) {
    logs.innerHTML = '';

    const headerImgContainer = document.createElement('div');
    headerImgContainer.setAttribute('class', 'img-header-container');
    headerImgContainer.src = data.img;
    logs.appendChild(headerImgContainer);

    const headerImg = document.createElement('img');
    headerImg.setAttribute('class', 'user-img-header');
    headerImg.src = data.img;
    headerImgContainer.appendChild(headerImg);

    const usernameHeader = document.createElement('p');

    usernameHeader.href = '/api/v1/logout';
    usernameHeader.textContent = `Welcome ${data.username}`;
    logs.appendChild(usernameHeader);

    const logout = document.createElement('a');
    logout.setAttribute('class', 'signup');
    logout.href = '/api/v1/logout';
    logout.innerText = 'logout';
    logs.appendChild(logout);

    const porfileLink = document.createElement('a');
    porfileLink.setAttribute('class', 'login');
    porfileLink.href = `/profile/${data.username}`;
    porfileLink.innerText = 'profile';
    logs.appendChild(porfileLink);
  }
});
