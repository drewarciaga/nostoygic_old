import { ref, reactive } from 'vue'

export default function useType(){
    const types        = ref([])
    const totalTypes   = ref(0)
    const type_list    = ref([])
    const errors       = ref([])

    const type = reactive({
        id: '',
        name: '',
        image_url: null,

        thumbnail_url: null,

        description: '',
        tags: [],
        color: '',
        active: '1',
        delete_type_logo: false
    })

    const columns = ref([
        { id:0, field: 'name', label: 'Name',   sortable: true },
        { id:1, field: 'id',   label: 'Action', sortable: false },
    ]);

    function resetFields(){
        type.id = ''
        type.name = ''
        type.description = ''
        type.image_url = null
        type.thumbnail_url = null
        type.main_img = null
        type.main_thumb_img = null
        type.active = '1'
        type.tags = []
        type.color = ''
        type.delete_type_logo = false
    }

    async function getType(type_id){
        await axios.get('/types/' + type_id).then(response => {
            if(response.data){
                type.id                = response.data.id
                type.name              = response.data.name
                type.description       = response.data.description
                type.main_img          = response.data.image_url
                type.main_thumb_img    = response.data.thumbnail_url
                type.active            = response.data.active.toString()
                type.tags              = response.data.tags
                type.color             = response.data.color
            }
        })
    }

    async function getAllTypes(searchInput){
        await axios.get('/types/getAll',{
            params: {
                search: searchInput
            }
        }).then(response => {
            types.value      = response.data.data
            totalTypes.value = response.data.total
        })
    }

    async function getTypeList(){
        await axios.get('/getTypeList').then(response => {
            type_list.value = response.data
        });
    }

    function setFormData(){
        let formData = new FormData();
        formData.append('name', type.name);

        if(type.description !=null){
            formData.append('description', type.description);
        }
    
        if(type.image_url !=null){
            formData.append('image_url', type.image_url, type.image_url.name);
        }
    
        if(type.color != null && type.color != ''){
            formData.append('color', type.color);
        }

        if(type.active !=null){
            formData.append('active', type.active);
        }

        if(type.tags != null && type.tags != ''){
            formData.append('tags', type.tags);
        }
        
        if(type.delete_type_logo == true){
            formData.append('delete_type_logo', type.delete_type_logo);
        }
        
        return formData;
    }

    async function storeType(){
        errors.value = []

        let formData = setFormData();

        await axios.post('/types',formData
        ).then(response => {
            resetFields()
        }).catch(error => {
            if(error.response && error.response.status == 422){
                errors.value = error.response.data.errors
            }
        });
    }

    async function updateType(type_id){
        errors.value = []

        let formData = setFormData();
        formData.append('_method', 'PUT')
        await axios.post('/types/'+type_id,formData
        ).then(response => {
            resetFields()
        }).catch(error => {
            if(error.response && error.response.status == 422){
                errors.value = error.response.data.errors
            }
        });
    }

    async function deleteType(type_id){
        errors.value = []

        await axios.delete('/types/'+type_id).then(response => {
            if(response.data.error != null){
                errors.value = response.data.error
            }
        }).catch(error => {
            errors.value = error
        })
    }
    
    return {
        type,
        types,
        type_list,
        totalTypes,
        columns,
        errors,
        resetFields,
        storeType,
        updateType,
        deleteType,
        getType,
        getAllTypes,
        getTypeList,

    }
}