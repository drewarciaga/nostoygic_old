

import { ref } from 'vue'

export async function getBrandSelect(user_id) {
    const brandList = ref([]);

    await axios.get('/getBrandList').then(response => {
        brandList.value = response.data
    });

    return {
        brandList
    }
}