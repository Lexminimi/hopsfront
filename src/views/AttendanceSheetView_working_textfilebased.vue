<template>
  <div>
      <div id="wrapper" v-if = data>
        <food-item
          v-for="x in data.name_list"
          :key="x.studentID.id"
          :studentname="x.studentID.name"
          :studentID="x.studentID.id"
          :studentPresence="x.studentID.id + '_' +x.presenceID.id"
          :presences="data2"
          />
      </div>
  </div>
</template>

<script>


const apiUrl = 'https://fischerb2.pythonanywhere.com/presences/';

export default {
  data() {
    return {
      data: null,
      data2: null,
    };
  },
  mounted() {
    this.fetchData();
    this.fetchPresence();
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
            //console.log(response)
            return response.json();

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
