import { ref as storeRef, uploadBytesResumable } from "firebase/storage";
import { ref as databaseRef, set, push } from "firebase/database";
import { db, storage } from "../../config";

const postListRef = databaseRef(db, "sellerClothes");
const newPostRef = push(postListRef);

export const uploadSellerClothes = (email, photo, description) => {
  const d = new Date();
  const time = d.getTime();
  const storageRef = storeRef(storage, email + "-" + time);
  const blob = new Blob([photo.base64]);

  uploadBytesResumable(storageRef, blob)
    .then((snapshot) => {
      console.log("Successfully uploaded image");
      set(newPostRef, {
        email: email,
        imagePath: snapshot.metadata.fullPath,
        imageDescription: description,
        available: true,
      })
        .then(() => console.log("Successfully upladed metadata"))
        .catch((e) => console.error("Error during metadata upload: ", e));
    })
    .catch((e) => console.error("Error uploading image: ", e));
};
