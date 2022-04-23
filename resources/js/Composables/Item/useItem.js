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
    })

    const columns = ref([
        { id:0, field: 'id',   label: 'ID',     sortable: true, width: '1', },
        { id:1, field: 'name', label: 'Name',   sortable: true },
        { id:2, field: 'id',   label: 'Action', sortable: false },
    ]);

    function resetFields(){
        item.name = ''
        item.brand_id = ''
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

    async function storeItem(){
        errors.value = []
    
        let formData = new FormData();
        formData.append('name', item.name);
        formData.append('brand_id', item.brand_id);
        if(item.profile_image !=null){
            formData.append('profile_image', item.profile_image, item.profile_image.name);
        }
              
        await axios.post('/items',formData
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
        getAllItems,
        //getItemList,

    }
}