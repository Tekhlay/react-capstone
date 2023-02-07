/* eslint-disable import/no-extraneous-dependencies */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { FaArrowAltCircleRight } from 'react-icons/fa';
import { fetchCrypto } from '../redux/crypto/crypto';

const Home = () => {
  const coins = useSelector((state) => state.cryptoData);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCrypto());
  }, [dispatch]);

  return (
    <header className="home-container">
      <div className="home-serch">
        <input type="text" placeholder="Search" />
      </div>

      <div className="home-list">
        {coins.isLoding && <h1>Loading...</h1>}
        {coins.isEror && <h1>Something went wrong...</h1>}
        {coins.crypto.map((coin) => (
          <div key={coin.id} className="container-card">
            <h1>{coin.name}</h1>
            <img src={coin.icon} alt={coin.name} />
            <h1>{coin.price}</h1>
            <NavLink to="/"><FaArrowAltCircleRight /></NavLink>

          </div>
        ))}
      </div>
    </header>
  );
};

export default Home;
