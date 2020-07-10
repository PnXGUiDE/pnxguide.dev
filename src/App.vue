<template>
  <div id="app">
    <div id="nav">
      <div class="item">
        <router-link to="/">🏠 Home</router-link>
      </div>
      <div class="item">
        <router-link to="/about">👨‍💻 About</router-link>
      </div>
      <div class="item">
        <router-link to="/project">💼 Project</router-link>
      </div>
      <div class="item">
        <router-link to="/activity">🚀 Activity</router-link>
      </div>
      <div class="item">
        <router-link to="/elective">📝 CSKMITL Elective</router-link>
      </div>
    </div>
    <router-view/>
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Kanit:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Rubik:ital,wght@0,300;0,400;0,500;0,700;0,900;1,300;1,400;1,500;1,700;1,900&display=swap');

#app {
  font-family: Rubik, Kanit, Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

@keyframes fly-left {
  0% { right: -200px; }
  85% { right: 35px; }
  100% { right: 30px; }
}

#nav {
  position: fixed;
  bottom: 30px;
  right: 30px;
  text-align: right;
  animation: fly-left 1.2s;
  z-index: 100;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
  line-height: 40px;
  font-size: 20px;
  background-color: white;
  padding: 2px 4px;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

#nav .item:hover {
  transition: 1s;
  transform: scale(0.95);
}

@keyframes fade-in {
  0%    { opacity: 0%; }
  100%  { opacity: 100%; }
}
</style>
