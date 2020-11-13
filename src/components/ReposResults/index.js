// == Import npm
import React from 'react';
import PropTypes from 'prop-types';
import ReposResult from './ReposResult';

// == Import
import './ReposResults.scss';

// == Composant
const ReposResults = ({ repositories }) => (
  <div className="reposresult-list">
    {
      repositories.map((repo) => (
        <ReposResult
          key={repo.id}
          fullName={repo.full_name}
          image={repo.owner.avatar_url}
          {...repo}
        />
      ))
    }
  </div>
);

ReposResults.propTypes = {
  repositories: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

// == Export
export default ReposResults;
