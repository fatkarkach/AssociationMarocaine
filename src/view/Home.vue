<template>
<Navbar></Navbar>
  <header>

    <!-- This div is  intentionally blank. It creates the transparent black overlay over the video which you can modify in the CSS -->
    <div class="overlay"></div>

    <!-- The HTML5 video element that will create the background video on the header -->
    <video playsinline="playsinline" autoplay="autoplay" muted="muted" loop="loop">
      <source src="~@/assets/images/video_back.mp4" type="video/mp4">
    </video>

    <!-- The header content -->
    <div class="container h-100">
      <div class="d-flex h-100 text-center align-items-center">
        <div class="w-100 text-white">
          <h1 class="display-3">Associations Marocaines</h1>
          <p class="lead mb-0">Une platforme pour gérer les association de région Drâa-Tafilalet</p>
          <br>
          <a class="btn btn-outline-light btn-lg rejoine" href="#!" role="button">Rejoignez-nous</a>
        </div>
      </div>
    </div>
  </header>

  <!-- Page section example for content below the video header -->
  <section class="section-services">
    <div class="container">
          <div class="row justify-content-center text-center">
            <div class="col-md-10 col-lg-8">
              <div class="header-section">
                <h2 class="title">Nos <span>partenaires</span></h2>
                <p class="description">There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some injected humour</p>
              </div>
            </div>
          </div>
      <sliderassoc></sliderassoc>
    </div>
  </section>
  xdcftgyhujikowxdcfvgbhijoklxdcfvgbhjn,k
</template>

<script>
import Navbar from "../components/Navbar";
import sliderassoc from "@/components/sliderassoc";
export default {
  name: `Home`,
  components: {
    Navbar,
    sliderassoc,

  },
}
</script>

<style scoped>
header {
  position: relative;
  height: 88vh;
  min-height: 25rem;
  width: 100%;
  overflow: hidden;
}

header video {
  position: absolute;
  top: 50%;
  left: 50%;
  min-width: 100%;
  min-height: 100%;
  width: auto;
  height: auto;
  z-index: 0;
  -ms-transform: translateX(-50%) translateY(-50%);
  -moz-transform: translateX(-50%) translateY(-50%);
  -webkit-transform: translateX(-50%) translateY(-50%);
  transform: translateX(-50%) translateY(-50%);
}

header .container {
  position: relative;
  z-index: 2;
}

header .overlay {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: black;
  opacity: 0.5;
  z-index: 1;
}

/* Media Query for devices withi coarse pointers and no hover functionality */

/* This will use a fallback image instead of a video for devices that commonly do not support the HTML5 video element */

@media (pointer: coarse) and (hover: none) {
  header {
    background: url("~@/assets/images/slide3.jpg") black no-repeat center center scroll;
  }

  header video {
    display: none;
  }
}

a,p,h1,h2,h3,h4,ul {
  margin: 0;
  padding: 0;
}

.section-services {
  padding-top: 110px;
  padding-bottom: 120px;
  background-color: #211f24;
  color: #fff;
  border-bottom-left-radius: 80px 80px;
  border-bottom-right-radius: 80px 80px;
}

.section-services .header-section {
  margin-bottom: 35px;
}

.section-services .header-section .title {
  position: relative;
  margin-bottom: 40px;
  padding-bottom: 25px;
  text-transform: uppercase;
  font-weight: 700;
}

.section-services .header-section .title:before {
  content: "";
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 140px;
  height: 1px;
  background-color: #f70037;
}

.section-services .header-section .title:after {
  content: "";
  position: absolute;
  bottom: -1px;
  left: 50%;
  transform: translateX(-50%);
  width: 45px;
  height: 3px;
  background-color: #f70037;
}

.section-services .header-section .title span {
  color: #f70037;
}
.section-services{
  background-color: #24252a;
  box-shadow: 0 0 10px 0 rgba(0,0,0,.1);
}

.section-services {
  padding: 40px 40px 25px;
  border-bottom: 2px solid #1d1e23;
}

.section-services .single-service .part-1 .title {
  font-size: 17px;
  font-weight: 700;
  letter-spacing: 0.02em;
  line-height: 1.8em;
}

.section-services{
  padding: 30px 40px 40px;
}
.section-services .single-service .part-2 a {
  color: #fff;
  font-size: 14px;
  text-decoration: none;
}
.rejoine{
  padding: 10px;
}
h2.title {
  color: white;
}
.section-services .header-section {
 color: white;
}
h2.title {
  margin-top: 40px;
}
</style>