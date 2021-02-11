<template>
  <footer>
    Contact Us <span class="orangeText">|</span> Privacy Policy<br />
    <span class="orangeText">&copy;</span> <strong><em>DRIVEN</em></strong> Auto
    Group <span class="orangeText">|</span> All Rights Reserved
    <span class="orangeText">|</span> ABN: 20150264127<br />
    MD: 22325 <span class="orangeText">|</span> AU: 41689
    <span class="orangeText">|</span> MRB: 5353
  </footer>
</template>

<script>
export default {
  name: "Footer"
};
</script>

<style scoped lang="scss">
$primary: rgb(224, 65, 38);
$secondary: rgb(49, 49, 49);
$light: rgb(190, 190, 190);
$highlight: rgb(255, 255, 255);

footer {
  height: auto;
  width: 100%;
  padding: 10px 10px;
  background-color: $secondary;
  color: $light;
  font-size: x-small;
  font-family: "Gotham", sans-serif;
  line-height: 18px;
}
</style>
