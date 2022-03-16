/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-vars */
const createMessageError = (ele, message) => {
  ele.style.color = 'red';
  ele.textContent = message;
};

const fetchData = (data, method, url) =>
  fetch(url, {
    method,
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .catch((err) => new Error("Couldn't fetch Data"));
