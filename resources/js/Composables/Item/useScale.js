import { ref, reactive } from 'vue'

export default function useScale(){
    const scales        = ref([])
    const totalScales   = ref(0)
    const scale_list    = ref([])
    const errors        = ref([])

    const scale = reactive({
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
        delete_scale_logo: false
    })

    const columns = ref([
        { id:0, field: 'name', label: 'Name',   sortable: true },
        { id:1, field: 'id',   label: 'Action', sortable: false },
    ]);

    function resetFields(){
        scale.id = ''
        scale.name = ''
        scale.description = ''
        scale.image_url = null
        scale.thumbnail_url = null
        scale.main_img = null
        scale.main_thumb_img = null
        scale.active = '1'
        scale.tags = []
        scale.color = ''
        scale.delete_scale_logo = false
    }

    async function getScale(scale_id){
        await axios.get('/scales/' + scale_id).then(response => {
            if(response.data){
                scale.id                = response.data.id
                scale.name              = response.data.name
                scale.description       = response.data.description
                scale.main_img          = response.data.image_url
                scale.main_thumb_img    = response.data.thumbnail_url
                scale.active            = response.data.active.toString()
                scale.tags              = response.data.tags
                scale.color             = response.data.color
            }
        })
    }

    async function getAllScales(searchInput){
        await axios.get('/scales/getAll',{
            params: {
                search: searchInput
            }
        }).then(response => {
            scales.value      = response.data.data
            totalScales.value = response.data.total
        })
    }

    async function getScaleList(){
        await axios.get('/getScaleList').then(response => {
            scale_list.value = response.data
        });
    }

    function setFormData(){
        let formData = new FormData();
        formData.append('name', scale.name);

        if(scale.description !=null){
            formData.append('description', scale.description);
        }
    
        if(scale.image_url !=null){
            formData.append('image_url', scale.image_url, scale.image_url.name);
        }
    
        if(scale.color != null && scale.color != ''){
            formData.append('color', scale.color);
        }

        if(scale.active !=null){
            formData.append('active', scale.active);
        }

        if(scale.tags != null && scale.tags != ''){
            formData.append('tags', scale.tags);
        }
        
        if(scale.delete_scale_logo == true){
            formData.append('delete_scale_logo', scale.delete_scale_logo);
        }
        
        return formData;
    }

    async function storeScale(){
        errors.value = []

        let formData = setFormData();

        await axios.post('/scales',formData
        ).then(response => {
            resetFields()
        }).catch(error => {
            if(error.response && error.response.status == 422){
                errors.value = error.response.data.errors
            }
        });
    }

    async function updateScale(scale_id){
        errors.value = []

        let formData = setFormData();
        formData.append('_method', 'PUT')
        await axios.post('/scales/'+scale_id,formData
        ).then(response => {
            resetFields()
        }).catch(error => {
            if(error.response && error.response.status == 422){
                errors.value = error.response.data.errors
            }
        });
    }

    async function deleteScale(scale_id){
        errors.value = []

        await axios.delete('/scales/'+scale_id).then(response => {
            if(response.data.error != null){
                errors.value = response.data.error
            }
        }).catch(error => {
            errors.value = error
        })
    }
    
    return {
        scale,
        scales,
        scale_list,
        totalScales,
        columns,
        errors,
        resetFields,
        storeScale,
        updateScale,
        deleteScale,
        getScale,
        getAllScales,
        getScaleList,

    }
}