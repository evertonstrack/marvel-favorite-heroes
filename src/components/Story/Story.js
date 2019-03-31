import React from 'react';
import './story.scss';

const hasImage = (url) => {
  return !url.includes('image_not_available');
}

export const Story = ({
  thumbnail,
  title
}) => {

  return (
    <div className="stories__item">
      <figure className="stories__item-image animated fadeIn delay-1s">
      { thumbnail && hasImage(thumbnail.path)
          ? <img src={`${thumbnail.path}.${thumbnail.extension}`} alt={title} />
          : <img src="/no-cover.jpg" alt={title} />
      }
      </figure>
      <h4 className="stories__item-title">{title}</h4>
    </div>
  );
}