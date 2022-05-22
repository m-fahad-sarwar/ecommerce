import {db} from '../../config/Firebase'
import { getDocs, collection, doc, addDoc, deleteDoc, updateDoc } from "firebase/firestore"

export const ADD_CART = 'ADD_CART'
export const FETCH_CART = 'FETCH_CART'
export const DELETE_CART = 'DELETE_CART'

export const addItem = (data ,setLoading) => async (dispatch) => {
    setLoading(true)
    try {
      let resValueGet = await addDoc(collection(db, 'cart'), data);
      console.log(resValueGet)
      dispatch({
        type: ADD_CART,
        payload: {
          ...data,
          uid: resValueGet.id
        }
      }
  )  } catch (error) {
      console.log("error", error);
    } finally {
      setLoading(false)
    }
  
  
  }
  
 
export const fetchcart = (setLoading) => async (dispatch) => {
  setLoading(true);
  try {
    let cart = [];
    let snapshot = await getDocs(collection(db, 'cart'))
        snapshot.docs.forEach((doc) => {
          cart.push({
            ...doc.data()
            , uid: doc.id
          });

        })
      console.log('in action',cart)
    dispatch({
      type: FETCH_CART,
      payload: cart,
    });
  } catch (error) {
    console.log("error", error);

  } finally {
    setLoading(false);
  }
}

export const deleteCart = (setLoading, uid) => async (dispatch) => {
  setLoading(true);
  try {
    const docRef = doc(db, 'cart', uid)

    await deleteDoc(docRef);

    dispatch({
      type: DELETE_CART,
      payload: uid,
    });
  } catch (error) {
    console.log("error", error);

  } finally {
    setLoading(false);
  }
};