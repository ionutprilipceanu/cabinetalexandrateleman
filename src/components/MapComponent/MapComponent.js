import React from 'react';
import "./MapComponent.css"

 const MapComponent=()=>{
    return (
        <div className="google-map-code">
          <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2712.1570646014266!2d27.578051615984865!3d47.17436132572883!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40cafb6285b127ef%3A0x442ceab476019550!2sIn%20incinta%20Copy%20Center%2C%20Strada%20Theodor%20Pallady%208%2C%20Ia%C8%99i!5e0!3m2!1sro!2sro!4v1606906784161!5m2!1sro!2sro" 
          
          title="This is a unique title" 
          width="90%" 
          height="200vh" 
          frameBorder="0"
          allowFullScreen="" 
          aria-hidden="false"  
          style={{
            border:0,
            margin:'5%',

          }} 
           
          ></iframe>
        </div>
    );
 }
 export default MapComponent