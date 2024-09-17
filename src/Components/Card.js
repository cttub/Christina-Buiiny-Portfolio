import React from 'react';
import './Styles/Card.css'; 
import Button from './Button'; 
import Image from './Image';
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
          <Image name={imgSrc} alt= "project-thumbnail" className="thumbnail"/>
          <p className="meta company-type">{companyType}</p>
          <h3 className="company-name">{companyName}</h3>
          <p className="meta position">{position}</p>
          <Button className="button--primary" href={linkHref}>{linkText}</Button>
        </div>
      )}

      {type === 'Small' && (
        <div className="small-card">
          <div className="top">
          <Image name={imgSrc} alt= "project-thumbnail" className="thumbnail"/>
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
            <Image name={imgSrc} alt= "project-thumbnail" className="thumbnail"/>
            <p className="meta company-name">{companyName}</p>
          </div>
          <div className="bottom">
            <p className="meta companyType">{companyType}</p>
            <h3 className="title">{title}</h3>
            <p className="description">{description}</p>
            <Button className="button--primary" href={linkHref}>{linkText}</Button>
          </div>
        </div>
      )}
       {type === 'Big Horizontal' && (
        <div className="big-card-horizontal">
          <div className="image">
            <Image name={imgSrc} alt= "project-thumbnail" className="thumbnail"/>
          </div>
          <div className="information">
            <p className="meta companyType">{companyType}</p>
            <h3 className="title">{title}</h3>
            <p className="description">{description}</p>
            <p className="company-name"><i>{companyName}</i></p>
            <Button className="button--primary" href={linkHref}>{linkText}</Button>
          </div>
        </div>
      )}


    </div>
  );
};

export default Card;
