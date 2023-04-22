<template>
    <section class="user-info">
        <p v-if="error">{{ error }}</p>
        <article v-else class="user-info__content">
            <h2>Имя: {{ result.name }}</h2>
            <p>Рост: {{ result.height }}</p>
            <p>Цвет волос: {{ result.hair_color }}</p>
            <p>Цвет кожи: {{ result.skin_color }}</p>
            <p>Цвет глаз: {{ result.eye_color }}</p>
            <p>Год рождения: {{ result.birth_year }}</p>
            <p>Пол: {{ result.gender }}</p>
            <p>Родная планета: {{ result.homeworld }}</p>
            <details>
                <summary>Фильмы</summary>
                <ul>
                    <li v-for="film in result.films">{{ film.value }}</li>
                </ul>
            </details>
            <details>
                <summary>Разновидность</summary>
                <ul>
                    <li v-for="specy in result.species">{{ specy.value }}</li>
                </ul>
            </details>
            <details>
                <summary>Транспорт</summary>
                <ul>
                    <li v-for="vehicle in result.vehicles">{{ vehicle.value }}</li>
                </ul>
            </details>
            <details>
                <summary>Космические корабли</summary>
                <ul>
                    <li v-for="starship in result.starships">{{ starship.value }}</li>
                </ul>
            </details>
            
            <p>Создано: <time>{{ getTime(result.created) }}</time></p>
            <p>Обновленно: <time>{{ getTime(result.edited) }}</time></p>
            
        </article>
    </section>
    <span>12</span>

</template>

<script>
    import { mapActions } from 'vuex'
    export default {
        name: 'UserInfo',
        props: {
            data: Object
        },
        methods: {
            ...mapActions({
                resetResultTest : 'result/resetState'
            })
        },
        computed: {
            error () {
                return this.data.error
            },
            result () {
                return this.data.result
            },
            getTime: () => (time) => {
                const date = new Date(time)
                return date.toLocaleString()
            }
        },
        unmounted () {
           this.resetResultTest()
        }
    }
</script>

<style scoped>
    .user-info {
        color: #fff;
        text-align: center;
        padding-top: 60px;
        font-size: 18px;
        letter-spacing: 1.5px;
        padding-bottom: 40px;
    }
    .user-info__content > p, .user-info__content > details {
        margin: 20px 0;
    }
    details > ul {
        color: rgb(246, 208, 158);
    }
</style>