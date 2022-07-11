import { createWebHistory, createRouter } from "vue-router";
import Home from "./components/Home.vue";
import Detail from "./components/Detail.vue";
import Search from "./components/Search.vue";

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/detail/:id",
        name: "Detail",
        component: Detail,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
