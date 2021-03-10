<template>
    <div id="app">
        <!-- <router-view name="header"></router-view> -->
    
            <fade-transition origin="center" mode="out-in" :duration="250">
                <router-view/>
            </fade-transition>
<!--  
        <router-view name="footer"></router-view>  -->
    </div>
</template>




<script>
import { FadeTransition } from "vue2-transitions";

export default {
  components: {
    FadeTransition
  }
};
</script>
