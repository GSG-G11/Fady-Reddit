const username = window.location.href.split('/')[4];
const logs = document.querySelector('.logs');

const postsContainer = document.querySelector('.posts-container');

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
    usernameHeader.setAttribute('class', 'header-username');
    usernameHeader.textContent = `Welcome ${data.username}`;
    logs.appendChild(usernameHeader);

    const logout = document.createElement('a');
    logout.setAttribute('class', 'signup');
    logout.href = '/api/v1/logout';
    logout.innerText = 'logout';
    logs.appendChild(logout);

    const porfileLink = document.createElement('a');
    porfileLink.setAttribute('class', 'login');
    porfileLink.href = '/';
    porfileLink.innerText = 'home';
    logs.appendChild(porfileLink);
  }
});

fetch(`/api/v1/profile/${username}`).then((res) => res.json()).then((data) => {
  const profileInfo = document.createElement('div');
  profileInfo.setAttribute('class', 'profile-info');
  postsContainer.appendChild(profileInfo);

  const profileImg = document.createElement('img');
  profileImg.src = data.img;
  profileImg.setAttribute('class', 'profile-img');
  profileInfo.appendChild(profileImg);

  const profileUsername = document.createElement('p');
  profileUsername.textContent = data.username;
  profileUsername.style.fontSize = '32px';
  profileUsername.style.fontWeight = 'bold';
  profileInfo.appendChild(profileUsername);
});

fetch(`/posts/${username}`).then((res) => res.json()).then((data) => {
  data.forEach((ele) => {
    // eslint-disable-next-line no-undef
    createPost(ele.id, ele.vote, ele.username, ele.title, ele.content, ele.img_post);
  });
});
