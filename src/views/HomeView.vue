<template>
  <div class="tile" @click="goToGroups">
    <h2>Start Class</h2>
    <p>
      Start class
    </p>
  </div>
  <div class="tile" @click="goToStudentPage" >
    <h2>Student Page</h2>
    <p>
      Check students
    </p>
  </div>
  <div class="tile" @click="goToGroups">
    <h2>Groups Page</h2>
    <p>
    </p>
  </div>
  <div class="tile">
    <h2>About Page</h2>
    <p>
    </p>
  </div>
</template>

<script setup>
import {useRouter} from 'vue-router'

const router = useRouter();

const goToGroups = () => {
  router.push({ name: 'groups' });
};

const goToStudentPage = () => {
  router.push({ name: 'students' });
}
</script>
