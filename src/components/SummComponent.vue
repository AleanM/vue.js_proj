<template>
   <div class="money-component">
    <h1>Итого к оплате: {{ totalSum }}₸</h1>
   </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
    computed: {
    ...mapState(['totalSum'])
  },
}
</script>
