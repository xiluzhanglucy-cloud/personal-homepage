// 填入本人愿意公开的真实邮箱，例如 name@example.com；留空时显示待补充。
const publicEmail = "";

document.getElementById("year").textContent = new Date().getFullYear();
if (publicEmail.trim()) {
  const emailLink = document.getElementById("email-link");
  emailLink.textContent = publicEmail.trim();
  emailLink.href = "mailto:" + publicEmail.trim();
  emailLink.hidden = false;
  document.getElementById("email-placeholder").hidden = true;
  document.getElementById("email-note").textContent = "点击邮箱即可使用邮件应用联系我。";
}

// 项目图片预览：原生对话框支持Esc关闭和键盘焦点管理。
const imageDialog = document.getElementById('image-dialog');
document.querySelectorAll('.image-preview').forEach(button => {
  button.addEventListener('click', () => {
    const image = document.getElementById('dialog-image');
    image.src = button.dataset.image;
    image.alt = button.querySelector('img').alt;
    document.getElementById('image-dialog-title').textContent = button.dataset.caption;
    imageDialog.showModal();
  });
});
document.getElementById('close-image').addEventListener('click', () => imageDialog.close());
imageDialog.addEventListener('click', event => {
  const bounds = imageDialog.getBoundingClientRect();
  if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) imageDialog.close();
});
