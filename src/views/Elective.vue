<template>
  <div class="elective">
    <div class="flex">
      <img class="half-img" src="@/assets/bg3.jpg" loading="lazy" />
      <div class="desc">
        <h1>CS-KMITL Elective Course</h1>
        <div>
          This page is all about the elective courses offered by CS-KMITL during my undergraduate years.
          I had enrolled for <i>20 elective courses</i> when I was studying at CS-KMITL, actually.
          Therefore, I hope this will help every CS-KMITL student make more precise and well-organized decisions on their career paths.
        </div>
        <br/>
        <div>
          I decide to group all elective courses into 6 categories depending on the world's current career paths as follows.
          <div class="flex-col">
            <elective-card v-for="(elective, index) in electives" :key="index" :image="elective.image" :title="elective.title" :content="elective.content" :courses="elective.courses" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ElectiveCard from '../components/ElectiveCard.vue'
export default {
  name: 'Elective',
  components: {
    ElectiveCard
  },
  data: function() {
    return {
      electives: [
        {
          image: require("@/assets/sub1.png"),
          title: "Theoretical Computer Science",
          content: "For students who want to understand about Computer Science in depth",
          courses: [
            "05506026 Digital Image Processing",
            "05506038 Parallel Algorithms",
            "05506045 Machine Learning",
            "05506072 Web Mining",
            "05506088 Computer Vision",
            "05506119 Image Mining",
            "05506105 Principle of Programming Languages",
            "05506213 Cryptography Algorithms",
            "05506226 Blockchain : Concepts and Application Development",
            "05506228 Neural Network and Deep Learning"
          ]
        },
        {
          image: require("@/assets/sub2.jpg"),
          title: "Software Engineering",
          content: "For students who want to become a decent software developer",
          courses: [
            "05506059 Software Requirement Specification and Management",
            "05506060 Component-Based Software Development",
            "05506063 Software Project Management",
            "05506071 Web Programming",
            "05506077 Enterprise Computing",
            "05506080 XML Application Development",
            "05506111 Information Systems Analysis and Design",
            "05506230 Design Patterns in Object-Oriented Programming"
          ]
        },
        {
          image: require("@/assets/sub3.jpg"),
          title: "Networking and Cybersecurity",
          content: "For students who want to break or enhance programmers' logics",
          courses: [
            "05506032 Network Management",
            "05506033 Network Security",
            "05506044 System Security"
          ]
        },
        {
          image: require("@/assets/sub4.jpg"),
          title: "User Experience",
          content: "For students who want to make users feel heartening",
          courses: [
            "05506163 Designing Interactive Systems",
            "05506221 Mixed Reality"
          ]
        },
        {
          image: require("@/assets/sub5.jpg"),
          title: "Multimedia and Games",
          content: "For students who want to use their imaginations to create something different",
          courses: [
            "05506086 Computer Game Programming",
            "05506095 Artificial Intelligence for Computer Games"
          ]
        },
        {
          image: require("@/assets/sub6.jpg"),
          title: "Data Engineering and Data Science",
          content: "For students who know the values of data in the world",
          courses: [
            "05506069 Advanced Database System",
            "05506074 Data Warehouse Design and Implementation",
            "05506157 Data Analysis for Industry",
            "05506212 Data Mining Techniques",
            "05506218 Big Data Analysis",
            "05506219 Spatial Databases and GIS Applications",
            "05506225 Business Analytics in Data Warehouse using R Language",
            "05506229 Programming Predictive Models using Python",
            "0550623X Graph Based Databases"
          ]
        }
      ]
    }
  }
}
</script>

<style scoped>
.elective {
  animation: fade-in 1s;
}

.flex {
  display: flex;
  flex-direction: column;
}

.flex-col {
  display: flex;
  flex-direction: row;
  padding: 20px;
  justify-content: center;
  flex-wrap: wrap;
}

.flex .half-img {
  height: 40vh;
  width: 100vw;
  object-fit: cover;
}

.flex .desc {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 60px;
}

@keyframes blinking {
  0% { color: white; }
  50% { color: white; }
  100% { color: #2c3e50; }
}

.blink {
  animation: blinking .5s linear infinite alternate;
}
</style>
