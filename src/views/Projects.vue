<template>
  <Header />
  <div class="projects">
    <h1>Our Projects</h1>
    <div class="project-list">
      <div v-for="project in projects" :key="project.id" class="project-card">
        <img :src="project.image" alt="Project Image" class="project-image" />
        <div class="project-details">
          <h2>{{ project.name }}</h2>
          <p>{{ project.description }}</p>
          <p class="project-location">Location: {{ project.location }}</p>
          <p class="project-status">Status: {{ project.status }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header.vue';

export default {
  components: {
    Header,
  },
  data() {
    return {
      projects: [
        {
          "id": 1,
          "name": "Skyview Apartments",
          "description": "Skyview Apartments is a luxurious residential complex located in the heart of Addis Ababa. Offering breathtaking views of the city skyline, these modern apartments are designed to provide a comfortable and convenient living experience. Each unit features spacious rooms, high-end finishes, and state-of-the-art amenities. Enjoy the vibrant city life while residing in this prestigious address.",
          "location": "Addis Ababa",
          "status": "Under Construction",
          "image": require('@/assets/project1.jpg')
        },
        {
          "id": 2,
          "name": "Lakefront Villas",
          "description": "Nestled along the tranquil shores of Lake Hawassa, Lakefront Villas offer a unique blend of luxury and serenity. These exquisite villas are designed to provide the ultimate lakeside living experience. With private gardens, swimming pools, and panoramic views of the lake, residents can enjoy a peaceful retreat amidst nature. Experience the beauty of Hawassa while indulging in the finest amenities and modern comforts.",
          "location": "Hawassa",
          "status": "Pre-construction",
          "image": require('@/assets/project2.jpg')
        },
        {
          "id": 3,
          "name": "Riverfront Residences",
          "description": "Experience the epitome of luxury living at Riverfront Residences in Bahir Dar. Situated along the scenic Blue Nile River, these elegant residences offer a sophisticated lifestyle like no other. Immerse yourself in the breathtaking views, lush landscapes, and tranquil ambiance. With meticulously designed interiors, world-class facilities, and a range of recreational amenities, Riverfront Residences redefine the concept of modern living.",
          "location": "Bahir Dar",
          "status": "Completed",
          "image": require('@/assets/project3.jpg')
        }
      ]
    };
  }
};
</script>

<style scoped>
.projects {
  max-width: 800px;
  margin: 0 auto;
}

.projects h1 {
  font-size: 4em;
  margin: 30px;
}

.project-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
  margin: 50px;
}

.project-card {
  border: 1px solid #ccc;
  padding: 20px;
  transition: all 0.3s ease;
}

.project-card:hover {
  border-radius: 8px;
  background-color: #cfba94;

}

.project-card:hover img {
  transform: scale(1.025);
}

.project-image {
  width: 100%;
  max-height: 200px;
  object-fit: cover;
}

.project-details {
  margin-top: 10px;
}

h1 {
  text-align: center;
}

h2 {
  margin-bottom: 5px;
}

p {
  margin-top: 5px;
}

.project-location {
  font-weight: bold;
}

.project-status {
  font-weight: bold;
}
</style>