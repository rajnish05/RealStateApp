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


const registerUser = async (email: string, password: string) => {
  try {
    const userCredential = await auth().createUserWithEmailAndPassword(email, password);
    return userCredential.user;
  } catch (error) {
    throw error;
  }
};

export const logOutuser = async () => {
  try {
    await auth().signOut();
  } catch (error) {
    throw error;
  }
}

export const currentUser = () => {
  try {
    return auth().currentUser;
  } catch (error) {
    throw error;
  }
}

