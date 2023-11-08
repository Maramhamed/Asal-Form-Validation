document.getElementById("myForm").addEventListener("submit", (event) => {
  event.preventDefault(); // Prevent the default form submission behavior

  var firstName = document.getElementById("firstName").value,
    lastName = document.getElementById("lastName").value,
    email = document.getElementById("exampleInputEmail1").value,
    mobile = document.getElementById("Mobile").value,
    gender = document.querySelector('input[name="gender"]:checked'),
    dateOfBirth = document.getElementById("DateOfBirth").value,
    inputAddress = document.getElementById("inputAddress").value,
    inputCity = document.getElementById("inputCity").value,
    inputState = document.getElementById("inputState").value,
    inputZip = document.getElementById("inputZip").value,
    qualification = document.getElementById("Qualification").value,
    flexCheckDefault = document.getElementById("flexCheckDefault").checked,
    Art = document.getElementById("Art").checked,
    Computer = document.getElementById("Computer").checked,
    password = document.getElementById("exampleInputPassword1").value;
  console.log(encodeURIComponent(firstName));

  if (
    !firstName ||
    !lastName ||
    !email ||
    !mobile ||
    !gender ||
    !dateOfBirth ||
    !inputAddress ||
    !inputCity ||
    !inputState ||
    !inputZip ||
    !qualification ||
    (!flexCheckDefault && !Art && !Computer) ||
    !password
  ) {
    alert("Please fill out all fields.");
    return; // Return early to prevent further execution
  }

  // Redirect to new.html with firstName and lastName as query parameters

  /*window.location.href = `/Using Bootstrap/new.html?firstName=${encodeURIComponent(
    firstName
  )}&lastName=${encodeURIComponent(lastName)}`;*/
});
