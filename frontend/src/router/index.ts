import {createRouter, createWebHistory} from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
//import Signup from "../views/Signup.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [

      {
        path:"/home",
        name:"home",
        component: Home,
      },

     /* {
        path:"/leitura",
        name:"leitura",
        component: Leitura,
      },*/


      {
        path:"/login",
        name:"login",
        component: Login,
      },

    ],
});

export default router;