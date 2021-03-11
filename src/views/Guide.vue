<template>
  <div class="about">
    <main class="wrapper">
      <div class="container">
        <div class="row">
          <aside class="column column-25 sidebar">
            <ul class="list__group">
              <template v-if="view">
                <li v-for="(i, info) in info" :key="i.id">
                  <a
                    class="button button-clear list__group--item"
                    :href="i.link"
                  >
                    {{ i.title }}
                  </a>
                </li>
              </template>
              <li v-else>Saat ini masih dalam tahap pengembangan</li>
            </ul>
          </aside>
          <article class="column content">
            <!-- <alert bg="success" bold="Danger" msg="Alert ini untuk pesan sukses"></alert> -->
            <template v-if="view">
              {{ info }}
            </template>
            <p v-else>Saat ini masih dalam tahap pengembangan</p>
          </article>
        </div>
      </div>
    </main>
  </div>
</template>
