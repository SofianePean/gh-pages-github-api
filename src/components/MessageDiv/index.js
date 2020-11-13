// == Import npm
import React from 'react';
import PropTypes from 'prop-types';
import { Message } from 'semantic-ui-react';

// == Import
import './Message.scss';

// == Composant
const MessageDiv = ({ nbDataRepo }) => {
  const getMessage = (valueDataRepos) => {
    let message = '';
    if (valueDataRepos <= 0) {
      message += 'Vous n\'avez pas encore effectué de recherche';
    }
    else {
      message += `La recherche a donné ${nbDataRepo} résultats`;
    }
    return message;
  };
  return (
    <div className="message">
      <Message className="message" visible>{getMessage(nbDataRepo)}</Message>
    </div>
  );
};

MessageDiv.propTypes = {
  nbDataRepo: PropTypes.arrayOf(

  ).isRequired,
};

// == Export
export default MessageDiv;
