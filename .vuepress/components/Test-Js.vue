<template>
    <div>
        <p>over here vvv</p>
        <p v-on:click="test" >testeeeee</p>
        <p>over here ^^^</p>
    </div>
</template>
<script>
export default {
  methods: {
    test() {
      console.log('Test Alert');
    }
  }
}
</script>


