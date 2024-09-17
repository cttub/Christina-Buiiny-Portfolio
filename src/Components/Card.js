import React from 'react';
import './Styles/Card.css'; 
import Button from './Button'; 

const Card = ({
  type, 
  imgSrc, 
  companyName,
  companyType,
  title,
  position,
  description,
  linkHref, 
  linkText 
}) => {
  return (
    <div className={`card`}>
      {type === 'Smaller' && (
        <div className="smaller-card">
          <img src={imgSrc} alt={title} className="thumbnail" />
          <p className="meta company-type">{companyType}</p>
          <h3 className="company-name">{companyName}</h3>
          <p className="meta position">{position}</p>
          <Button className="button--primary" href={linkHref}>{linkText}</Button>
        </div>
      )}

      {type === 'Small' && (
        <div className="small-card">
          <div className="top">
            <img src={imgSrc} alt={title} className="thumbnail" />
            <p className="meta company-name">{companyName}</p>
          </div>
          <div className="bottom">
            <p className="meta position">{position}</p>
            <h5 className="title">{title}</h5>
            <a  className="link" href={linkHref}>{linkText}</a>
          </div>
        </div>
      )}
      {type === 'Big Vertical' && (
        <div className="big-card-vertical">
          <div className="top">
            <img src={imgSrc} alt={title} className="thumbnail" />
            <p className="meta company-name">{companyName}</p>
          </div>
          <div className="bottom">
            <p className="meta position">{companyType}</p>
            <h5 className="title">{title}</h5>
            <p>{description}</p>
            <a  className="link" href={linkHref}>{linkText}</a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Card;
