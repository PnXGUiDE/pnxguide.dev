<template>
    <div>
        <div class="card" @click="isActive = true;">
            <div class="card-img">
                <img :src="image" loading="lazy" />
            </div>
            <div class="card-content">
                <h2>{{ title }}</h2>
                {{ content }}
            </div>
        </div>
        <div class="modal" v-if="isActive">
            <div class="backdrop" @click="isActive = false;"></div>
            <div class="content">
                <div class="flex">
                    <h2>Recommend Courses</h2>
                    <ul>
                        <li v-for="(course, index) in courses" :key="index">{{ course }}</li>
                    </ul>
                    <button class="button" @click="isActive = false;"><span>Close</span></button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'elective-card',
    props: ['image', 'title', 'content', 'courses'],
    data: function() {
        return {
            isActive: false
        }
    }
}
</script>

<style scoped>
.button {
  display: inline-block;
  border-radius: 4px;
  background-color: #f4511e;
  border: none;
  color: #FFFFFF;
  text-align: center;
  font-size: 18px;
  padding: 10px;
  width: 200px;
  transition: all 0.5s;
  cursor: pointer;
  margin: 5px;
}

.button span {
  cursor: pointer;
  display: inline-block;
  position: relative;
  transition: 0.5s;
}

.button span:after {
  content: '\00bb';
  position: absolute;
  opacity: 0;
  top: 0;
  right: -20px;
  transition: 0.5s;
}

.button:hover span {
  padding-right: 25px;
}

.button:hover span:after {
  opacity: 1;
  right: 0;
}

.modal {
    animation: fade-in .5s;
}

.modal .backdrop {
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    background-color: rgba(0, 0, 0, 0.4);
    z-index: 5;
    cursor: pointer;
}

.modal .content {
    position: fixed;
    top: 20%;
    left: 30%;
    width: 30%;
    background-color: white;
    z-index: 10;
    border-radius: 10px;
    padding: 30px 5%;
    overflow: scroll;
}

.flex {
    display: flex;
    height: 100%;
    justify-content: center;
    flex-direction: column;
}

.card {
  width: 300px;
  margin: 20px;
  border-radius: 10px;
  box-shadow: 5px 10px 2px rgba(0, 0, 0, 0.2);
}

.card:hover {
    transform: scale(1.05);
    transition: .5s;
    cursor: pointer;
    opacity: 0.8;
}

.card .card-img {
    height: 160px;
    overflow: hidden;
    object-fit: cover;
    border-radius: 10px 10px 0px 0px;
}

.card-img img {
    width: 300px;
}

.card .card-content {
    padding: 20px;
    height: 10em;
}
</style>