<template>
  <div class="about">
    <div class="flex">
      <div class="col scrollable">
        <div class="desc">
          <h1>About</h1>
          <div>
            I'm studying <i>Computer Science</i> at Faculty of Science, King Mongkut's Institute of Technology Ladkrabang (KMITL).
          </div>
          <br/>
          <img src="@/assets/bg5.jpg" style="width: 100%; height: 200px; object-fit: cover;" />
          <br/>
          <div>
            <strong>🔥 Extracurricular Work 🔥</strong>
  
              <ul>
                <li><b>Head of Staff, Project Coordinator</b> at CS KMITL Camp 10th</li>
                <li><b>AI Developer</b> at ACME International (Thailand) Ltd.</li>
                <li><b>Frontend Developer</b> at International Labour Organization</li>
                <li><b>Teaching Assistant</b> at King Mongkut's International Demonstration School</li>
                <li><b>Club President</b> of Science's Startup Club</li>
                <li><b>Head</b> of CS-INFINITE Group (also organized React for Newbie, CS-KMITL Code Arcade 2019, CS-KMITL Programming Bootcamp 2020)</li>
              </ul>
   
          </div>
          <br/>
          <div>
            <strong>🎲 Interest Field 🎲</strong>
            <br/>
            <ul>
              <li><b>Machine Perception</b> (e.g., Scent Recognition, Taste Recognition, Speech Recognition)</li>
              <li><b>Image Processing and Computer Vision</b> (e.g., 3D Reconstruction, Object Detection)</li>
              <li><b>Deep Learning</b> (e.g., Deep Generative Models, Deep Reinforcement Learning)</li>
              <li><b>Mixed Reality</b></li>
              <li><b>Indexing Strategies</b> (e.g., Spatio-Temporal Indexes)</li>
              <li><b>Game Design and Development</b> (e.g., Level Designing, Storytelling)</li>
              <li><b>Cryptography</b> (e.g., Zero-Knowledge Proof)</li>
              <li><b>Cybersecurity</b> (e.g., Threat Intelligence, Antivirus, IDS, NGFW)</li>
              <li><b>Event-Driven Architecture and FaaS (Function-as-a-Service)</b></li>
              <li><b>Quantum Computing</b></li>
              <li><b>Distributed Ledger Technology</b></li>
            </ul>
          </div>
        </div>
      </div>
      <div class="col">
        <img class="ful-img" src="@/assets/bg4.jpg"/>
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
