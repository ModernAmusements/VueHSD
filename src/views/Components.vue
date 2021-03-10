<template>
    <div class="main">
        <WDesign></WDesign>
        <WArchitektur></WArchitektur>
        <Footer></Footer>
        <MasterClose></MasterClose>
        <InfoOne></InfoOne>
    </div>
</template>
<script>
import WDesign from "./components/WDesign";
import WArchitektur from "./components/WArchitektur";
import Footer from "./components/Footer";
import MasterClose from "./components/MasterClose";
import InfoOne from "./components/InfoOne";
export default {
  name: "components",
  components: {
    WDesign,
    WArchitektur,
    Footer,
    MasterClose,
    InfoOne
  }
};
</script>
