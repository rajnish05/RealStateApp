import auth from '@react-native-firebase/auth';

/** 
 *  @author Rajnish kumar
 * @param email provided email by user
 * @param password user passowrd for login or signup
 * @returns user Details
 */

// Function to attempt signing in with email and password
export const signInWithEmailAndPassword = async (email: string, password: string) => {
  try {
    const userCredential = await auth().signInWithEmailAndPassword('joe.bloggs@example.com', '123456');
    return userCredential.user;
  } catch (error: any) {
    if (error.code === 'auth/user-not-found') {
      return registerUser(email, password)
    } else if (error.code === 'auth/wrong-password') {
      throw new Error('Incorrect password');
    } else {
      throw error;
    }
  }
};


const registerUser = async (email: string, password: string) => {
  try {
    const userCredential = await auth().createUserWithEmailAndPassword(email, password);
    return userCredential.user;
  } catch (error) {
    throw error;
  }
};
