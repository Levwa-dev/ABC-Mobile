<template>
    <footer class="footer" :class="{footer__show: show}">
        <p class="footer__text">TERMENI SI CONDITII: ACESTA ESTE UN SERVICIU DE DIVERTISMENT. PRIN FOLOSIREA LUI DECLARATI CA AVETI 18 ANI IMPLINITI,</p>
    </footer>
</template>

<script>
    export default {
        data () {
          return {
            show:false
          }  
        },
        name: 'FooterComponent',
        methods: {
            showFooter(){
                this.show = true
            },
            hideFooter () {
               this.show = false
            },
            checkScroll () {
                let documentHeight = document.body.scrollHeight;
                let currentScroll = window.scrollY + window.innerHeight;
                let modifier = 3;
                if(currentScroll + modifier > documentHeight) {
                    this.showFooter()
                }
                else if (currentScroll + modifier * 2 > documentHeight) {
                    this.hideFooter()
                }
            }
        },
        mounted () {
            document.addEventListener('scroll', this.checkScroll)
        },
        unmounted () {
            document.removeEventListener('scroll', this.checkScroll)
        }
    }
</script>

<style scoped>
    .footer {
        width: 100%;
        height: 16px;
        overflow: hidden;
        position: absolute;
        bottom: 0px;
        left: 0;
    }
    .footer__text {
        margin: 0 auto;
        width: 294px;
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 7px;
        line-height: 9px;
        text-align: center;
        letter-spacing: 3px;
        text-transform: uppercase;
        color: rgba(255, 255, 255, 0.5);
    }
    .footer__show {
        height: auto;
        overflow: none;
    }
</style>