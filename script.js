document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Thanks for your message! I'll get back to you soon.");
  });
  
// 留言互動功能
document.getElementById("commentForm")?.addEventListener("submit", function (e) {
    e.preventDefault();
    const name = e.target[0].value;
    const message = e.target[1].value;
  
    const commentSection = document.getElementById("comments");
    const newComment = document.createElement("div");
    newComment.classList.add("border", "p-3", "mb-2");
    newComment.innerHTML = `<strong>${name}</strong><p>${message}</p>`;
  
    commentSection.appendChild(newComment);
  
    e.target.reset(); // 清空表單
  });
  
