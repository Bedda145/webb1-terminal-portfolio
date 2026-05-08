document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll<HTMLButtonElement>(".filter-btn");
  const posts = document.querySelectorAll<HTMLElement>(".post-item");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const filterTag = button.getAttribute("data-filter");

      posts.forEach((post) => {
        const postTags = post.getAttribute("data-tag");

        if (
          filterTag === "all" ||
          (postTags && postTags.split(" ").indexOf(filterTag as string) !== -1)
        ) {
          post.style.display = "block";
        } else {
          post.style.display = "none";
        }
      });
    });
  });
  const closeBtn = document.querySelector(".close");
  const minimizeBtn = document.querySelector(".minimize");
  const maximizeBtn = document.querySelector(".maximize");
  const terminalWindow = document.querySelector(".terminal-window");
  const terminalBody = document.querySelector(".terminal-body");

  if (closeBtn && terminalWindow) {
    closeBtn.addEventListener("click", () => {
      (terminalWindow as HTMLElement).style.display = "none";
    });
  }

  if (minimizeBtn && terminalBody) {
    minimizeBtn.addEventListener("click", () => {
      terminalBody.classList.toggle("hidden");
    });
  }

  if (maximizeBtn && terminalWindow) {
    maximizeBtn.addEventListener("click", () => {
      terminalWindow.classList.toggle("fullscreen");
    });
  }
});
