<template>
    <div>
        <h1>Website of Sota Okuda</h1>
        <ul>
            <li><NuxtLink to="/#top">Top</NuxtLink></li>
            <li><NuxtLink to="/#history">History</NuxtLink></li>
            <li><NuxtLink to="/#works">Works</NuxtLink></li>
            <li><NuxtLink to="/#works">Contact</NuxtLink></li>
        </ul>
    </div>
</template>

<style scoped>
    *{
        font-family: "Menlo";
        color: #4a4a4a;
        font-weight: 300;
    }

    div{
        position:relative;
        border-bottom: solid 2px #b94047;
    }
    ul{
        display:flex;
        position: relative;
        margin-right:0;
        margin-left:auto;
        width:19rem;
    }
    
    li{
        list-style: none;
        margin-left: 20px;
    }

    a{
        color: #b94047;
    }
</style>