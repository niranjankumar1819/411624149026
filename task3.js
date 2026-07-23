let messages = [];

const input = document.getElementById("messageInput");
const count = document.getElementById("count");
const status = document.getElementById("status");
const messagesDiv = document.getElementById("messages");

input.addEventListener("input", function () {
    count.textContent = input.value.length;
});
function displayMessages() {

    messagesDiv.innerHTML = "";

    messages.forEach(function (msg) {

        let div = document.createElement("div");
        div.className = "message";
        div.textContent = msg;

        messagesDiv.appendChild(div);
        setTimeout(function () {

            let index = messages.indexOf(msg);

            if (index !== -1) {

                messages.splice(index, 1);

                displayMessages();

                status.textContent = "Message Expired";
            }

        }, 10000);

    });
}

document.getElementById("addBtn").addEventListener("click", function () {

    let message = input.value.trim();

    let promise = new Promise(function (resolve, reject) {

        if (message.length >= 3) {
            resolve(message);
        } else {
            reject("Message must contain at least 3 characters");
        }

    });

    promise
        .then(function (msg) {

            messages.push(msg);

            status.textContent = "Message Added Successfully";

            displayMessages();

            input.value = "";

            count.textContent = "0";
        })
        .catch(function (error) {

            status.textContent = error;

        });

});

document.getElementById("clearBtn").addEventListener("click", function () {

    messages = [];

    messagesDiv.innerHTML = "";

    status.textContent = "All Messages Cleared";

});