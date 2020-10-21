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
// Vue.component('main-component', {
//    props: ['num'],
//    template: `   
//       <article class="column content">                  
//          ${{info[{{num}}].title}}
//       </article>`,
//    data() {
//       return {

//       }
//    },
// })

const app = new Vue({
   el: '#app',
   data() {
      return {
         info: '',
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
         })
         .finally(() => this.loading = false)
   },
})