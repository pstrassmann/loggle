import React, { useRef, useState } from 'react';
import M from 'materialize-css/dist/js/materialize.min';
import { connect } from 'react-redux';
import { registerUser } from '../../actions/authActions';

const RegisterModal = ({ registerUser }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');

  const registerModal = useRef(0);

  const onSubmit = (event) => {
    event.preventDefault();
    if (name === '' || email === '' || password === '' || password2 === '') {
      M.toast({ html: 'Please enter full name of technician', classes: 'red' });
    } else {
      registerUser({ name, email, password });
      const modalInstance = M.Modal.getInstance(registerModal.current);
      modalInstance.close();
    }
  };

  return (
    <div ref={registerModal} id="register-modal" className="modal">
      <div className="modal-content">
        <h4 style={{ marginBottom: '2rem' }}>Register Tech Team</h4>
        <div className="row">
          <div className="input-field">
            <input
              type="text"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <label htmlFor="name" className="active">
              Username
            </label>
          </div>
          <div className="row">
            <div className="input-field">
              <input
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <label htmlFor="email" className="active">
                Email
              </label>
            </div>
          </div>
          <div className="row">
            <div className="input-field">
              <input
                type="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <label htmlFor="password" className="active">
                Password
              </label>
            </div>
          </div>
          <div className="row">
            <div className="input-field">
              <input
                type="password"
                name="password2"
                value={password2}
                onChange={(e) => setPassword2(e.target.value)}
              />
              <label htmlFor="password2" className="active">
                Confirm Password
              </label>
            </div>
          </div>
        </div>
      </div>
      <div className="modal-footer center">
        <button
          type="button"
          className="btn-flat grey lighten-2 waves-effect modal-close hover-effect"
          style={{ marginRight: '0.8rem' }}
        >
          Cancel
        </button>
        <button
          type="submit"
          onClick={onSubmit}
          className="waves-effect btn background-primary-light hover-effect"
          style={{ marginRight: '1rem' }}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default connect(null, { registerUser })(RegisterModal);
