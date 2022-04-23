import { ref } from 'vue'

export async function getLineSelect(user_id) {
    const lineList = ref([]);

    await axios.get('/getLineList').then(response => {
        lineList.value = response.data
    });

    return {
        lineList
    }
}