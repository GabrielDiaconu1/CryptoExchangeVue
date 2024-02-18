<template>
  <!-- Main component template -->
  <div>
    <!-- Navigation bar -->
    <nav>
      <ul class="navbar">
        <!-- Router links for navigation -->
        <li><router-link :to="{ name: 'Home' }">Home</router-link></li>
        <li><router-link :to="{ name: 'About' }">About</router-link></li>
      </ul>
      <!-- Router view to display the current route's component -->
      <router-view />
    </nav>
    <!-- Footer section -->
    <footer>
      <p>&copy; 2024 Live Crypto Exchange - Gabriel Diaconu</p>
    </footer>
  </div>
</template>

<style>
/* Styling for the component */

nav {
  margin-bottom: 20px; 
}

.navbar {
  list-style: none;
  padding: 0;
  display: flex;
}

nav {
  background-color: #333;
  color: goldenrod;
}

footer {
  background-color: #333;
  color: white;
  margin-top: 20px; 
}

nav,
footer {
  font-family: 'Arial', sans-serif;
  font-size: 16px;
  font-weight: 400;
}

.navbar li {
  margin-right: 15px;
}
</style>

<script setup>
/**
 * Author: Gabriel Diaconu
 * Date: February 2024
 * Description: Vue component for the navigation bar and footer.
 */

// Import necessary components from Vue Router
import { RouterView, RouterLink } from 'vue-router';
</script>
