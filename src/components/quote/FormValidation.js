export default function FormValidation(values) {
  let errors = {};

  //Username Validation

  if (!values.username.trim()) {
    errors.username = "Username Requied";
  }

  //Email Validation

  if (!values.email) {
    errors.email = "Email Required";
  } else if (
    !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(values.email)
  ) {
    errors.email = "Email address is invalid";
  }

  // Query Valdiation
  if (!values.query) {
    errors.query = "A query must be submitted";
  }
  return errors;
}
