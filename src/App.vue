<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import { useRoute } from 'vue-router'
import { computed, ref, watch } from 'vue'

const route = useRoute()
const isTransitioning = ref(false)

const isHome = computed(() => {
  return route.path === '/'
})

watch(isHome, () => {
  isTransitioning.value = true
  setTimeout(() => {
    isTransitioning.value = false
  }, 300)
})
</script>

<template>
  <div class="flex`">
    <header
      class="transition-all duration-300 rounded-2xl"
      :class="{
        'w-1/4': !isHome,
        'w-full pr-5': isHome,
        'border-4 border-blue-500': isTransitioning,
      }"
    >
      <div class="flex flex-wrap">
        <HelloWorld :msg="['Hello', 'Hi', 'こんにちは']" :isHome="isHome" />
        <p>{{ isHome }}</p>
        <nav>
          <RouterLink to="/">Home</RouterLink>
          <RouterLink to="/about">About</RouterLink>
        </nav>
      </div>
    </header>
    <RouterView />
  </div>
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.grid {
  transition: all 0.3s ease-in-out;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    /* padding-right: calc(var(--section-gap) / 2); */
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
