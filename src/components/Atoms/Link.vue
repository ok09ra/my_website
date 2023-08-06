<template>
    <a href=link}>link</a>
</template>

<script setup lang="ts">
interface Props{
    text: string;
    link: string;
}

const Props=withDefaults(defineProps<Props>(), {
    text: "",
    string: "",
})
</script>
