
<template>
  <div>
    <h2>{{posts.title}}</h2>
    <p>{{posts.body}}</p>
  </div>
</template>

<script>
import db from '../firebase.js'

export default {
  data(){
    return {
      posts: {title: '', body:''}
    };
  }, mounted() {

    // Assuming you have a 'posts' collection
    db.collection('posts')
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            this.posts = (doc.data());
          });
        });
  }
}

</script>

<style scoped>

</style>