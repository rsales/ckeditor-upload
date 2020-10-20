<template>
  <div id="posts">
    <h1>Posts</h1>
    <b-list-group class="all-posts">
      <card-post
        v-for="post in posts"
				:key="post.id"
        :post="post"
      />
    </b-list-group>

    <!-- <router-link to="/new">Criar novo post</router-link> -->
  </div>
</template>

<script>
import { PostDataService } from '../services';
import { CardPost } from '../components/cards';

export default {
  name: 'PagePosts',
	components: {
		CardPost,
	},  
  data() {
    return {
      posts: [],
      errors: []
    }
  },
  created() {
    this.retrievePosts();
  },
  methods: {
    retrievePosts() {
      PostDataService.getAll()
        .then(response => {
          this.posts = response.data
        })
        .catch(e => {
          this.errors.push(e)
        });
    }
  }
}
</script>