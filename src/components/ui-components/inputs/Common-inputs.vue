<template>
    <form class="form">
        <label v-for="option in options" 
            :key="option.id" 
            :class="{form__checked: inputValue === option.value}" 
            :for="`option${option.id}`"
            class="form__label">

            <input ref="inputs" @change="setInputValue" class="form__input" :id="`option${option.id}`" name="answers" type="radio" :value="option.value">

            <span class="form__checkmark"></span>
            <p class="form__title">{{option.title}}</p>
        </label>
    </form>
</template>
  
<script>
    export default {
        name: 'Common-inputs',
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
        width: 100%;
        display: flex;
        flex-direction: column;
    }
    .form__input {
        position: absolute;
        opacity: 0;
        cursor: pointer;
        height: 0;
        width: 0;
    }
    .form__label {
        display: flex;
        align-items: center;
        margin-bottom: 8px;
        position: relative;
        cursor: pointer;
        min-height: 50px;
        background: rgba(242, 243, 243, 0.15);
    }
    .form__checkmark {
        margin-left: 35px;
        display: block;
        height: 20px;
        width: 20px;
        background-color: transparent;
        border: 1px solid #FFFFFF;
        border-radius: 50%;
    }
    .form__title {
        width: 225px;
        margin-left: 35px;
        padding: 16px 0;
        color:#fff;
        opacity: 1;
        font-size: 18px;
        letter-spacing: 0.05em;
        text-transform: lowercase;
    }
    .form__title::first-letter {
        text-transform: capitalize;
    }
    .form__checked > .form__checkmark {
        background: #2950C2;
    }
    .form__checked > .form__title {
        color: #000;
    }
    .form__checked {
        background: #FFC700;
    }
</style>
  