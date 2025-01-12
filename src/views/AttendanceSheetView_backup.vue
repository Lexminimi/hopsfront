<template>
  <div>
    <button @click="fetchPresence">ccccccc</button>
    <button @click="fetchData">Fetch Data</button>
      <div class="tile"
           v-if = "data" v-for="(d, index) in data.name_list"
           @click="goToStudentPage(d.studentID)" >

        <h2>{{ d.studentID.name }} {{d.studentID.id}}</h2>
        <h3>{{ d.presenceID.title }}</h3>
        <p v-if="data2" v-for="d2 in data2">
          <input type="radio"   :id="`radio-${d2.id}`"
                 :value="d2.id" :v-model= "`radio${d.studentID.id}`" >
          <label :for="`radio-${d2.id}`">{{d2.title}}</label>
        </p>
      </div>
  </div>
</template>

<script>

const apiUrl = 'http://127.0.0.1:8000/presences/';

export default {
  data() {
    return {
      data: null,
      data2: null,
      radio2: 2,
    };
  },
  methods: {
    async fetchData() {
      const response = await fetch("/data.json");
      this.data = await response.json();

    },
    async fetchPresence() {
      console.log('akiiii')
        fetch(apiUrl, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Basic ${btoa("reka:B1a9l8i8")}` // Correctly interpolates the encoded credentials
          }
        })
          .then((response) => {
            //this.data = response.json(); // Bind the fetched data to the Vue instance
            return response.json();
            console.log("meg lett hivva")
            //return this.data
          })
          .then((data)=>{
            this.data2 = data;
          })
          .catch((error) => {
            console.error('Error fetching data:', error);
          });

    }
  }
};
</script>
