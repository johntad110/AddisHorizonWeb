<template>
  <Header />
  <div class="news-page">
    <div v-for="newsItem in newsData" :key="newsItem.id" class="news-item">
      <div class="news-header">
        <h2>{{ newsItem.title }}</h2>
        <img :src="getImages(newsItem.image)" alt="News Image" class="news-image">
      </div>
      <div class="news-content">
        <div v-for="paragraph in newsItem.content" :key="paragraph" class="news-paragraph">
          <p>{{ paragraph }}</p>
        </div>
      </div>
      <div class="news-footer">
        <div class="author-info">
          <div class="author-avatar">
            <img :src="getImages(newsItem.image)" alt="Author Avatar">
          </div>
          <div class="author-details">
            <p class="author-name">{{ newsItem.name }}</p>
            <p class="author-position">{{ newsItem.position }}</p>
            <p class="author-email">{{ newsItem.email }}</p>
            <p class="author-phone">{{ newsItem.phone }}</p>
          </div>
        </div>
        <div class="news-metadata">
          <p class="news-date">{{ newsItem.date }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header.vue';
import newsData from '../../data/news.json'

export default {
  components: {
    Header,
  },
  data() {
    return {
      newsData: []
    }
  },
  mounted() {
    this.fetchNewsData();
  },
  methods: {
    fetchNewsData() {
      console.log(newsData)
      this.newsData = newsData;
    },
    getImages(name) {
      return require(`@/assets/${name}`)
    }
  }
}
</script>

<style>
.news-page {
  margin: 5%;
}

.news-item {
  margin-bottom: 40px;
  padding-bottom: 20px;
  border-bottom: 1px solid #eee;
}

.news-header {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
}

.news-header h2 {
  margin-bottom: 10px;
}

.news-image {
  width: 100%;
  max-width: 400px;
  margin-right: 20px;
}

.news-content {
  font-size: 16px;
  line-height: 1.6;
}

.news-paragraph {
  margin: 20px;
}

.news-paragraph p {
  text-align: left;
}

.news-footer {
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 12px;
  color: #888;
}

.author-info {
  display: flex;
  align-items: center;
}

.author-avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  overflow: hidden;
  margin-right: 10px;
}

.author-avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.author-name {
  font-weight: bold;
  margin-bottom: 5px;
}

.author-position {
  margin-bottom: 5px;
}

.author-email,
.author-phone {
  color: #555;
  margin-bottom: 2px;
}

.news-metadata {
  text-align: right;
}

.news-date {
  color: #555;
}

/* Responsive Styles */

@media (max-width: 768px) {
  .news-header {
    flex-direction: column;
    align-items: flex-start;
  }

  .news-image {
    margin-right: 0;
    margin-bottom: 10px;
  }
}
</style>
