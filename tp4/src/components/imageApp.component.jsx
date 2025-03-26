import '../assets/style/murImages.css';

import dataImages from "../data/dataImages.js"

import ImageWall from "./imageWall.component.jsx";
import ImageDetails from "./imageDetails.component.jsx";

import { useState } from "react";

const ImageApp = () => {

  const [image, setImage] = useState("../images/image5.jpg");
  const [texte, setTexte] = useState("la plus belle....");

  const imageChanged = (newImage, newText) => {
    setImage(newImage);
    setTexte(newText);
  };

  return (
    <div> 
    <ImageWall images = {dataImages} />
    <ImageDetails image = {"../images/image5.jpg"} texte = {"la plus belle...."} />
    </div>
  );
}
export default ImageApp;
 
