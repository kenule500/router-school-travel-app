<template>
  <div class="card">
    <img :src="`/images/${experience.image}`" :alt="experience.name" />
    <span class="card_text">
      {{ experience.name }}
    </span>
  </div>
</template>

<script>
export default {
  name: "ExperienceCard",
  props: {
    experience: { type: Object, required: true },
  },
};
</script>

<style lang="scss" scoped></style>
