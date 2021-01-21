import React from "react";
import Times from "../assets/svg/Times";

export default function Modal({ photo, closeModal }) {
  return (
    <div className='modal'>
      <div className='modal__close'>
        <Times className='times' onClick={closeModal} />
      </div>
      <div className='modal__content'>
        <div className='modal__content-img-container'>
          <img src={photo.urls.regular} alt={photo.alt_description} />
          <div className='bottom'>
            <h5>{photo.user.name}</h5>
            <p>{photo.user.location || "unknown"}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
