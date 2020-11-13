// == Import npm
import React, { useState } from 'react';
import axios from 'axios';
import SearchBar from '../SearchBar';
import MessageDiv from '../MessageDiv';
import ReposResults from '../ReposResults';
import Header from '../Header';
import Spinner from '../Spinner';


// == Import
import './GithubAPI.scss';

// == Composant
const GithubAPI = () => {
  const [dataRepos, setdataRepos] = useState([]);
  const [nbDataRepo, setNbDataRepo] = useState([]);
  const [loading, setLoading] = useState(false);
  const url = 'https://api.github.com/search/repositories?q=';

  const getDataFromAPI = (valueInput) => {
    setLoading(true);
    axios
      .get(url + valueInput)
      .then((response) => {
        setdataRepos(response.data.items);
        setNbDataRepo(response.data.total_count);
        setLoading(false);
      })
      .catch((e) => {
        setLoading(false);
        console.log('Error message', e.message);
      });
  };
  const onSubmit = (valueInput) => {
    getDataFromAPI(valueInput);
  };

  return (
    <div className="app">
      <Header />
      <SearchBar onSubmit={onSubmit} />
      <MessageDiv nbDataRepo={nbDataRepo} />
      {loading && <Spinner />}
      {!loading && (
        <ReposResults repositories={dataRepos} />
      )}
    </div>
  );
};

// == Export
export default GithubAPI;
