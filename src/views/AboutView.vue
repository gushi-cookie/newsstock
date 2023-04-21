<template>
  <main class="main__about">
    <h1>This is an about page of the NewsStock project.</h1>
    <p class="fs-5">
      Project utilizes GDELT 2.0 API to get fresh news from Internet. The goal is to practice Vue3 with TypeScript, and some Bootstrap.
    </p>
    <div class="card main__about-ref">
      <a href="/news-website.png" target="_blank">
        <img class="card-img-top" src="/news-website.png">
      </a>
      <div class="card-body">
        <h5 class="card-title">Reference of this project.</h5>
        <p class="card-text">Since the reference was found in image format, i had to improvise in some cases.</p>
      </div>
    </div>
  </main>
</template>

<style>
.main__about {
  padding: 30px;
}
.main__about-ref {
  width: 700px;
  margin: 0 auto;
}
</style>