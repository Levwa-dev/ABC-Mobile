<template>
    <form class="form">
        <label v-for="option in shuffledOptions" 
            :key="option.id" 
            :class="{form__checked: inputValue === option.value}" 
            :for="`option${option.id}`"
            :style="{'background-color': option.title}"
            class="form__label">

            <input ref="inputs" @change="setInputValue" class="form__input" :id="`option${option.id}`" name="answers" type="radio" :value="option.value">
        </label>
    </form>
</template>
  
<script>
    export default {
        name: 'ColorInputs',
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
            },
            shuffle(array) {
                return array.sort(() => Math.random() - 0.5);
            }
        },
        computed: {
            shuffledOptions () {
                return this.shuffle(this.options)
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
        display: grid;
        grid-template-columns: repeat(3, 75px);
        column-gap: 24px;
        row-gap: 24px;
    }
    .form__input {
        position: absolute;
        opacity: 0;
        cursor: pointer;
        height: 0;
        width: 0;
    }
    .form__label {
        width: 75px;
        height: 75px;
        position: relative;
        cursor: pointer;
    }
    .form__checked {
        box-sizing: border-box;
        border: 6px solid #FFC700;
    }
</style>
  