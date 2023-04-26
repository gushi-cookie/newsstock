<template>
  <main class="main__about">
    <h1>This is an about page of the NewsStock project.</h1>
    <p>
      Project utilizes GDELT 2.0 API to get fresh news from Internet. The goal is to practice Vue3 with TypeScript, and some Bootstrap.
    </p>
    <div class="card main__about-ref">
      <a href="/images/news-website.png" target="_blank">
        <img class="card-img-top" src="/images/news-website.png">
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
.main__about > * {
  min-width: 300px;
}
.main__about p {
  font-size: 1.25em;
}
.main__about-ref {
  width: 65%;
  margin: 0 auto;
}


@media (max-width: 500px) {
.main__about h1 {
  font-size: 1.2em;
}
.main__about p {
  font-size: 1em;
  text-align: justify;
}
}
</style>