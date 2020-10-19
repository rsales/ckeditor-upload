<template>
  <div id="posts">
    <h1>Posts</h1>
    <b-list-group class="all-posts">
      <card-post />
    </b-list-group>

    <!-- <router-link to="/new">Criar novo post</router-link> -->
  </div>
</template>

<script>
import { CardPost } from '../components/cards';

export default {
  name: 'PagePosts',
	components: {
		CardPost,
	},  
  data: function () {
    return {
      message: "Hello Vue!"
    }
  }
}
</script>