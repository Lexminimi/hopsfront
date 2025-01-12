

<template>
  <div class="tile">

    <h2>{{ studentname }}</h2>

  </div>
  <presence-type
    id="yesNoQuestion"
    :options="presences"
    label="Attendance"
    :studentID = "studentID"
    :studentPresence = "studentPresence"
  />
</template>



<script>
export default {
  props: ['studentname', 'studentID', 'presences','studentPresence']
};
</script>
