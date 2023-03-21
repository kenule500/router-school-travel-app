<template>
  <div class="home">
    <h1>All destinations</h1>
    <button @click="triggerRouterError">Trigger router error</button>
    <button @click="addDynamicRoute">Add dynamic route</button>
    <RouterLink to="/dynamic">visit dynamic route</RouterLink>
    <div class="destinations">
      <RouterLink
        v-for="destination in destinations"
        :key="destination.id"
        :to="{
          name: 'destination',
          params: { id: destination.id, slug: destination.slug },
        }"
      >
        <h2>{{ destination.name }}</h2>
        <img :src="`/images/${destination.image}`" :alt="destination.name" />
      </RouterLink>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import sourceData from "@/data.json";
import { isNavigationFailure, NavigationFailureType } from "vue-router";

export default {
  name: "HomeView",
  components: {},
  data() {
    return {
      destinations: sourceData.destinations,
    };
  },
  methods: {
    async triggerRouterError() {
      const navigationfalure = await this.$router.push("./");
      if (
        isNavigationFailure(navigationfalure, NavigationFailureType.duplicated)
      ) {
        console.log(navigationfalure.to);
        console.log(navigationfalure.from);
      }
    },
    addDynamicRoute() {
      this.$router.addRoute({
        name: "dynamic",
        path: "/dynamic",
        component: () => import("@/views/LoginView.vue"),
      });
    },
  },
};
</script>
