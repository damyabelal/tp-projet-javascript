import '../assets/style/murImages.css';

import dataImages from "../data/dataImages.js"

const ImageDetails = ({image , texte}) => {
    return (
    <div id="details">
      <img src={image} alt={texte} /> 
      <div className="legende"> {texte} </div>
    </div>
    
    );
  }
  
export default ImageDetails;
  