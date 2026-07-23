const fetchBtn = document.getElementById("fetchBtn");
const status = document.getElementById("status");
const usersDiv = document.getElementById("users");

fetchBtn.addEventListener("click", () => {

    usersDiv.innerHTML = "";
    status.textContent = "Loading...";

    setTimeout(() => {

        fetch("https://jsonplaceholder.typicode.com/users")
            .then(response => response.json())
            .then(data => {

                data.forEach(user => {

                    const card = document.createElement("div");
                    card.classList.add("card");

                    card.innerHTML = `
                        <h3>${user.name}</h3>
                        <p>Email: ${user.email}</p>
                        <p>Phone: ${user.phone}</p>
                    `;

                    usersDiv.appendChild(card);
                });

                status.textContent = "Loaded Successfully ✅";
            })

            .catch(error => {
                status.textContent = "Failed to Load Data ❌";
                console.log(error);
            });

    }, 2000);

});