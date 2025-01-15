<template>
  <button @click="goBack" class="back-button">
    Back
  </button>
</template>

<script>
export default {
  methods: {
    goBack() {
      if (window.history.length > 1) {
        this.$router.back(); // Go back to the previous route
      } else {
        this.$router.push('/'); // Fallback to the home page or a default route
      }
    },
  },
};
</script>

<style>
.back-button {
  background-color: #007bff;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
}
.back-button:hover {
  background-color: #0056b3;
}
</style>


