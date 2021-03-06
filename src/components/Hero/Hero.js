import React, { Fragment } from 'react';
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
    <article className="hero animated fadeIn" data-hero={name && name.toLowerCase()}>
      {
        id ?
          <Fragment>
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
              <h3 className="hero__comics">First comics</h3>
              <div className="hero__stories stories">
                { stories && stories.map(story =>  <Story key={story.id} {...story} /> ) }
              </div>
            </div>
          </Fragment>
        : <p className="warpper hero__not-found">Hero not found..</p>
      }      
    </article>
  );
}