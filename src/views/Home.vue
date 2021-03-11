<template>
  <div class="home">
    <section class="front">
      <nav>
        Support me on :
        <div class="nav-item">
          <a href="https://www.behance.net/dottomstyleart" target="_blank">
            <ion-icon name="logo-behance"></ion-icon>
            <span>Behance</span>
          </a>
        </div>
        <div class="nav-item">
          <a href="https://medium.com/@tommyalhamra" target="_blank">
            <ion-icon name="logo-medium"></ion-icon>
            <span>Medium</span>
          </a>
        </div>
        <div class="nav-item">
          <a href="https://github.com/imotD" target="_blank">
            <ion-icon name="logo-github"></ion-icon>
            <span>Github</span>
          </a>
        </div>
      </nav>
      <main>
        <div class="brand">
          <img src="img/logo_git-master.png" alt="brand logo" />
        </div>
      </main>
      <div class="btn">
        <router-link to="/guide">Guide</router-link>
      </div>
    </section>
  </div>
</template>

<script>
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: "Home",
  components: {
    // HelloWorld
  },
  // mounted() {
  //   axios
  //     .get("https://my-json-server.typicode.com/imotD/git-master/db")
  //     .then((response) => {
  //       this.info = response.data.info;
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //       this.errored = true;
  //       this.view = false;
  //     })
  //     .finally(() => (this.loading = false));
  // },
};
</script>
