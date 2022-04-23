import { ref } from 'vue'

export async function getTypeSelect(user_id) {
    const typeList = ref([]);

    await axios.get('/getTypeList').then(response => {
        typeList.value = response.data
    });

    return {
        typeList
    }
}