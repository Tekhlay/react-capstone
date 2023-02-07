/* eslint-disable max-len */
/* eslint-disable no-undef */
/* eslint-disable import/no-extraneous-dependencies */
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { FaArrowAltCircleRight } from 'react-icons/fa';
import { fetchCrypto } from '../redux/crypto/crypto';

const Home = () => {
  const [search, setSearch] = useState('');
  const coins = useSelector((state) => state.cryptoData);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCrypto());
  }, [dispatch]);
  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const filteredCoins = coins.crypto.filter((coin) => (
    coin.name.toLowerCase().includes(search.toLowerCase())
  ));

  return (
    <header className="home-container">
      <div className="home-serch">
        <input
          type="text"
          value={search}
          placeholder="Search Coins..."
          onChange={handleSearch}
        />
      </div>

      <div className="home-list">
        {coins.isLoding && <h1>Loading...</h1>}
        {coins.isEror && <h1>Something went wrong...</h1>}
        {!filteredCoins.length && <h1><em>No related coins found!</em></h1>}
        {filteredCoins.map((coin) => (
          <div key={coin.id} className="container-card">
            <h1>{coin.name}</h1>
            <img src={coin.icon} alt={coin.name} />
            <h1>{coin.price}</h1>
            <NavLink to={`/details/${coin.id}`}>
              <FaArrowAltCircleRight />
            </NavLink>
          </div>
        ))}
      </div>
    </header>
  );
};

export default Home;
