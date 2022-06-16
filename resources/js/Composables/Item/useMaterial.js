import { ref, reactive } from 'vue'

export default function useMaterial(){
    const materials        = ref([])
    const totalMaterials   = ref(0)
    const material_list    = ref([])
    const errors           = ref([])

    const material = reactive({
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
        delete_material_logo: false
    })

    const columns = ref([
        { id:0, field: 'name', label: 'Name',   sortable: true },
        { id:1, field: 'id',   label: 'Action', sortable: false },
    ]);

    function resetFields(){
        material.id = ''
        material.name = ''
        material.description = ''
        material.image_url = null
        material.thumbnail_url = null
        material.main_img = null
        material.main_thumb_img = null
        material.active = '1'
        material.tags = []
        material.color = ''
        material.delete_material_logo = false
    }

    async function getMaterial(material_id){
        await axios.get('/materials/' + material_id).then(response => {
            if(response.data){
                material.id                = response.data.id
                material.name              = response.data.name
                material.description       = response.data.description
                material.main_img          = response.data.image_url
                material.main_thumb_img    = response.data.thumbnail_url
                material.active            = response.data.active.toString()
                material.tags              = response.data.tags
                material.color             = response.data.color
            }
        })
    }

    async function getAllMaterials(searchInput){
        await axios.get('/materials/getAll',{
            params: {
                search: searchInput
            }
        }).then(response => {
            materials.value      = response.data.data
            totalMaterials.value = response.data.total
        })
    }

    async function getMaterialList(){
        await axios.get('/getMaterialList').then(response => {
            material_list.value = response.data
        });
    }

    function setFormData(){
        let formData = new FormData();
        formData.append('name', material.name);

        if(material.description !=null){
            formData.append('description', material.description);
        }
    
        if(material.image_url !=null){
            formData.append('image_url', material.image_url, material.image_url.name);
        }
    
        if(material.color != null && material.color != ''){
            formData.append('color', material.color);
        }

        if(material.active !=null){
            formData.append('active', material.active);
        }

        if(material.tags != null && material.tags != ''){
            formData.append('tags', material.tags);
        }
        
        if(material.delete_material_logo == true){
            formData.append('delete_material_logo', material.delete_material_logo);
        }
        
        return formData;
    }

    async function storeMaterial(){
        errors.value = []

        let formData = setFormData();

        await axios.post('/materials',formData
        ).then(response => {
            resetFields()
        }).catch(error => {
            if(error.response && error.response.status == 422){
                errors.value = error.response.data.errors
            }
        });
    }

    async function updateMaterial(material_id){
        errors.value = []

        let formData = setFormData();
        formData.append('_method', 'PUT')
        await axios.post('/materials/'+material_id,formData
        ).then(response => {
            resetFields()
        }).catch(error => {
            if(error.response && error.response.status == 422){
                errors.value = error.response.data.errors
            }
        });
    }

    async function deleteMaterial(material_id){
        errors.value = []

        await axios.delete('/materials/'+material_id).then(response => {
            if(response.data.error != null){
                errors.value = response.data.error
            }
        }).catch(error => {
            errors.value = error
        })
    }
    
    return {
        material,
        materials,
        material_list,
        totalMaterials,
        columns,
        errors,
        resetFields,
        storeMaterial,
        updateMaterial,
        deleteMaterial,
        getMaterial,
        getAllMaterials,
        getMaterialList,

    }
}