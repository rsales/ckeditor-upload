import Vue from "vue";
import VueRouter from "vue-router";
import Posts from "../views/Posts.vue";
import Post from "../views/Post.vue";
import PostCreate from "../views/Create.vue";
import PostEdit from "../views/Edit.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Posts",
    component: Posts
  },
  {
    path: "/posts/:id",
    name: "Post",
    component: Post
  },
  {
    path: "/posts/new",
    name: "PostCreate",
    component: PostCreate
  },
  {
    path: "/posts/:id/edit",
    name: "PostEdit",
    component: PostEdit
  }
];

const router = new VueRouter({
  mode: "history",
  routes
});

export default router;
