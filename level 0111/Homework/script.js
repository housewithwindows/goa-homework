
// Refresh data every 60 seconds
setInterval(() => {
    const crypto = document.getElementById('crypto-input').value.trim().toLowerCase();
    if (crypto) {
      fetchCryptoData(crypto);
    }
  }, 60000); 

  document.getElementById('search-btn').addEventListener('click', () => {
    const crypto = document.getElementById('crypto-input').value.trim().toLowerCase();
    if (crypto) {
      fetchCryptoData(crypto);
    } else {
      document.getElementById('crypto-info').innerHTML = 'Please enter a cryptocurrency name.';
    }
  });
  const renderCryptoData = (cryptoData) => {
    const { name, current_price, market_cap, price_change_percentage_24h } = cryptoData;
    document.getElementById('crypto-info').innerHTML = `
      <h2>${name}</h2>
      <p>Current Price: $${current_price.toFixed(2)}</p>
      <p>Market Cap: $${market_cap.toLocaleString()}</p>
      <p>24h Change: ${price_change_percentage_24h.toFixed(2)}%</p>
    `;
  };
// script.js
const fetchoCryptoData = async (crypto) => {
    try {
      const response = await fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${crypto}`);
      const data = await response.json();
  
      if (data.length > 0) {
        renderCryptoData(data[0]);
      } else {
        document.getElementById('crypto-info').innerHTML = 'Cryptocurrency not found.';
      }
    } catch (error) {
      console.error("Error fetching crypto data:", error);
      document.getElementById('crypto-info').innerHTML = 'Error fetching data. Please try again.';
    }
  };

// Refresh data every 60 seconds
setInterval(() => {
    const crypto = document.getElementById('crypto-input').value.trim().toLowerCase();
    if (crypto) {
      fetchCryptoData(crypto);
    }
  }, 60000); // 60000ms = 60 seconds

  document.getElementById('search-btn').addEventListener('click', () => {
    const crypto = document.getElementById('crypto-input').value.trim().toLowerCase();
    if (crypto) {
      fetchCryptoData(crypto);
    } else {
      document.getElementById('crypto-info').innerHTML = 'Please enter a cryptocurrency name.';
    }
  });
  const renderoCryptoData = (cryptoData) => {
    const { name, current_price, market_cap, price_change_percentage_24h } = cryptoData;
    document.getElementById('crypto-info').innerHTML = `
      <h2>${name}</h2>
      <p>Current Price: $${current_price.toFixed(2)}</p>
      <p>Market Cap: $${market_cap.toLocaleString()}</p>
      <p>24h Change: ${price_change_percentage_24h.toFixed(2)}%</p>
    `;
  };
// script.js
const fetchCryptoData = async (crypto) => {
    try {
      const response = await fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${crypto}`);
      const data = await response.json();
  
      if (data.length > 0) {
        renderCryptoData(data[0]);
      } else {
        document.getElementById('crypto-info').innerHTML = 'Cryptocurrency not found.';
      }
    } catch (error) {
      console.error("Error fetching crypto data:", error);
      document.getElementById('crypto-info').innerHTML = 'Error fetching data. Please try again.';
    }
  };

      