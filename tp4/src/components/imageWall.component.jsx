import '../assets/style/murImages.css';

import dataImages from "../data/dataImages.js"


const ImageWall = ({images, hover}) => {
    return (
      <div id="mur">
      {images.map((img) => (
          <img src={img.image} alt={img.texte} title={img.texte} key={img.image} onMouseEnter={() => hover(img.image, img.texte) 
            
          } 
      />
    ))}
  </div>
);
};

export default ImageWall;
  
