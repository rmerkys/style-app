const Validation = ({ render }) => {
  const validateForm = (formData) => {
    const { username, email, password } = formData;

    const nameValid = username.length >= 5;

    const emailValid = email.includes("@");

    const passwordValid = password.length >= 6;

    const formValid = nameValid && emailValid && passwordValid;

    const errors = {
      nameValid,
      emailValid,
      passwordValid,
    };

    return {
      formValid,
      errors,
    };
  };

  return render(validateForm);
};

export default Validation;
