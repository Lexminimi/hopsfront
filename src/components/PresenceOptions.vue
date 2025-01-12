

<template>
  <fieldset>
    <legend v-if="label">{{ label }}</legend>
    <div v-for="(option, index) in options" :key="option.text"
    >
      <label :for="id + index">

      <input
        :id="id + index"
        :name= "studentID"
        type="radio"
        :value= "studentID + '_' + option.id"
        :class="inputClass"
        :required="required"
        v-model = "alma"
        @change="updateValue(studentID + '_' + option.id)"
      />
      {{ option.title }}</label>
    </div>
  </fieldset>
</template>


<script>
export default {
  data() {
    return {
      alma: '',
      inpValSubmitted: 'Not submitted yet'
    }
  },
  methods: {
    updateValue(value) {
      console.log("meghivva : " + value);
    },
  },
  model: {
    event: "change",
  },
  props:  {
    studentID: {
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
