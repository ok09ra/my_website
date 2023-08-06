<template>
    <h1>text</h1>
</template>

<script setup lang="ts">
interface Props{
    text: string;
}

const Props=withDefaults(defineProps<Props>(), {
    text: "",
})
</script>
