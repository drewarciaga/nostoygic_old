import { ref, reactive } from 'vue'

export default function useBrand(){
    const brands        = ref([])
    const totalBrands   = ref(0)
    const brand_list    = ref([])
    const errors        = ref([])

    const brand = reactive({
        id: '',
        name: '',
        image_url: null,
        image_url_img: null,
        thumbnail_url: null,
        thumbnail_url_img: null,
        description: '',
        tags: [],
        color: '',
        active: '1',
    })

    const columns = ref([
        { id:0, field: 'name', label: 'Name',   sortable: true },
        { id:1, field: 'id',   label: 'Action', sortable: false },
    ]);

    function resetFields(){
        brand.id = ''
        brand.name = ''
        brand.description = ''
        brand.image_url = null
        brand.thumbnail_url = null
        brand.main_img = null
        brand.main_thumb_img = null
        brand.active = '1'
        brand.tags = []
        brand.color = ''
    }

    async function getBrand(brand_id){
        await axios.get('/brands/' + brand_id).then(response => {
            if(response.data){
                brand.id                = response.data.id
                brand.name              = response.data.name
                brand.description       = response.data.description
                brand.main_img          = response.data.image_url
                brand.main_thumb_img    = response.data.thumbnail_url
                brand.active            = response.data.active.toString()
                brand.tags              = response.data.tags
                brand.color             = response.data.color
            }
        })
    }

    async function getAllBrands(){
        await axios.get('/brands/getAll').then(response => {
            brands.value      = response.data.data
            totalBrands.value = response.data.total
        })
    }

    async function getBrandList(){
        await axios.get('/getBrandList').then(response => {
            brand_list.value = response.data
        });
    }

    function setFormData(){
        let formData = new FormData();
        formData.append('name', brand.name);
        formData.append('description', brand.description);
    
        if(brand.image_url !=null){
            formData.append('image_url', brand.image_url, brand.image_url.name);
        }
    
        formData.append('color', brand.color);
        formData.append('active', brand.active);
        formData.append('tags', brand.tags);

        return formData;
    }

    async function storeBrand(){
        errors.value = []

        let formData = setFormData();

        await axios.post('/brands',formData
        ).then(response => {
            resetFields()
        }).catch(error => {
            if(error.response && error.response.status == 422){
                errors.value = error.response.data.errors
            }
        });
    }

    async function updateBrand(brand_id){
        errors.value = []

        let formData = setFormData();
        formData.append('_method', 'PUT')
        await axios.post('/brands/'+brand_id,formData
        ).then(response => {
            resetFields()
        }).catch(error => {
            if(error.response && error.response.status == 422){
                errors.value = error.response.data.errors
            }
        });
    }

    async function deleteBrand(brand_id){
        errors.value = []

        await axios.delete('/brands/'+brand_id).then(response => {
            if(response.data.error != null){
                errors.value = response.data.error
            }
        }).catch(error => {
            console.log('test')
            errors.value = error
        })
    }
    
    return {
        brand,
        brands,
        brand_list,
        totalBrands,
        columns,
        errors,
        resetFields,
        storeBrand,
        updateBrand,
        deleteBrand,
        getBrand,
        getAllBrands,
        getBrandList,

    }
}