import axios from "axios"

export default {
    // Получаем все имена из вложених ссылок.
    async getDetailsFromList (list, key) {
        if(list){
            return await Promise.allSettled(list.map(
                async (item) => {
                    const {data} = await axios.get(item)
                    return data[key]
                }
            ))
        }
        return list
    },
    async getHomeworld (homeworld) {
        const {data} = await axios.get(homeworld)
        return data.name
    }
}