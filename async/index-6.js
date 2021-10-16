(async () => {
  const axios = require("axios");
  const gitHubApi = (user) => `https://api.github.com/users/${user}/repos`;
  const users = ["dimasneto7", "rmanguinho", "otaviolemos"];

  console.time();
  users.forEach(async (user) => {
    const res = await axios.get(gitHubApi(user));
    console.log(res.status);
  });
  console.timeEnd();
})();
