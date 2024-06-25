const isEmailValid = (email: string): boolean => {
    // Basic email validation logic
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
  
  export { isEmailValid };
  