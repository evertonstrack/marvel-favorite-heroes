import React from 'react';
import { Story } from '../Story';
import './hero.scss';

export const Hero = ({
  id,
  name,
  image,
  description,
  stories,
  urlWiki,
}) => {

  return (
    <article className="hero animated fadeIn">
      <div className="warpper">
        <div className="hero-container">
          <figure className="hero__image animated fadeInLeft delay-1s">
            <img src={image} alt={name} />
            <legend>{name}</legend>
          </figure>
          <div className="hero__infos animated fadeInRight delay-1s">
            <h3 className="hero__infos-title">{name}</h3>
            <p className="hero__infos-description">{description}</p>
            <a className="hero__infos-link" href={urlWiki} target="_blank" rel="noopener noreferrer">
              See more
            </a>
          </div>
        </div>
      </div>
      <div className="warpper">
        <div className="hero__stories stories">
          { stories && stories.map(story =>  <Story key={story.id} {...story} /> ) }
        </div>
      </div>
    </article>
  );
}