<template>
    <form class="form">
        <label v-for="option in options" 
            :key="option.id" 
            :class="{form__checked: inputValue === option.value}" 
            :for="`option${option.id}`"
            class="form__label">

            <input ref="inputs" @change="setInputValue" class="form__input" :id="`option${option.id}`" name="answers" type="radio" :value="option.value">
            <p class="form__title">{{option.title}}</p>
        </label>
    </form>
</template>
  
<script>
    export default {
        name: 'NumberInputs',
        data () {
            return {
                inputValue:''
            }
        },
        props: {
            options:{
                type: Array,
                default: [],
            }
        },
        methods: {
            setInputValue (e) {
                this.inputValue = e.target.value
                this.$emit('setInputValue', e.target.value)
            }
        },
        watch: {
            inputValue (curr) {
                if(!curr) {
                    this.$refs.inputs.forEach(input=>input.checked = false)
                }
            }
        }
    }
</script>
  
<style scoped>
    .form {
        width: 288px;
        margin: 0 17px;
        display: flex;
        justify-content: space-between;
    }
    .form__input {
        position: absolute;
        opacity: 0;
        cursor: pointer;
        height: 0;
        width: 0;
    }
    .form__label {
        width: 41px;
        height: 41px;
        background-color: #fff;
        display: grid;
        place-content: center;
        margin-bottom: 8px;
        position: relative;
        cursor: pointer;
        font-size: 20px;
        line-height: 49px;
        text-transform: capitalize;
        color: #0D0C11;
    }
    .form__checked {
        box-sizing: border-box;
        border: 6px solid #FFC700;
    }
</style>
  