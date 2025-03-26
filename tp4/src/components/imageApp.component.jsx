import '../assets/style/murImages.css';

import dataImages from "../data/dataImages.js"

import ImageWall from "./imageWall.component.jsx";
import ImageDetails from "./imageDetails.component.jsx";

const ImageApp = () => {

  return (
    <div> 
    <ImageWall images = {dataImages} />
    <ImageDetails /></div>
  );
}
export default ImageApp;
 