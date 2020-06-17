import React from 'react';
import PropTypes from 'prop-types';

const TechItem = ({ tech }) => (
  <li className="collection-item">
    {`${tech.firstName} ${tech.lastName}`}
    <a href="#!" className="secondary-content">
      <i className="material-icons grey-text">delete</i>
    </a>
  </li>
);

TechItem.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  tech: PropTypes.object.isRequired,
};

export default TechItem;