import { ref, reactive } from 'vue'

export default function useitem(){
    const items        = ref([])
    const totalItems   = ref(0)
    const item_list    = ref([])
    const errors       = ref([])

    const item = reactive({
        name: '',
        profile_image: null,
        model: '',
        display_name: '',
        description: '',
        variant: '',
        type_id: '',
        brand_id: '',
        line_id: '',
        series_id: '',
        scale_id: '',
        grade_id: '',
        wave_id: '',
        group_id: '',
        item_category_id: '',
        bar_code: '',
        image_links: '',
        active: '',
        item_material_ids: [],
        item_size: '',
        item_weight: '',
    })

    const columns = ref([
        { id:0, field: 'id',   label: 'ID',     sortable: true, width: '1', },
        { id:1, field: 'name', label: 'Name',   sortable: true },
        { id:2, field: 'id',   label: 'Action', sortable: false },
    ]);

    function resetFields(){
        item.name = ''
        item.brand_id = ''
        item.grade_id = ''
        item.group_id = ''
        item.line_id = ''
        item.scale_id = ''
        item.series_id = ''
        item.type_id = ''
        item.wave_id = ''
        item.profile_image = null
    }

    async function getAllItems(page, perPage, sortField, sortOrder, search){
        await axios.get('/items/getAll',{
            params: {
                page:           page,
                itemsPerPage:   perPage,
                sortBy:         sortField,
                sortDesc:       sortOrder,
                search:         search,
            }
        }).then(response => {
            items.value      = response.data.data
            totalItems.value = response.data.total
        })
    }

   /* async function getItemList(){
        await axios.get('/getItemList').then(response => {
            item_list.value = response.data
        });
    }*/
    function setFormData(){
        let formData = new FormData();
        formData.append('name', item.name);
        formData.append('brand_id', item.brand_id);
        formData.append('grade_id', item.grade_id);
        formData.append('group_id', item.group_id);
        formData.append('line_id', item.line_id);
        formData.append('scale_id', item.scale_id);
        formData.append('series_id', item.series_id);
        formData.append('type_id', item.type_id);
        formData.append('wave_id', item.wave_id);
        if(item.profile_image !=null){
            formData.append('profile_image', item.profile_image, item.profile_image.name);
        }

        return formData;
    }

    async function storeItem(){
        errors.value = []
    
        let formData = setFormData();
              
        await axios.post('/items',formData
        ).then(response => {
            resetFields()
        }).catch(error => {
            if(error.response && error.response.status == 422){
                errors.value = error.response.data.errors
            }
        });  
    }

    async function updateItem(id){
        errors.value = []
    
        let formData = setFormData();
              
        await axios.put('/items/'+id,formData
        ).then(response => {
            resetFields()
        }).catch(error => {
            if(error.response && error.response.status == 422){
                errors.value = error.response.data.errors
            }
        });  
    }
    
    return {
        item,
        items,
        item_list,
        totalItems,
        columns,
        errors,
        resetFields,
        storeItem,
        updateItem,
        getAllItems,
        //getItemList,

    }
}