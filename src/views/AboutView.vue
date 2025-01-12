<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
  <div v-for="f in fact" :key="f.id">
    {{f.name}}
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
