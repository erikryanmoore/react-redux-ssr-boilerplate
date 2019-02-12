import PropTypes from 'prop-types';
import * as React from 'react';
import { Helmet as ReactHelmet } from 'react-helmet';

export const Helmet = (props) => {
  const {
    ogUrl,
    ogType,
    ogTitle,
    ogDescription,
    ogImage,
    ogVideo,
    title,
  } = props;

  const openGraph = [
    {
      property: 'url',
      content: ogUrl,
    },
    {
      property: 'type',
      content: ogType,
    },
    {
      property: 'title',
      content: ogTitle,
    },
    {
      property: 'description',
      content: ogDescription,
    },
    {
      property: 'image',
      content: ogImage,
    },
    {
      property: 'video',
      content: ogVideo,
    },
  ];

  const renderMeta = tags => tags.map(tag => (
    <meta
      key={tag.content}
      property={`og${tag.property}`}
      content={tag.content}
    />
  ));

  return (
    <ReactHelmet {...props}>
      <title>
        {title}
      </title>
      {renderMeta(openGraph)}
    </ReactHelmet>
  );
};

Helmet.propTypes = {
  ogDescription: PropTypes.string,
  ogImage: PropTypes.string,
  ogTitle: PropTypes.string.isRequired,
  ogType: PropTypes.string.isRequired,
  ogUrl: PropTypes.string,
  ogVideo: PropTypes.string,
  title: PropTypes.string.isRequired,
};

Helmet.defaultProps = {
  ogDescription: '',
  ogImage: '',
  ogUrl: '',
  ogVideo: '',
};
