import { ref } from 'vue'

export async function getSeriesSelect(user_id) {
    const seriesList = ref([]);

    await axios.get('/getSeriesList').then(response => {
        seriesList.value = response.data
    });

    return {
        seriesList
    }
}