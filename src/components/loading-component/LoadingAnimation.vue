<template>
    <div class="loading__animation">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
    </div>
</template>

<script>
    export default {
        name: 'LoadingAnimation'
    }
</script>

<style scoped>
    .loading__animation {
        display: inline-block;
        position: relative;
        width: 65px;
        height: 69px;
        margin: 33px auto;

    }
    .loading__animation div {
        position: absolute;
        width: 10px;
        height: 10px;
        background: #3BDE7C;
        border-radius: 50%;
        animation: loading 1.3s linear infinite;
    }

    .loading__animation div:nth-child(1) {
        animation-delay: 0.3s;
        top: 18.46px;
        left: 6.16px;
    }
    .loading__animation div:nth-child(2) {
        animation-delay: 0.4s;
        top: 31.95px;
        left: 0px;
    }
    .loading__animation div:nth-child(3) {
        animation-delay: 0.5s;
        top: 46.27px;
        left: 1.83px;
    }
    .loading__animation div:nth-child(4) {
        animation-delay: 0.6s;
        top: 57.2px;
        left: 10.96px;
    }
    .loading__animation div:nth-child(5) {
        animation-delay: 0.7s;
        top: 61.52px;
        left: 24.64px;
    }
    .loading__animation div:nth-child(6) {
        animation-delay: 0.8s;
        top: 57.83px;
        left: 38.86px;
    }
    .loading__animation div:nth-child(7) {
        animation-delay: 0.9s;
        top: 47.96px;
        left: 49.47px;
    }
    .loading__animation div:nth-child(8) {
        animation-delay: 1s;
        top: 33.97px;
        left: 50.5px;
    }
    .loading__animation div:nth-child(9) {
        animation-delay: 1.1s;
        top: 21.3px;
        left: 47.1px;
    }
    .loading__animation div:nth-child(10) {
        animation-delay: 1.2s;
        top: 12.69px;
        left: 35.85px;
    }
    .loading__animation div:nth-child(11) {
        animation-delay: 1.3s;
        top: 12px;
        left: 20.5px;
    }

    @keyframes loading {
        0%, 20%{
            transform: scale(0.2);
        }
        40% {
            transform: scale(1);
        }
        60% {
            transform: scale(1.7);
        }
        80%{
            transform: scale(0.8);
        }
        100% {
            transform: scale(0.2);
        }
    }
</style>