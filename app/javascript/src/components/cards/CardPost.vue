<template>
  <b-list-group-item :to="{ name: 'Post', params: { id: post.id }}" class="card-post flex-column align-items-start">
    <div class="d-flex w-100 justify-content-between">
      <h5 class="mb-1">{{ post.title }}</h5>
      <small>{{ dayjs(post.created_at).format('DD MMM') }}</small>
    </div>

    <p class="mb-1">
      {{ post.description }}
    </p>
  </b-list-group-item>
</template>

<script>
export default {
  name: 'CardPost',
  props: {
    post: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      dayjs: require('dayjs')
    }
  }
}
</script>