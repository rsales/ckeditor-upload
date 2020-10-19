import Vue from "vue";
import VueRouter from "vue-router";
import Posts from "../views/Posts.vue";
import PostCreate from "../views/Create.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Posts",
    component: Posts
  },
  {
    path: "/new",
    name: "PostCreate",
    component: PostCreate
  }
];

const router = new VueRouter({
  mode: "history",
  routes
});

export default router;
