import { db, auth } from "../../config/Firebase";
export const LOGIN = 'LOGIN'    
    
    
    
export const doLogin = (user, setLoader) => async (dispatch) => {
    try {
      setLoader(true);
      // firebase login
      const userCredential = await auth.signInWithEmailAndPassword(
        user.email,
        user.password
      );
      var userData = userCredential.user;
      console.log(userData,'authaction')
      if (userData) {
        dispatch({
          type: LOGIN,
          payload: userData,
        });
      }
    } catch (error) {
      console.log(error);
      // alert
    } finally {
      setLoader(false);
    }
    // login details
  };
  