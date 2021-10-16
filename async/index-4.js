const axios = require("axios");
const gitHubApi = "https://api.github.com/users/dimasneto7/repos";

axios.get(gitHubApi).then((res) => {
  console.log(res.data);
});
console.log("teste");
