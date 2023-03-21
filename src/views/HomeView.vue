<template>
  <div class="home">
    <h1>All destinations</h1>
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

export default {
  name: "HomeView",
  components: {},
  data() {
    return {
      destinations: sourceData.destinations,
    };
  },
};
</script>
