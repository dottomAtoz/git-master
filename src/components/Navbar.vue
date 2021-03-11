<template>
  <div>
    <nav class="fixed-nav">
      <div class="container nav">
        <div class="nav__brand">
          <a href="index.html">
            <img src="img/logo_git-master.png" alt="brand" />
          </a>
        </div>
        <div class="nav__link">
          <div class="nav__link--item">
            <a :href="porto[0]" target="_blank" rel="noopener">
              <ion-icon name="logo-behance"></ion-icon>
            </a>
          </div>
          <div class="nav__link--item">
            <a :href="porto[1]" target="_blank" rel="noopener">
              <ion-icon name="logo-medium"></ion-icon>
            </a>
          </div>
          <div class="nav__link--item">
            <a :href="porto[2]" target="_blank" rel="noopener">
              <ion-icon name="logo-github"></ion-icon>
            </a>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    // msg: String,
  },
  data() {
    return {
      porto: [
        "https://www.behance.net/gallery/103789891/Git-Master-Guide",
        "https://tommyalhamra.medium.com/git-master-the-reminder-guide-5851af851e74",
        "https://github.com/imotD/git-master",
      ],
    };
  },
};
</script>
