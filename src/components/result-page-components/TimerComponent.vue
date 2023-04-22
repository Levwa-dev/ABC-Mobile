<template>
    <section class="timer">
        <h3 class="timer__title">Звоните скорее, запись доступна всего</h3>
        <span><span class="timer__numbers">{{ getMinutes }}:{{ getSeconds }}</span> минут</span>
    </section>
</template>

<script>
    export default {
        name: 'TimerComponent',
        data () {
            return {
                totalSeconds: 60 * 10,
                timer:null
            }
        },
        methods: {
            startTimer () {
                this.timer = setInterval(()=>{
                    this.totalSeconds--
                }, 1000)
            },
            destroyTimer() {
                clearInterval(this.timer)
            }
        },
        computed: {
            getMinutes () {
                const minutes = Math.floor(this.totalSeconds / 60)
                return minutes >= 10 ? minutes : `0${minutes}`
            },
            getSeconds () {
                const totalSeconds = this.totalSeconds
                const minutes = Math.floor(this.totalSeconds / 60)
                const seconds = totalSeconds - minutes * 60
                return seconds >= 10 ? seconds : `0${seconds}`
            }
        },
        mounted () {
            this.startTimer()
        },
        unmounted () {
            this.destroyTimer()
        },
        watch: {
            totalSeconds (time) {
                if(time === 0) {
                    // Сделать что-то по окончанию таймера
                    this.destroyTimer()
                }
            }
        }
    }
</script>

<style scoped>
    .timer {
        font-family: 'PT Serif';
        font-style: normal;
        text-align: center;
        color: #3BDE7C;
        font-size: 11px;
        line-height: 30px;
        text-align: center;
        letter-spacing: 0.1em;
    }
    .timer__numbers{
        font-size: 20px;
        line-height: 25px;
    }
    @media screen and (min-width: 400px) {
        .timer {
            margin: 30px 0;
            font-size: 18px;
        } 
        .timer__numbers {
            font-size: 24px;
        }  
    }
</style>