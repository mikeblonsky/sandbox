export const validate = (values) => {
    const errors = {};
    if (!values.name) errors.name = "Wymagane";
    if (!values.sureName) errors.sureName = "Wymagane";
    if (!values.email) errors.email = "Wymagane";
    return errors;
}