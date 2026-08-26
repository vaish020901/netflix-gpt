export const checkValidData = (email, password, name, confirmPassword, isSignInForm) => {

    const isEmailValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
    const isPasswordValid = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password);
    const isNameValid = /^[a-zA-Z]+(?:[\s'-][a-zA-Z]+)*$/.test(name);
    const isConfirmPasswordValid = password === confirmPassword;

    if(!isEmailValid)return "Email ID is not valid";
    if(!isPasswordValid)return "Password is not valid";
    if(!isSignInForm && !isNameValid)return "Name is not valid";
    if(!isSignInForm && !isConfirmPasswordValid)return "Passwords do not match";

    return null;
};
