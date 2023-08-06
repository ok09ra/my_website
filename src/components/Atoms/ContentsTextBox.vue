<template>
    <p>text</p>
</template>


<script setup lang="ts">
interface Props{
    text: string;
}

const Props=withDefaults(defineProps<Props>(), {
    text: "",
})
</script>
