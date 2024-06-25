/**
 * @param email: A string representing an email address to be validated.
 * @returns true if the email string matches the basic email format ([^\s@]+@[^\s@]+\.[^\s@]+). false otherwise.
 */
const isEmailValid = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
  
  export { isEmailValid };
  