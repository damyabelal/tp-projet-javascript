import '../assets/style/murImages.css';

import dataImages from "../data/dataImages.js"


const ImageWall = ({images}) => {
    return (
    <div id="mur">
        {images.map((img) => (<img src={img.image} alt={img.texte} title={img.texte} key={img.image}/>))}
    </div>
    );
  }
  
export default ImageWall;
  
