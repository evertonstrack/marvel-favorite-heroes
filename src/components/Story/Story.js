import React from 'react';
import './story.scss';

const getImageUrl = ({ path, extension}) => {

  return !path.includes('image_not_available')
            ? `${path}/portrait_uncanny.${extension}`
            : '/no-cover.jpg';
}

export const Story = ({
  thumbnail,
  title
}) => {

  return (
    <div className="stories__item">
      <figure className="stories__item-image animated fadeIn delay-1s">
        <img src={getImageUrl(thumbnail)} alt={title} />
      </figure>
      <h4 className="stories__item-title">{title}</h4>
    </div>
  );
}