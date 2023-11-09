export const FormValidation = (formData) => {
  const { firstName, lastName, dob, country, address, contact, contactType } =
    formData;

  if (!firstName || !lastName || !dob || !country || !address || !contact) {
    return false;
  }
  if (contactType === "email" && !contact.includes("@")) {
    return false;
  }
  return true;
};

export function ErrorMessage({ condition, message }) {
  return condition ? <div style={{ color: "red" }}>{message}</div> : null;
}
