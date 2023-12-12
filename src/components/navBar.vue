<script >
export default {
  name: 'NavBar',
};
</script>

<template>
  <nav> x
    <router-link to="/">Home</router-link>
    <router-link to="/Articles">Articles</router-link>
    <router-link to="/about">About</router-link>
    <router-link to="/contact">Contact</router-link>
  </nav>
</template>

<style scoped>
nav {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: #333;
  padding: 15px;
  display: flex;
  justify-content: space-around;
  z-index: 1000; /* Adjust the z-index as needed */
}

router-link {
  color: white;
  text-decoration: none;
}
</style>