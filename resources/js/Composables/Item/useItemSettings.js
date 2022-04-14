import { reactive } from 'vue'

export async function getItemSettingsLists() {
    const data = reactive({
        type_list: [],
        brand_list: [],
    })

    await axios.get('/getBrandList').then(response => {
        data.brand_list = response.data
    });

    await axios.get('/getBrandList').then(response => {
        data.type_list = response.data
    });

    return {
        data
    }
}