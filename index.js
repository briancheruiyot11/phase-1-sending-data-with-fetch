// Add your code here
function submitData(name, email) {
  const userData = {
    name: name,
    email: email
  };

  return fetch("http://localhost:3000/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify(userData)
  })
    .then(response => response.json())
    .then(data => {
      // Append the ID to the DOM
      const body = document.querySelector("body");
      const p = document.createElement("p");
      p.textContent = `User ID: ${data.id}`;
      body.appendChild(p);
    })
    .catch(error => {
      // Append the error message to the DOM
      const body = document.querySelector("body");
      const p = document.createElement("p");
      p.textContent = `Error: ${error.message}`;
      body.appendChild(p);
    });
}

