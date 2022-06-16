import { ref, reactive } from 'vue'

export default function useGrade(){
    const grades        = ref([])
    const totalGrades   = ref(0)
    const grade_list    = ref([])
    const errors        = ref([])

    const grade = reactive({
        id: '',
        name: '',
        image_url: null,
        main_img: null,
        thumbnail_url: null,
        main_thumb_img: null,
        description: '',
        tags: [],
        color: '',
        active: '1',
        delete_grade_logo: false
    })

    const columns = ref([
        { id:0, field: 'name', label: 'Name',   sortable: true },
        { id:1, field: 'id',   label: 'Action', sortable: false },
    ]);

    function resetFields(){
        grade.id = ''
        grade.name = ''
        grade.description = ''
        grade.image_url = null
        grade.thumbnail_url = null
        grade.main_img = null
        grade.main_thumb_img = null
        grade.active = '1'
        grade.tags = []
        grade.color = ''
        grade.delete_grade_logo = false
    }

    async function getGrade(grade_id){
        await axios.get('/grades/' + grade_id).then(response => {
            if(response.data){
                grade.id                = response.data.id
                grade.name              = response.data.name
                grade.description       = response.data.description
                grade.main_img          = response.data.image_url
                grade.main_thumb_img    = response.data.thumbnail_url
                grade.active            = response.data.active.toString()
                grade.tags              = response.data.tags
                grade.color             = response.data.color
            }
        })
    }

    async function getAllGrades(searchInput){
        await axios.get('/grades/getAll',{
            params: {
                search: searchInput
            }
        }).then(response => {
            grades.value      = response.data.data
            totalGrades.value = response.data.total
        })
    }

    async function getGradeList(){
        await axios.get('/getGradeList').then(response => {
            grade_list.value = response.data
        });
    }

    function setFormData(){
        let formData = new FormData();
        formData.append('name', grade.name);

        if(grade.description !=null){
            formData.append('description', grade.description);
        }
    
        if(grade.image_url !=null){
            formData.append('image_url', grade.image_url, grade.image_url.name);
        }
    
        if(grade.color != null && grade.color != ''){
            formData.append('color', grade.color);
        }

        if(grade.active !=null){
            formData.append('active', grade.active);
        }

        if(grade.tags != null && grade.tags != ''){
            formData.append('tags', grade.tags);
        }
        
        if(grade.delete_grade_logo == true){
            formData.append('delete_grade_logo', grade.delete_grade_logo);
        }

        return formData;
    }

    async function storeGrade(){
        errors.value = []

        let formData = setFormData();

        await axios.post('/grades',formData
        ).then(response => {
            resetFields()
        }).catch(error => {
            if(error.response && error.response.status == 422){
                errors.value = error.response.data.errors
            }
        });
    }

    async function updateGrade(grade_id){
        errors.value = []

        let formData = setFormData();
        formData.append('_method', 'PUT')
        await axios.post('/grades/'+grade_id,formData
        ).then(response => {
            resetFields()
        }).catch(error => {
            if(error.response && error.response.status == 422){
                errors.value = error.response.data.errors
            }
        });
    }

    async function deleteGrade(grade_id){
        errors.value = []

        await axios.delete('/grades/'+grade_id).then(response => {
            if(response.data.error != null){
                errors.value = response.data.error
            }
        }).catch(error => {
            errors.value = error
        })
    }
    
    return {
        grade,
        grades,
        grade_list,
        totalGrades,
        columns,
        errors,
        resetFields,
        storeGrade,
        updateGrade,
        deleteGrade,
        getGrade,
        getAllGrades,
        getGradeList,

    }
}