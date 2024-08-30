function checkAccount() {
  let password = document.querySelector("#password");
  let email = document.querySelector("#email");
  console.log(password.value);
  console.log(email.value);
  fetch("https://fakestoreapi.com/auth/login", {
    method: "POST",
    body: JSON.stringify({
      username: email.value,
      password: password.value,
    }),
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((result) => {
      location.href = "./home.html";
      localStorage.setItem("token", JSON.stringify(result));
      console.log(result);
    });
}
function checkLogin() {
  let userData = localStorage.getItem("token");
  console.log(JSON.parse(userData));
  if (userData != null) {
    location.href = "./home.html";
  }
}
checkLogin();

// // localStorage.setItem("cartProducts", JSON.stringify(arr));
//                username: "mor_2314",
//                 password: "83r5^_"
// location.href = "./home.html";
