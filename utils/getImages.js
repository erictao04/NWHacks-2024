import { ref, get, child } from "firebase/database";
import { ref as storageRef, getBlob } from "firebase/storage";
import { auth, db, storage } from "../config";

const blobToBase64 = (blob, setImage) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(blob);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });

export async function getImage(setImages) {
  blob = await getBlob(
    storageRef(storage, "erictao04@gmail.com-1705832192755")
  );
  base64Url = await blobToBase64(blob);
  setImages(base64Url);
}

export async function getImages(email, setImages) {
  setImages([
    "https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w600/2023/10/free-images.jpg",
    "https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-1080x675.jpg",
    "https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w600/2023/10/free-images.jpg",
    "https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-1080x675.jpg",
    "https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w600/2023/10/free-images.jpg",
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAIAQMAAAD+wSzIAAAABlBMVEX///+/v7+jQ3Y5AAAADklEQVQI12P4AIX8EAgALgAD/aNpbtEAAAAASUVORK5CYII",
  ]);
  // setImages([
  //   "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAIAQMAAAD+wSzIAAAABlBMVEX///+/v7+jQ3Y5AAAADklEQVQI12P4AIX8EAgALgAD/aNpbtEAAAAASUVORK5CYII",
  //   "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAIAQMAAAD+wSzIAAAABlBMVEX///+/v7+jQ3Y5AAAADklEQVQI12P4AIX8EAgALgAD/aNpbtEAAAAASUVORK5CYII",
  //   "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAIAQMAAAD+wSzIAAAABlBMVEX///+/v7+jQ3Y5AAAADklEQVQI12P4AIX8EAgALgAD/aNpbtEAAAAASUVORK5CYII",
  //   "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAIAQMAAAD+wSzIAAAABlBMVEX///+/v7+jQ3Y5AAAADklEQVQI12P4AIX8EAgALgAD/aNpbtEAAAAASUVORK5CYII",
  //   "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAIAQMAAAD+wSzIAAAABlBMVEX///+/v7+jQ3Y5AAAADklEQVQI12P4AIX8EAgALgAD/aNpbtEAAAAASUVORK5CYII",
  //   "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAIAQMAAAD+wSzIAAAABlBMVEX///+/v7+jQ3Y5AAAADklEQVQI12P4AIX8EAgALgAD/aNpbtEAAAAASUVORK5CYII",
  // ]);
  return;
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
  images = [];
  //   getBlob(storageRef(storage, "erictao04@gmail.com-1705832192755"))
  //     .then((blob) => blob.arrayBuffer())
  //     .then((buffer) => console.log(buffer));
  filereader = new FileReader();
  for (let imageId of imageIds) {
    blob = await getBlob(storageRef(storage, imageId));
    base64Url = await blobToBase64(blob);
    images.push(base64Url);
    console.log(imageId);
  }
  //   console.log(images);
  setImages(images);
}
