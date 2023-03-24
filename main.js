let githubRepos = document.querySelectorAll(".githubProject");

let githubRepoRedirect = () => {
  for (let i = 0; i < githubRepos.length; i++) {
    console.log(githubRepos[i].id);
    githubRepos[i].addEventListener("click", () => {
      window.open("https://github.com/hripple46/" + `${githubRepos[i].id}`);
    });
  }
};

githubRepoRedirect();
