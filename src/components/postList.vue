<template>
    <div v-for="post in posts" :key="post.id" >
        <list :post="post" />
    </div>
</template>

<script> 
import list from './list.vue'
export default {
    props: ['posts'],
    components: {
        list
    } 
}
</script>

<style>

</style>
