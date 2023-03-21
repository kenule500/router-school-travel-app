<template>
  <div>
    <section v-if="destination" class="destination">
      <div>
        <h2>{{ destination.name }}</h2>
        <GoBack />
        <div class="destination-details">
          <img :src="`/images/${destination.image}`" :alt="destination.name" />
          <p>{{ destination.description }}</p>
        </div>
      </div>
    </section>

    <section class="experiences">
      <h2>Top experiences in {{ destination.name }}</h2>
      <div class="cards">
        <RouterLink
          v-for="experience in destination.experiences"
          :key="experience.slug"
          :to="{
            name: 'experience',
            params: { experienceSlug: experience.slug },
          }"
        >
          <ExperienceCard :experience="experience" />
        </RouterLink>
      </div>
      <router-view />
    </section>
  </div>
</template>

<script>
import GoBack from "@/components/GoBack.vue";
import ExperienceCard from "@/components/ExperienceCard.vue";
import sourceData from "@/data.json";
import { RouterLink, RouterView } from "vue-router";

export default {
  components: {
    ExperienceCard,
    RouterLink,
    RouterView,
    GoBack,
  },
  props: {
    id: { type: Number, required: true },
  },
  computed: {
    destination() {
      return sourceData.destinations.find(
        (destination) => destination.id === this.id
      );
    },
  },
};
</script>

<style lang="scss" scoped></style>
