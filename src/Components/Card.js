import React from 'react';
import './Styles/Card.css'; 
import Button from './Button'; 
import Image from './Image';
import { Link } from 'react-router-dom';

const Card = ({
  type, 
  imgSrc, 
  companyName,
  companyType,
  title,
  position,
  description,
  linkHref, 
  linkText,
  target,
}) => {
  return (
    <div className={`card`}>
      {type === 'Smaller' && (
        <div className="smaller-card">
          <Image name={imgSrc} alt= "project-thumbnail" className="thumbnail"/>
          <p className="meta company-type">{companyType}</p>
          <h3 className="company-name">{companyName}</h3>
          <p className="position">{position}</p>
          <Button className="button--primary" href={linkHref} target={target}>{linkText}</Button>
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
            <Link className="link" to={linkHref}>{linkText}</Link>
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
            <Button className="button--primary" target={target} href={linkHref}>{linkText}</Button>
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
            <Button target={target} className="button--primary" href={linkHref}>{linkText}</Button>
          </div>
        </div>
      )}


    </div>
  );
};

export default Card;
