/* eslint-disable import/no-extraneous-dependencies */
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getdetails } from '../redux/crypto/crypto';

const Details = () => {
  const cryptosdetail = useSelector((state) => state.cryptoData);
  const dispatch = useDispatch();
  const { id } = useParams();
  useEffect(() => {
    dispatch(getdetails(id));
  },
  [dispatch, id]);

  const filteredCoins = cryptosdetail.crypto.filter((coin) => (coin.show === true));

  return (
    <div className="details-container">
      {filteredCoins.map((coin) => (
        <>
          <div key={coin.id} className="container-card">
            <img src={coin.icon} alt={coin.name} />
          </div>
          <table key={coin.id}>
            <tbody>
              <tr>
                <th>Rank</th>
                <td>{coin.rank}</td>
              </tr>
              <tr>
                <th>Name</th>
                <td>{coin.name}</td>
              </tr>
              <tr>
                <th>Symbol</th>
                <td>{coin.symbol}</td>
              </tr>
              <tr>
                <th>Price</th>
                <td>{coin.price}</td>
              </tr>
              <tr>
                <th>Market Cap</th>
                <td>{coin.marketCap}</td>
              </tr>
              <tr>
                <th>Volume</th>
                <td>{coin.volume}</td>
              </tr>
              <tr>
                <th>Price change / hours</th>
                <td>{coin.pricechange1h}</td>
              </tr>
              <tr>
                <th>Price Change/ day</th>
                <td>{coin.pricechange1d}</td>
              </tr>
              <tr>
                <th>Price Change/week</th>
                <td>{coin.pricechange1w}</td>
              </tr>
              <tr>
                <th>Available Supply</th>
                <td>{coin.availableSupply}</td>
              </tr>
              <tr>
                <th>Total Supply</th>
                <td>{coin.totalSupply}</td>
              </tr>
              <tr>
                <th>Reference</th>
                <td>
                  <a href="{coin.url}">
                    Web address
                  </a>

                </td>
              </tr>
            </tbody>
          </table>

        </>
      ))}

    </div>
  );
};

export default Details;
