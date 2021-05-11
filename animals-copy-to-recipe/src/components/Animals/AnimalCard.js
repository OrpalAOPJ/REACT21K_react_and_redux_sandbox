import React from "react";
import { Link } from 'react-router-dom';

const AnimalsCard = ({ name, link, img, desc, aclass }) => {

  return (
    <div className="card">
      <img src={img} alt={name} />
      <h3>{name}</h3>
      <em>{aclass}</em>

      <p>{desc}</p>
      <Link to={`/${link}`}>Read more</Link>
      {/* <a href={link} target="_blank" rel="noopener noreferrer">Read more</a> */}
    </div>
  );
};

export default AnimalsCard;
