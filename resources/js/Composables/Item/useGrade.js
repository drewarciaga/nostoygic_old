import { ref } from 'vue'

export async function getGradeSelect(user_id) {
    const gradeList = ref([]);

    await axios.get('/getGradeList').then(response => {
        gradeList.value = response.data
    });

    return {
        gradeList
    }
}