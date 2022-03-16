fetch('/homePosts').then((res) => res.json()).then((data) => {
  data.forEach((ele) => {
    // eslint-disable-next-line no-undef
    createPost(ele.id, ele.vote, ele.username, ele.title, ele.content, ele.img_post);
  });
});

const postForm = document.querySelector('.post-form');

postForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const title = e.target.title.value;
  const content = e.target.content.value.trim();
  const img = e.target.img.value;
  console.log(title, content, img);

  // eslint-disable-next-line no-undef
  fetchData({ title, content, img }, 'post', '/posts').then((data) => {
    if (data.status !== 201) {
      window.location.href = '/login';
    } else {
      window.location.href = '/';
    }
  });
});
