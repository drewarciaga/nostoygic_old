

import { ref } from 'vue';

export default function useBrand(url, options) {
    const brandList = ref([]);

    function getBrandList() {
        
        axios.get('/getBrandList').then(response => {
            brandList.value = response.data
        });
    }

    return {
        brandList,
        getBrandList
    };
}