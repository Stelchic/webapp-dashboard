const alertDiv = document.querySelector(".alerts");
const alertX = document.querySelector(".alert-x");

alertDiv.innerHTML = `<p><b>Alert:</b> You have unread messages</p>
<p class="alert-x">x</p>`

const alertClose = document.addEventListener("click", (e) => {
    alertDiv.style.display = "none";
});