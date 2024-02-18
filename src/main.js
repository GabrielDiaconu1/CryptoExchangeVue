/**
 * Author: Gabriel Diaconu
 * Date: February 2024
 */

// Import necessary functions and components from Vue
import { createApp } from 'vue';
import App from '@/App.vue';  // Main application component
import router from '@/plugins/router';  // Vue Router instance
import '@/style.css';  // Global styles

// Create a Vue app instance, use Vue Router, and mount it to the '#app' element
createApp(App).use(router).mount('#app');
