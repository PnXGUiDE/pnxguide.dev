<template>
  <div class="about">
    <div class="flex">
      <div class="col scrollable">
        <div class="desc">
          <h1>About</h1>
          <div>
            I am a Ph.D. student in Electrical and Computer Engineering at Carnegie Mellon University - CMKL.
          </div>
          <br/>
          <div>
            <strong>Education</strong>
            <ul>
              <li>I pursued B.Sc. in Computer Science degree at Faculty of Science, King Mongkut's Institute of Technology Ladkrabang (KMITL), in 2016 - 2020.</li>
              <ul>
                <li>GPA 3.98/4.00 (First Class Honors, Gold Medal)</li>
                <li>Completed the degree with 169 credits (33 additional credits from the degree's requirements)</li>
                <li>"CSKMITL Certificate Blockchain System: The Development of an Information System Storing Students' Certificates Using Blockchain Technology" as a senior project (Advisor: Asst.Prof. Kridsada Budsara)</li>
              </ul>
            </ul>
          </div>
          <div>
            <strong>Research</strong>
              <ul>
                <li>
                  Ongoing...
                </li>
                <!--
                <li>
                  <b>🧭 Spatio-Temporal Indexing Strategies in NoSQL Databases</b><br>
                  <i>J. Kulsawasd, K. Yuttapichai</i>
                  <ul>
                    <li>Working on proposing suggestions and recommendations of spatio-temporal indexing by exploting NoSQL databases' benefits</li>
                  </ul>
                </li>
                <br>
                <li><b>🎠 3DRUGS: 3D Reconstruction from Google Street View</b><br>
                  <i>T. Witchaya, K. Yuttapichai, C. Harit</i>
                  <ul>
                    <li>Working on proposing an approach for reconstructing a 3D model using Google Street View images</li>
                  </ul>
                </li>
                          <li><b>📗 Publicly Academic Achievement Data Blockchain</b><br>
                  <i>B. Kridsada, K. Yuttapichai, S. Wandee</i>
                  <ul>
                    <li>Proposed design and implementation guidelines for developing a public blockchain system aiming for storing a public academic achievement data</li>
                  </ul>   
                </li>
                <br>
                <li><b>🚘 Thai Automatic License Plate Recognition</b><br>
                  <i>K. Yuttapichai</i>
                  <ul>
                    <li>Working on an improvement</li>
                    <li>Proposed an approach for recognizing Thai license plate numbers accurately and automatically using a state-of-the-art deep learning technique</li>
                  </ul> 
                </li>
                -->
              </ul>
          </div>
          <br/>
          <div>
            <strong>Interest Field</strong>
            <br/>
            <ul>
              <li><b>Deep Learning and Neural Networks</b> e.g., Deep Unsupervised Models, Deep Reinforcement Learning, Graph Neural Network</li>
              <li><b>Appiled Artificial Intelligence</b> e.g., Computer Vision, Natural Language Understanding, Speech Recognition</li>
              <li><b>Immersive Technologies</b> e.g., Augmented Reality, Virtual Reality, Telepresence</li>
              <li><b>Computer Games</b> e.g., Game Design, Game Development, Level Design</li>
              <li><b>Security and Privacy</b> e.g., Applied Cryptography, Accountable AI/ML, Privacy-Preserving System</li>
              <li><b>Big Data Management and Architecture</b></li>
              <li><b>Distributed System</b></li>
              <li><b>Self-Driving System</b> e.g., Self-Driving Database</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="col">
        <img class="ful-img" src="@/assets/bg4.jpg" loading="lazy"/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'About',
  data: function() {
    return {
      isActive: true
    }
  },
  methods: {
    toggleCollapsible() {
      this.isActive = !this.isActive;
    }
  }
}
</script>

<style scoped>

.about {
  animation: fade-in 1s;
}

.flex {
  display: flex;
  flex-direction: row;
}

.flex .col {
  height: 100vh;
  width: 50vw;
}

.flex .ful-img {
  height: 100%;
  width: 100%;
  object-fit: cover;
}

.flex .logo {
  text-align: center;
}

.flex .desc {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 60px;
}

.scrollable {
  overflow: scroll;
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
