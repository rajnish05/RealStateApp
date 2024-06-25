/**
 * @param password: A string representing a password to be validated.
 * @returns true if the password string meets specified criteria (e.g., minimum length, alphanumeric characters).false otherwise.
 */

const isPasswordValid = (password: string): boolean => {
  // Minimum length check
  if (password.length < 8) {
    return false;
  }
  // Alphanumeric check
  const alphanumericRegex = /^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$/;
 return alphanumericRegex.test(password);
};

export { isPasswordValid };