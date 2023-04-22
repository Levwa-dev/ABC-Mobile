<template>
    <button class="button" :disabled="!isActive"><slot></slot></button>
</template>
  
<script>
  export default {
    name: 'MainPageButton.vue',
    props: {
        isActive:{
            type: Boolean,
            default: false,
        }
    }
}
</script>
  
<style scoped>
    .button {
        display: block;
        margin: 0 auto;
        width: 189px;
        height: 41px;
        border: none;
        padding: 0;

        border-radius: 20px;
        font-family: 'Merriweather';
        font-weight: 700;
        font-size: 14px;
        line-height: 18px;
        text-align: center;
        letter-spacing: 0.1em;
        text-transform: uppercase;
        border-radius: 20px;
        cursor: pointer;

        background: radial-gradient(50% 50% at 50% 50%, #FFC700 0%, #FFC700 100%);
        box-shadow: none;
        color: #0D0C11;
    }
    .button:disabled,
    .button[disabled] {
        color: #8E8E8E;
        background: #DADADA;
        box-shadow: inset 0px 4px 10px rgba(0, 0, 0, 0.25);
    }
</style>
  