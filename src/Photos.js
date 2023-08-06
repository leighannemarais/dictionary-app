import React from "react";
import "./Photos.css";

export default function Photos(props) {
  if (props.photos) {
    return (
      <section className="Photos">
        <div className="row">
          {props.photos.map(function (photo, index) {
            <div className="col-4" key={index}>
              <a href={photo.src.original} target="_blank" rel="no-referrer">
                return <img src={photo.src.landscape} className="img-fluid" />;
              </a>
            </div>;
          })}
        </div>
      </section>
    );
  } else {
    return null;
  }
}