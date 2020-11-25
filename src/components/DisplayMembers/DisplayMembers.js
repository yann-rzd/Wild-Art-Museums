import React from 'react';
import { AiFillLinkedin } from 'react-icons/ai';
import { FaGithub } from 'react-icons/fa';
import { PropTypes } from 'prop-types';
import './DisplayMembers.css';

const DisplayMembers = ({ avatar, name, linkedin, github, lastname }) => {
  return (
    <div className="diplayMembersContainer">
        <div className="aboutUsContent">
            <div className="aboutUsContent-overlay"></div>
              <img src={avatar} alt={name} />
              <div className="aboutUsContent-details fadeIn-top fadeIn-right">
                <a href={linkedin} target="_blank" rel="noopener noreferrer"><AiFillLinkedin style={{ color: 'black' }} size={45}/></a>
                <br/>
                <br/>
        <a href={github} target="_blank" rel="noopener noreferrer"><FaGithub style={{ color: 'black' }} size={45}/></a>
                <h3 className="aboutUsCardName">{lastname}</h3>
                <h3 className="aboutUsCardLastName">{name}</h3>
            </div>
        </div>
      </div>
  );
};

DisplayMembers.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  linkedin: PropTypes.string.isRequired,
  github: PropTypes.string.isRequired,
  lastname: PropTypes.string.isRequired
};

export default DisplayMembers;
