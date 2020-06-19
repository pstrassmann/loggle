import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteTech } from '../../actions/techActions';
import M from 'materialize-css/dist/js/materialize.min';

const TechItem = ({ tech, deleteTech }) => {
  const handleDelete = () => {
    deleteTech(tech.id);
    M.toast({
      html: `Removed ${tech.firstName} ${tech.lastName}`,
      classes: 'orange',
    });
  };
  return (
    <li className="collection-item">
      {`${tech.firstName} ${tech.lastName}`}
      <button type="button" className="secondary-content button-icon-only" onClick={handleDelete}>
        <i className="material-icons grey-text">delete</i>
      </button>
    </li>
  );
};

TechItem.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  tech: PropTypes.object.isRequired,
  deleteTech: PropTypes.func.isRequired,
};

export default connect(null, { deleteTech })(TechItem);
