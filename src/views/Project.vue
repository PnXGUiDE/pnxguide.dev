<template>
  <div class="project">
    <div class="flex">
      <img class="half-img" src="@/assets/bg3.jpg" loading="lazy" />
      <div class="desc">
        <h1>Project</h1>
        <div>
          
        </div>
        <br/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Project',
  data: function() {
    return {
    }
  }
}
</script>

<style scoped>
.project {
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
