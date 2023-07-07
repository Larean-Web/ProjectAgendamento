export const validateEmail = new RegExp(
    "^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$"
);
export const validatePassword = new RegExp(
    "^(?=.*?[A-Za-z])(?=.*?[0-9]).{6,}$"
)
export const validateNumberPhone = new RegExp(
    "^\s*(\d{2}|\d{0})[-. ]?(\d{5}|\d{4})[-. ]?(\d{4})[-. ]?\s*$"
)