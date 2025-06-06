document.getElementById("loginForm").addEventListener("submit", async function (e) {
  e.preventDefault();

  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  try {
    const response = await fetch("https://dev-api.wildgamebutcher.com/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();

    if (response.ok) {
     
     
      localStorage.setItem("token", data.data.token);
      alert("Login successful!");
      console.log("Stored user:", data);

      
    } else {
      alert("Login failed: " + (data.message || "Invalid credentials"));''
    }
  } catch (error) {
    console.error("Error during login:", error);
    alert("Something went wrong. Please try again later.");
  }
});
