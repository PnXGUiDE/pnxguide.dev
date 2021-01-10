<template>
  <div class="home">
    <div class="flex">
      <div class="col">
        <img class="ful-img" src="@/assets/bg1.jpg" loading="lazy" />
      </div>
      <div class="col">
        <div class="desc">
          <div>
            <b>I am Yuttapichai Kerdcharoen</b>, a computer science graduate who passionates in artificial intelligence, distributed system, and game design.
          </div>
          <img class="logo-img" src="@/assets/logo.png" loading="lazy" />
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

.flex .logo-img {
  height: 200px;
  width: 200px;
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
