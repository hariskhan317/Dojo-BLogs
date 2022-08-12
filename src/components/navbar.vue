<template>
    <header class="w-full py-3 px-9 border-b-2 shadow flex justify-between">
        <h1 class="text-[#ff8b00] font-bold text-4xl">DOJO BLOGS</h1>
        <nav class="space-x-9 mt-1">
            <router-link class="text-xl font-medium text-gray-400" :to="{name:'home'}">Home</router-link>
            <router-link class="text-xl font-medium text-gray-400" :to="{name:'Create'}">Create a Post</router-link>
        </nav>
    </header>
</template>

<script>
export default {

}
</script>

<style>
.router-link-active{
    color: #ff8b00 !important;
}
</style>