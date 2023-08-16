<template>
  <Header />
  <div class="property-listings">
    <Card v-for="property in properties" :key="property.id" :home="property" @click="$router.push(`property-details/${property.id}`)"/>
  </div>
</template>

<script>
import Card from '@/components/Card.vue';
import propertyData from '../../data/db.json'
import Header from '@/components/Header.vue';

export default {
  components: {
    Card,
    Header,
  },
  data() {
    return {
      properties: []
    };
  },
  mounted() {
    this.properties = propertyData
  }
}
</script>

<style>
  .property-listings {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    grid-gap: 30px;
    margin: 30px;
  }
</style>