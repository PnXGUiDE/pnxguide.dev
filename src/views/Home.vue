<template>
  <div class="home">
    <div class="flex">
      <div class="col">
        <img class="ful-img" src="@/assets/bg1.jpg"/>
      </div>
      <div class="col">
        <div class="desc">
          <h1>I am Yuttapichai Kerdcharoen.</h1>
          <div>
            A computer science undergraduate who passionates in artificial intelligence and rhythm games.
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<style scoped>
.home {
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

.flex .desc {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 60px;
  padding-top: 40vh;
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
