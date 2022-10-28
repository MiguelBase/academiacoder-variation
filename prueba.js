var edad = 18;

let user_edad = document.getElementsByClassName("user-edad")[0]
console.log(user_edad)

if (edad >= 18) {
  document.write("sos mayor de edad")
  user_edad.innerText = "Sos mayor de edad"
}
