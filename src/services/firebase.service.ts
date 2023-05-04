import { doc, getDoc } from "firebase/firestore";
import db from "../components/firebase/init";

const firebaseService = () => {
  const getResumeData = () => {
    const docRef = doc(db, "resume", "userInfo");
    const docSnap = getDoc(docRef);
    return docSnap;
  };
  return { getResumeData };
};

const FirebaseService = firebaseService();
export default FirebaseService;
