

<template>
  <div class="tile">

    <h2>{{ studentname }}{{ studentID }}</h2>

  </div>
  <presence-type
    id="yesNoQuestion"
    :options="presences"
    label="Attendance"
    :studentID = "studentID"
  />
</template>



<script>
export default {
  props: ['studentname', 'studentID', 'presences']
};
</script>
