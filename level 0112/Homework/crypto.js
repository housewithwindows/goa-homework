const fetchCryptoData = async (crypto) => {
    try {
      const response = await fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${crypto}`);
      const data = await response.json();
  
      if (data.length > 0) {
        renderCryptoData(data[0]);
      } else {
        document.getElementById("cryptoDisplay").innerHTML = "Cryptocurrency not found!";
      }
    } catch (error) {
      console.error("Error fetching crypto data:", error);
      document.getElementById("cryptoDisplay").innerHTML = "Error fetching data!";
    }
  };
  