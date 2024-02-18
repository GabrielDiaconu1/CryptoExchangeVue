<template>
  <!-- Main component template -->
  <div class="hello">
    <div id="crypto-container" v-for="(value, key) in cryptos">
      <!-- Display cryptocurrency information -->
      <span class="left">{{ key }}</span>
      <span class="right">${{ value.USD }}</span>
    </div>
  </div>
</template>

<script>
/**
 * Author: Gabriel Diaconu
 * Date: February 2024
 */

// Importing Axios for making HTTP requests
import axios from 'axios';

export default {
  name: 'hello',
  data: () => ({
    // Data properties for holding cryptocurrency information and errors
    cryptos: [],
    errors: [],
  }),
  created() {
    // Lifecycle hook: created() is called when the component is created

    // Fetch cryptocurrency data from the API
    axios
      .get(
        'https://min-api.cryptocompare.com/data/pricemulti?fsyms=ETH,DASH,BTC,LTC,XRP,ADA,USDT,DAI,MATIC,DOT,USDC,DOGE&tsyms=BTC,USD,EUR&api_key=a8cc1d195ab6fe344dc6c0e052d99ed5cf1cf3b19932b5646feb6d63535c6834'
      )
      .then((response) => {
        // Assign fetched data to the 'cryptos' property
        this.cryptos = response.data;
        console.log(response);
      })
      .catch((e) => {
        // Handle errors and store in the 'errors' property
        this.errors.push(e);
      });
  },
};
</script>

<style>
/* Styling for the component */

body {
  background: #f1f1f1;
}

div#crypto-container {
  background: white;
  width: 70%;
  margin: 0 auto 4px auto;
  padding: 1em;
  box-shadow: 1px 1px 0 lightgrey;
}

span.left {
  font-weight: bold;
}

span.right {
  float: right;
}
</style>
