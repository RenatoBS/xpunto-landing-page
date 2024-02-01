import React from "react";
import './Videoapresentacao.css';
import PropTypes from "prop-types";

const YoutubeEmbed = ({ embedId }) => (
  <div className="video-container">
    <div className="video-responsive">
      <iframe
        width="853"
        height="480"
      src={'https://www.youtube.com/embed/UgLkLDlRpdQ'}
      frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded youtube"
      />
    </div>
  </div>
);

YoutubeEmbed.propTypes = {
  embedId: PropTypes.string.isRequired
};

export default YoutubeEmbed;