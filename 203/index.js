const listElement = document.querySelector(".posts");
const fetchButton = document.querySelector("#available-posts button");
const postTemplate = document.querySelector("template");
const addButton = document.querySelector("#new-post button");
const title = document.getElementById("title");
const content = document.getElementById("content");

async function sendHttpRequest(method, url) {
  //with axios
  const { data } = await axios(url, { method });
  return data;
}

async function fetchPosts() {
  const responseData = await sendHttpRequest("GET", "https://jsonplaceholder.typicode.com/posts");

  console.log(responseData);
  if (responseData.length > 0) {
    for (const post of responseData) {
      const postElClone = document.importNode(postTemplate.content, true);
      postElClone.querySelector("h2").textContent = post.title;
      postElClone.querySelector("p").textContent = post.body;
      postElClone.querySelector("li").id = post.id;
      listElement.appendChild(postElClone);
    }
  }
}

async function addPost(e) {
  e.preventDefault();

  if (!title.value || !content.value) {
    return alert("required Title and Content");
  }

  const data = { userId: 0, title: title.value, body: content.value };
  await axios
    .post("https://jsonplaceholder.typicode.com/posts", data)
    .then((response) => {
      const data = response.data;
      console.log(data);

      const postElClone = document.importNode(postTemplate.content, true);
      postElClone.querySelector("h2").textContent = data.title;
      postElClone.querySelector("p").textContent = data.body;
      postElClone.querySelector("li").id = data.id;
      listElement.appendChild(postElClone);
    })
    .catch((err) => {
      console.log(`error: ${err}`);
    });
  title.value = "";
  content.value = "";
}

// POST
addButton.addEventListener("click", addPost);
// READ/GET
fetchButton.addEventListener("click", fetchPosts);
