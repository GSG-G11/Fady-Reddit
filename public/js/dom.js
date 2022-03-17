/* eslint-disable no-unused-vars */
/* eslint-disable no-multiple-empty-lines */
/* eslint-disable padded-blocks */
const commentModal = document.getElementById('myModal');
const closeModal = document.getElementsByClassName('close')[0];
const commentsContainer = document.querySelector('.comments-contaier');
const commentForm = document.querySelector('.comment-form');


const createPost = (postId, votes, username, title, content, imgLink) => {
  const headerUsername = document.querySelector('.header-username');


  const postsContainer = document.querySelector('.posts-container');
  const post = document.createElement('div');
  post.setAttribute('id', `post-${postId}`);
  post.setAttribute('class', 'post');
  postsContainer.appendChild(post);

  const votesContainer = document.createElement('div');
  votesContainer.setAttribute('class', 'votes-container');
  post.appendChild(votesContainer);

  const voteUp = document.createElement('i');
  voteUp.setAttribute('class', 'fas fa-arrow-up');
  voteUp.setAttribute('id', 'arrow-up');
  voteUp.setAttribute('onclick', `voteUp(${postId})`);
  votesContainer.appendChild(voteUp);

  const votesNumber = document.createElement('p');
  votesNumber.setAttribute('class', 'votes-number');
  votesNumber.setAttribute('id', `votes-${postId}`);
  votesContainer.appendChild(votesNumber);
  votesNumber.textContent = votes;

  const voteDown = document.createElement('i');
  voteDown.setAttribute('class', 'fas fa-arrow-down');
  voteDown.setAttribute('id', 'arrow-down');
  voteDown.setAttribute('onclick', `voteDown(${postId})`);
  votesContainer.appendChild(voteDown);



  const contentContainer = document.createElement('div');
  contentContainer.setAttribute('class', 'content-container');
  post.appendChild(contentContainer);

  const postedBy = document.createElement('p');
  postedBy.setAttribute('class', 'posted-by');
  postedBy.textContent = 'posted by';
  contentContainer.appendChild(postedBy);

  const profileLink = document.createElement('a');
  profileLink.setAttribute('href', `/profile/${username}`);
  profileLink.textContent = username;
  postedBy.appendChild(profileLink);

  const postTitle = document.createElement('p');
  postTitle.setAttribute('class', 'post-title');
  postTitle.textContent = title;
  contentContainer.appendChild(postTitle);

  const postContent = document.createElement('p');
  postContent.setAttribute('class', 'post-content');
  postContent.textContent = content;
  contentContainer.appendChild(postContent);
  if (imgLink) {
    const postImage = document.createElement('img');
    postImage.setAttribute('src', imgLink);
    postImage.setAttribute('class', 'post-img');
    postImage.setAttribute('alt', 'post-img');
    contentContainer.appendChild(postImage);
  }
  const comments = document.createElement('i');
  comments.setAttribute('class', 'fa-solid fa-comment');
  comments.setAttribute('id', 'comments-section');
  comments.setAttribute('onclick', `displayComments(${postId})`);
  contentContainer.appendChild(comments);
  if (headerUsername) {
    const LoggedInuser = headerUsername.textContent.split(' ')[1];
    if (LoggedInuser === username) {
      const deletePost = document.createElement('i');
      deletePost.setAttribute('class', 'fa fa-trash');
      deletePost.setAttribute('id', 'comments-section');
      deletePost.setAttribute('onclick', `deletePost(${postId})`);
      contentContainer.appendChild(deletePost);
      profileLink.textContent = ' you';
    }
  }
};
const createComment = (username, content) => {

  const commentCard = document.createElement('div');
  commentCard.setAttribute('class', 'comment-card');
  commentsContainer.appendChild(commentCard);

  const commentUsername = document.createElement('a');
  commentUsername.setAttribute('href', `/profile/${username}`);
  commentUsername.setAttribute('class', 'comment-username');
  commentUsername.textContent = username;
  commentCard.appendChild(commentUsername);

  const commentContent = document.createElement('p');
  commentContent.setAttribute('class', 'comment-content');
  commentContent.textContent = content;
  commentCard.appendChild(commentContent);
};

const voteUp = (id) => {
  const votesNumber = document.querySelector(`#votes-${id}`);
  fetch(`/posts/${id}/upvote`).then((res) => res.json()).then((data) => {
    if (data.status === 401) {
      window.location.href = '/login';
    } else {
      votesNumber.textContent = +votesNumber.textContent + 1;
    }
  });

};
const voteDown = (id) => {
  const votesNumber = document.querySelector(`#votes-${id}`);
  fetch(`/posts/${id}/downvote`).then((res) => res.json()).then((data) => {
    if (data.status === 401) {
      window.location.href = '/login';
    } else {
      votesNumber.textContent = +votesNumber.textContent - 1;
    }

  });
};

const deletePost = (id) => {
  console.log('hi');
  fetch(`/posts/${id}`, { method: 'DELETE' }).then((res) => res.json()).then((data) => {
    const post = document.querySelector(`#post-${id}`);
    post.innerHTML = '';
  });
};

const displayComments = (id) => {
  commentsContainer.innerHTML = '';
  commentModal.style.display = 'block';

  fetch(`/comments/${id}`).then((res) => res.json()).then((data) => {
    console.log(data);
    data.forEach((ele) => { createComment(ele.username, ele.content); });

  });
  commentForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const content = e.target.content.value;
    console.log(content);
    const headerUsername = document.querySelector('.header-username');
    // eslint-disable-next-line no-undef
    fetchData({ content }, 'post', `/comments/${id}`).then((data) => {
      console.log(data);
      if (data.status !== 201) {
        window.location.href = '/login';
      } else {
        createComment(headerUsername.textContent.split(' ')[1], content);
      }
    });
  });
};
closeModal.onclick = () => {
  commentModal.style.display = 'none';
};

window.onclick = (e) => {
  if (e.target === commentModal) {
    commentModal.style.display = 'none';
  }
};


