import auth from '@react-native-firebase/auth';

/** 
 * @author Rajnish kumar
 * @param email (string): The email address of the user trying to sign in.
 * @param password (string): The password associated with the user's email address.
 * @returns A promise that resolves to a Firebase User object upon successful sign-in.
 *  Throws an error with specific error messages for certain error conditions.
 */
export const signInWithEmailAndPassword = async (email: string, password: string) => {
  try {
    const userCredential = await auth().signInWithEmailAndPassword(email, password);
    return userCredential.user;
  } catch (error: any) {
    if (["auth/user-not-found", "auth/invalid-credential"].includes(error.code)) {
      return registerUser(email, password)
    } else if (error.code === 'auth/wrong-password') {
      throw new Error('Incorrect password');
    } else {
      throw error;
    }
  }
};

/** 
 * @param email (string): The email address of the user trying to sign in.
 * @param password (string): The password associated with the user's email address.
 * @returns A promise that resolves to a Firebase User object upon successful sign-up.
 *  Throws an error with specific error messages for certain error conditions.
 */
const registerUser = async (email: string, password: string) => {
  try {
    const userCredential = await auth().createUserWithEmailAndPassword(email, password);
    return userCredential.user;
  } catch (error) {
    throw error;
  }
};

/** 
 * @author Rajnish Kumar
 * @returns A promise that resolves when the user is successfully logged out.
 * Throws an error if there is an issue during the logout process.
 */
export const logOutuser = async () => {
  try {
    await auth().signOut();
  } catch (error) {
    throw error;
  }
}

/** 
 * @author Rajnish Kumar
 * @returns The currently authenticated user object (User | null), which represents the current user session.
 */
export const currentUser = () => {
  try {
    return auth().currentUser;
  } catch (error) {
    throw error;
  }
}

