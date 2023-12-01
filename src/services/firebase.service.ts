import { doc, getDoc, updateDoc } from "firebase/firestore";
import db from "../components/firebase/init";

const firebaseService = () => {
  const docRef = doc(db, "resume", "userInfo");
  const getResumeData = () => {
    const docSnap = getDoc(docRef);
    return docSnap;
  };
  const updateSkills = async (skills: string[]) => {
    await updateDoc(docRef, {
      skills: skills,
    });
    return skills;
  };
  return { getResumeData, updateSkills };
};

const FirebaseService = firebaseService();
export default FirebaseService;
