import {db} from '../../config/Firebase'
import { getDocs, collection, doc, addDoc, deleteDoc, updateDoc } from "firebase/firestore"
export const Fetch_ITEMS = 'Fetch_ITEMS'


export const fetchItem = (setLoading) => async (dispatch) => {
    setLoading(true);
    try {
      let Items = [];
      await getDocs(collection(db, 'Items'))
        .then((snapshot) => {
          snapshot.docs.forEach((doc) => {
            Items.push({
              ...doc.data()
              , uid: doc.id
            });
            console.log("resValueGet users", Items);
  
          })
        });
  
      dispatch({
        type: Fetch_ITEMS,
        payload: Items,
      });
    } catch (error) {
      console.log("error", error);
  
    } finally {
      setLoading(false);
    }
}