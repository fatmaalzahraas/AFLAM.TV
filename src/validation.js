const validation = (email, password) => {
  let errors = {};
  const emailRegx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (email === "") {
    errors.email = "Email must not be empty!";
  } else if (!emailRegx.test(email)) {
    errors.email = "Email not valid";
  }
  if (password === "") {
    errors.password = "Password must not be empty!";
  } else if (password.length < 6 || password.length > 25) {
    errors.password =
      "password must be at least 6 characters and no more than 25 characters";
  }
  return errors;
};
export default validation;
