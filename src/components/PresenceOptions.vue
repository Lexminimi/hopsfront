<script setup>
import { ref } from 'vue'

const checked_attendance = ref[{}]
</script>

<template>
  <fieldset >
    <legend v-if="label">{{ label }}</legend>
    <div class = "presence-option-container">
      <label v-for="(option, index) in options" :key="option.text" :for="groupID + '_' + studentID + '_' + option.id">
        <input
          :id = "groupID + '_' + studentID + '_' + option.id"
          :name = "studentID"
          type="radio"
          :value= "groupID + '_' + studentID + '_' + option.id"
          :class="inputClass"
          :required="required"
          :v-model = "checked_attendance"
          :checked="(studentID + '_' + option.id) === studentPresence"
          @change="updateValue(groupID + '_' + studentID + '_' + option.id)"
        />
        {{ option.title }}</label>

    </div>
  </fieldset>
</template>


<script>
const apiUrl = 'https://fischerb2.pythonanywhere.com/';

export default {
  data() {
    return {
      alma: '',
      inpValSubmitted: 'Not submitted yet',
      parts: []
    }
  },
  methods: {
    updateValue(value) {
      this.parts = value.split("_");
      this.fetchData()
// Extract the three numbers into separate variables
    },
    async fetchData() {
      console.log("meghivva : " + this.parts[0] +'...' + this.parts[1] +'...');
      fetch(apiUrl + 'update_attendance/'+ this.parts[0] +'/' + this.parts[1] + '/' + this.parts[2] + '/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Basic ${btoa("reka:B1a9l8i8")}` // Correctly interpolates the encoded credentials
        }
      })
        .catch((error) => {
          console.error('Error fetching data:', error);
        });


    }
  },
  model: {
    event: "change",
  },
  props:  {
    groupID: {
      type: String
    },
    studentID: {
      type: String
    },
    studentPresence: {
      type: String
    },
    id: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      required: true,
    },
    value: {
      type: [String, Number, Boolean, Object],
      default: null,
    },
    options: {
      type: [Array],
      required: true,
    }
  }
};
</script>
