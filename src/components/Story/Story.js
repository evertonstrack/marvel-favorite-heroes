import React from 'react';
import './story.scss';


export const Story = ({
  id,
  thumbnail,
  title
}) => {

  return (
    <div className="stories__item">
      <figure className="stories__item-image animated fadeIn delay-1s">
      { thumbnail 
          ? <img src={`${thumbnail.path}.${thumbnail.extension}`} alt={title} />
          : <img src="/no-cover.jpg" alt={title} />
      }
      </figure>
      <h3 className="stories__item-title">{title}</h3>
    </div>
  );
}