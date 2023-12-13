
<template>
  <div>
    <h2>{{post.title}}</h2>
    <p>{{post.body}}</p>
  </div>
</template>

<script>
import db from '../firebase.js'
import {useRoute} from "vue-router";
import {toRaw} from "vue";

export default {
  data(){
    return {
      posts: [],
      post: {title: '', body: ''},
      pos: 0
    };
  },
  mounted() {
    this.pos = useRoute().path.substring(1).split('/')[1].valueOf();

    // Assuming you have a 'posts' collection
    db.collection('posts')
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            this.posts.unshift(doc.data());
          });
          this.post = toRaw(this.posts[this.pos]);
        });
  }
}

</script>

<style scoped>

</style>