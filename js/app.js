const alertDiv = document.querySelector(".alerts");

alertDiv.innerHTML = `<p><b>Alert:</b> You have unread messages</p>
<p class="alert-x">x</p>`

const alertX = document.querySelector(".alert-x");

const alertClose = alertX.addEventListener("click", (e) => {
    alertDiv.style.display = "none";
});

const user = document.querySelector("#userField");
const message = document.querySelector("#messageField");
const sendBtn = document.querySelector("#sendMessage");

sendBtn.addEventListener("click", (e) => {
    if (user.value === "" && message.value === "") {
        alert("Please fill out the user and the message fields before sending");
    } else if (user.value === "") {
        alert("Please fill out the user field before sending");
    } else if (message.value === "") {
        alert("Please fill out the message field before sending");
    } else {
        alert(`Message successfully sent to: ${user.value}`);
        user.value = "";
        message.value = "";
    }
});