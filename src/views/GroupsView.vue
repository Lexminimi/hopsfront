<template>
    <div class="tile"
         v-if = "data" v-for="(group, index) in data"
         @click="goToStudentPage(group.id)" >
      <h2>{{ group.name }}</h2>
    </div>
  <div class = "loading-msg" v-else>Data is loading ...</div>
</template>
<script>
import {useRouter} from 'vue-router'

const router = useRouter();




const apiUrl = 'https://fischerb2.pythonanywhere.com/groups/';

export default {
  data() {
    return {
      data: null
    };
  },
  methods: {
    goToStudentPage(groupId) {
      // Ensure the router is working correctly
      this.$router.push({ name: "create-attend", params: { groupId } });
    },
  },
  mounted() {
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
         //console.log("meg lett hivva")
        //return this.data
      })
      .then((data)=>{
        this.data = data;
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }
};
</script>
