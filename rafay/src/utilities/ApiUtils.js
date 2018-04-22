let email = "joe@example.com";  
let password = "donkeybrains";  
let myApiUrl = "http://www.example.com/api"  
let usersPath = "users";


fetch('https://mywebsite.com/endpoint/', {  
  method: 'POST',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    firstParam: 'yourValue',
    secondParam: 'yourOtherValue',
  })
})