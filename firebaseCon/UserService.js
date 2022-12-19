import app from "../component/FirebaseConfig";
import { getDatabase, ref, set, push, onValue } from "firebase/database";

export const getUser = async () => {
  var item = [];
  await onValue(ref(getDatabase(), "User"), (snapshot) => {
    item.push(Object.values(snapshot.val()));
  });

  return item;
};
