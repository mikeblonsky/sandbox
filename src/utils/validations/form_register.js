export const validate = (values) => {
    const errors = {};
    if (!values.userName) 
        errors.userName = "Wymagane";
    if (!values.userSureName) 
        errors.userSureName = "Wymagane";
    if (!values.userNick) 
        errors.userNick = "Wymagane";
    if (!values.userEmail) 
        errors.userEmail = "Wymagane";
    if (!values.userEmailConfirm) 
        errors.userEmailConfirm = "Wymagane";
    if (!values.userPassword) 
        errors.userPassword = "Wymagane";
    if (!values.userPasswordConfirm) 
        errors.userPasswordConfirm = "Wymagane";
    if (!values.userCity) 
        errors.userCity = "Wymagane";
    return errors;
}