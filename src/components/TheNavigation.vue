<template>
  <div id="nav">
    <AppLink id="logo" to="/">Travel App</AppLink>
    <AppLink
      v-for="destination in destinations"
      :key="destination.id"
      :to="{
        name: 'destination',
        params: { id: destination.id, slug: destination.slug },
      }"
    >
      {{ destination.name }}
    </AppLink>
    <AppLink :to="{ name: 'protected' }">Dashboard</AppLink>
    <AppLink to="https://google.com">Google</AppLink>
  </div>
</template>

<script>
import sourceData from "@/data.json";

export default {
  name: "TheNavigation",
  data() {
    return {
      destinations: sourceData.destinations,
    };
  },
};
</script>

<style lang="css" scoped>
#nav .travel-active-link {
  color: yellow;
  border-bottom: 2px solid yellow;
}
</style>
