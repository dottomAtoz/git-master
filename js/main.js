Vue.config.ignoredElements = [/^ion-/]

Vue.component('navbar-component', {
   template: `<nav class="">
      <div class="container nav">
         <div class="nav__brand">
            <a href="index.html">
               <img src="img/logo_git-master.png" alt="brand">
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
   </nav> `,
   data() {
      return {
         porto: [
            'https://www.behance.net/gallery/103789891/Git-Master-Guide',
            'https://medium.com/@tommyalhamra', 'https://github.com/imotD/git-master'
         ],
      }
   },
})

Vue.component('footer-component', {
   template: `<footer>
   Made with 🔥 by <a :href="link[0]">imotD.</a>
   Licensed under the <a :href="link[1]">MIT License.</a>
   </footer> `,
   data() {
      return {
         link: ['https://www.instagram.com/tommyalhamra/',
            'https://github.com/imotD/git-master/blob/master/license.md'
         ]
      }
   },
})

Vue.component('alert', {
   props: ['bg', 'bold', 'msg'],
   template: `<div class="alert alert-bg" role="alert">
   <b>{{bold}}</b>
   {{msg}}</div>`,
})

const Home = {
   template: `
   <section id="main">
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
            <img src="img/logo_git-master.png" alt="brand logo">
         </div>
      </main>
      <div class="btn">
         <router-link to="/guide">Guide</router-link>
      </div>
   </section>
   `
}

const Guide = {
   template: '<div>Guide Page</div>'
}

const routes = [{
      path: '/',
      component: Home
   },
   {
      path: '/guide',
      component: Guide
   }

]

const router = new VueRouter({
   mode: 'history',
   routes // short for `routes: routes`
})

const app = new Vue({
   el: '#app',
   router,
   data() {
      return {
         info: '',
         view: true,
         post: [{
               id: 1,
               title: 'My Journey with Vue'
            },
            {
               id: 2,
               title: 'My Diary with Vue'
            }
         ],
      }
   },
   mounted() {
      axios
         .get('https://my-json-server.typicode.com/imotD/git-master/db')
         .then(response => {
            this.info = response.data.info
         })
         .catch(error => {
            console.log(error)
            this.errored = true
            this.view = false
         })
         .finally(() => this.loading = false)
   },
})