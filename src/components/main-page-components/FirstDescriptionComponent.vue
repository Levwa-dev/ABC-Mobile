<template>
    <section class="description-one">
        <p class="description-one__text">
            Профессиональный IQ-тест позволяет не только определить коэффициент вашего интеллекта, но и выработать список рекомендаций для повышения этого показателя.
        </p>
    </section>
</template>
  
<script>
export default {
name: 'FirstDescription',
}
</script>
  
<style scoped>
  .description-one {
    background-size: cover;
    background-position: center;
    background-repeat:no-repeat;
    background-image: url('../../assets/main-page/first-description-bg.png');
  }
  .description-one__text {
    position: relative;
    width: 240px;
    padding-top: 83px;
    padding-bottom: 40px;
    margin: 0 auto;
    text-align: center;
    font-family: 'Yeseva One', sans-serif;
    font-weight: 400;
    font-size: 18px;
    line-height: 23px;
    text-align: center;
    letter-spacing: 0.05em;
    color: #FFFFFF;
    background: radial-gradient(60.34% 48.29% at 48.75% 49.71%, #2950C2 0%, rgba(38, 91, 199, 0.96) 40.62%, rgba(39, 98, 187, 0) 85.42%)
  }
  .description-one__text::before {
    content: url('../../assets/main-page/quotation-marks-start.svg');
    position: absolute;
    top: 37.35px;
    left: -5px;
  }

  .description-one__text::after {
    content: url('../../assets/main-page/quotation-marks-end.svg');
    position: absolute;
    bottom: 17.35px;
    right: -5px;
  }

  @media screen and (min-width: 700px) {
    .description-one__text {
    position: relative;
    width: 340px;
    font-size: 22px;
    line-height: 28px;
  }
  }

</style>
  