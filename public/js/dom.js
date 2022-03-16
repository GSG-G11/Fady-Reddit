/* eslint-disable no-unused-vars */
/* eslint-disable no-multiple-empty-lines */
/* eslint-disable padded-blocks */
const createPost = (postId, votes, username, title, content, imgLink) => {
  const postsContainer = document.querySelector('.posts-container');
  const post = document.createElement('div');
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
    contentContainer.appendChild(postImage);
  }
  const comments = document.createElement('i');
  comments.setAttribute('class', 'fa-solid fa-comment');
  comments.setAttribute('id', 'comments-section');
  comments.setAttribute('onclick', `displayComments(${postId})`);
  contentContainer.appendChild(comments);
};
