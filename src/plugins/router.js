/**
 * Author: Gabriel Diaconu
 * Date: February 2024
 */

// Importing necessary modules from Vue Router and path
import { createRouter, createWebHistory } from 'vue-router';
import path from 'path';

// Define the routes for the application
const routes = [
  { path: '/', name: 'Home', component: () => import('@/views/Home.vue') },
  { path: '/about', name: 'About', component: () => import('@/views/About.vue') },
];

// Create the router instance with specified routes and history mode
const router = createRouter({
  routes,
  history: createWebHistory(),
});

// Export the router instance for use in the main Vue application
export default router;
