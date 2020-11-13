// == Import npm
import React from 'react';
import { Icon } from 'semantic-ui-react';

// == Import
import './Header.scss';

// == Composant
const Header = () => (
  <div className="header">
    <Icon className="header-icon" size="huge" color="black" disabled name="github" />
    <h1 className="header-title">GitHub</h1>
  </div>
);

// == Export
export default Header;
