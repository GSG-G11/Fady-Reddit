fetch('/homePosts').then((res) => res.json()).then((data) => {
  data.forEach((ele) => {
    // eslint-disable-next-line no-undef
    createPost(ele.id, ele.vote, ele.username, ele.title, ele.content, ele.img_post);
  });
});
