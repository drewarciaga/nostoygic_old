import { ref, reactive } from 'vue'

export default function useBrand(){
    const brands        = ref([])
    const totalBrands   = ref(0)
    const brand_list    = ref([])
    const errors        = ref([])

    const brand = reactive({
        name: '',
        image_url: null,
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
        brand.name = ''
        brand.description = ''
        brand.image_url = null
        brand.active = '1'
        brand.tags = []
        brand.color = ''
    }

    async function getBrand(brand_id){
        await axios.get('/brands/' + brand_id).then(response => {
            if(response.data){
                brand.name              = response.data.name
                brand.description       = response.data.description
                brand.image_url         = response.data.image_url
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

    async function storeBrand(){
        errors.value = []
    
        let formData = new FormData();
        formData.append('name', brand.name);
        formData.append('description', brand.description);
    
        if(brand.image_url !=null){
            formData.append('image_url', brand.image_url, brand.image_url.name);
        }
    
        formData.append('color', brand.color);
        formData.append('active', brand.active);
        formData.append('tags', brand.tags);
    
        await axios.post('/brands',formData
        ).then(response => {
            resetFields()
        }).catch(error => {
            if(error.response && error.response.status == 422){
                errors.value = error.response.data.errors
            }
        });
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
        getBrand,
        getAllBrands,
        getBrandList,

    }
}