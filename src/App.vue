<template>
  <TheNavigation />
  <div class="container">
    <!-- <router-view
      v-slot="{ Component }"
      class="view left-sidebar"
      name="LeftSidebar"
    >
      <Transition name="fade" mode="out-in">
        <component :is="Component" :key="$route.path"></component>
      </Transition>
    </router-view> -->
    <router-view v-slot="{ Component }" class="main-view">
      <Transition name="fade" mode="out-in">
        <component :is="Component" :key="$route.path"></component>
      </Transition>
    </router-view>
  </div>
</template>
<script>
import TheNavigation from "@/components/TheNavigation.vue";

export default {
  components: {
    TheNavigation,
  },
};
</script>
<style lang="css">
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
/* .container {
  display: flex;
}

.left-sidebar {
  width: 20%;
}

.main-view {
  width: 100%;
} */
/* .moveUp-enter-active {
  animation: fadeIn 1s ease-in;
}
@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 0.5;
  }
  100% {
    opacity: 1;
  }
}

.moveUp-leave-active {
  animation: moveUp 0.3s ease-in;
}

@keyframes moveUp {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-400px);
  }
} */
</style>
