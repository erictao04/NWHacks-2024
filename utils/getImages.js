import { ref, get, child } from "firebase/database";
import { ref as storageRef, getBlob } from "firebase/storage";
import { auth, db, storage } from "../config";

export function getImages(email) {
  // get(child(ref(db), `sellerClothes`))
  //   .then((snapshot) => {
  //     if (snapshot.exists()) {
  //       // console.log(snapshot.val());
  //     } else {
  //       console.log("No data available");
  //     }
  //   })
  //   .catch((error) => {
  //     console.error(error);
  //   });

  imageIds = [
    "erictao04@gmail.com-1705832192755",
    "erictao04@gmail.com-1705832166313",
    "erictao04@gmail.com-1705832165170",
    "erictao04@gmail.com-1705832163400",
    "erictao04@gmail.com-1705832153877",
    "erictao04@gmail.com-1705832136381",
  ];
  images = {};
  //   getBlob(storageRef(storage, "erictao04@gmail.com-1705832192755"))
  //     .then((blob) => blob.arrayBuffer())
  //     .then((buffer) => console.log(buffer));

  for (let imageId of imageIds) {
    getBlob(storageRef(storage, imageId)).then((blob) => {
      console.log("downloaded");
      images[imageId] = blob;
      console.log(images);
    });
  }

  return images;
}