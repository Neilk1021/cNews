<script setup>
import Post from './Post.vue'
</script>

<template>
  <h1>c-News</h1>
  <ul>
    <h2>Recent Articles</h2>
    <li v-for="post in posts" :key="posts.id">
      <router-link :to="{ path: '/post/' + post.id }">{{post.title}}</router-link>
    </li>
  </ul>
</template>

<script>

import db from '../firebase.js'
export default {
  data(){
    return {
      posts:[]
    };
  }, mounted() {

    // Assuming you have a 'posts' collection
    db.collection('posts')
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            this.posts.push(doc.data());
          });
        });
  }
}
</script>

<style scoped>

</style>