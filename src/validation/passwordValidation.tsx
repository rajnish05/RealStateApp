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