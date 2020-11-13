import React from 'react';
import { Loader } from 'semantic-ui-react';
import './Spinner.scss';

const Spinner = () => <Loader active inline="centered" className="spinner" size="massive" />;

export default Spinner;
