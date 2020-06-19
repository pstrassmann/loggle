import React from 'react';
import { connect } from 'react-redux';

const TechSelectOptions = ({ techs }) => (techs && techs.map((tech) => (
  <option key={tech.id} value={`${tech.firstName} ${tech.lastName}`}>
    {`${tech.firstName} ${tech.lastName}`}
  </option>
)));

const mapStateToProps = (state) => ({
  techs: state.tech.techs,
});

export default connect(mapStateToProps)(TechSelectOptions);
