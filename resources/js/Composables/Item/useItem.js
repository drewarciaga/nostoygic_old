import { ref, reactive } from 'vue'

export default function useitem(){
    const items        = ref([])
    const totalItems   = ref(0)
    const item_list    = ref([])
    const errors       = ref([])

    const item = reactive({
        id: '',
        name: '',
        profile_url: null,
        model: '',
        display_name: '',
        description: '',
        variant: '',
        parent_variant_id: '',
        type_id: '',
        brand_id: '',
        line_id: '',
        series_id: '',
        scale_id: '',
        grade_id: '',
        wave_id: '',
        group_id: '',
        bar_code: '',
        image_links: '',
        active: '',
        item_material_ids: [],
        item_size: '',
        item_weight: '',
        color: '',
        remarks: '',
        release_date: '',
    })

    const columns = ref([
        { id:0, field: 'name', label: 'Name',   sortable: true },
        { id:1, field: 'id',   label: 'Action', sortable: false },
    ]);

    function resetFields(){
        item.name = ''
        item.profile_url = null
        item.thumbnail_url = null
        item.model = ''
        item.display_name = ''
        item.description = ''
        item.variant = ''
        item.parent_variant_id = ''
        item.type_id = ''
        item.brand_id = ''
        item.line_id = ''
        item.series_id = ''
        item.scale_id = ''
        item.grade_id = ''
        item.wave_id = ''
        item.group_id = ''
        item.bar_code = ''
        item.image_links = ''
        item.active = ''
        item.item_material_ids = []
        item.item_size = ''
        item.item_weight = ''
        item.color = ''
        item.remarks = ''
        item.release_date = ''
    }

    async function getItem(item_id){
        await axios.get('/items/' + item_id).then(response => {
            if(response.data){
                item.id                 = response.data.id
                item.name               = response.data.name
                item.description        = response.data.description
                item.model              = response.data.model
                item.display_name       = response.data.display_name
                item.variant            = response.data.variant
                item.parent_variant_id  = response.data.parent_variant_id
                item.type_id            = response.data.type_id
                item.brand_id           = response.data.brand_id
                item.line_id            = response.data.line_id
                item.series_id          = response.data.series_id
                item.scale_id           = response.data.scale_id
                item.grade_id           = response.data.grade_id
                item.wave_id            = response.data.wave_id
                item.group_id           = response.data.group_id
                item.bar_code           = response.data.bar_code
                item.image_links        = response.data.image_links
                item.active             = response.data.active.toString()
                item.item_material_ids  = response.data.item_material_ids
                item.item_size          = response.data.item_size
                item.item_weight        = response.data.item_weight
                item.color              = response.data.color
                item.remarks            = response.data.remarks
                item.release_date       = response.data.release_date
                item.profile_url        = response.data.profile_url
                item.thumbnail_url      = response.data.thumbnail_url
            }
        })
    }

    async function getAllItems(page, perPage, sortField, sortOrder, searchInput){
        await axios.get('/items/getAll',{
            params: {
                page:           page,
                itemsPerPage:   perPage,
                sortBy:         sortField,
                sortDesc:       sortOrder,
                search:         searchInput,
            }
        }).then(response => {
            items.value      = response.data.data
            totalItems.value = response.data.total
        })
    }

    function setFormData(){
        let formData = new FormData();
        formData.append('name', item.name);

        if(item.model != null){
            formData.append('model', item.model);
        }

        if(item.display_name != null){
            formData.append('display_name', item.display_name);
        }

        if(item.description != null){
            formData.append('description', item.description);
        }

        if(item.variant != null){
            formData.append('variant', item.variant);
        }

        if(item.type_id != null){
            formData.append('type_id', item.type_id);
        }
        
        if(item.brand_id != null){
            formData.append('brand_id', item.brand_id);
        }
        
        if(item.line_id != null){
            formData.append('line_id', item.line_id);
        }
        
        if(item.series_id != null){
            formData.append('series_id', item.series_id);
        }

        if(item.scale_id != null){
            formData.append('scale_id', item.scale_id);
        }
        
        if(item.grade_id != null){
            formData.append('grade_id', item.grade_id);
        }

        if(item.wave_id != null){
            formData.append('wave_id', item.wave_id);
        }
        
        if(item.group_id != null){
            formData.append('group_id', item.group_id);
        }
        
        if(item.bar_code != null){
            formData.append('bar_code', item.bar_code);
        }
        
        if(item.active != null){
            formData.append('active', item.active);
        }
        
        if(item.item_material_ids != null){
            formData.append('item_material_ids', item.item_material_ids);
        }
        
        if(item.item_size != null){
            formData.append('item_size', item.item_size);
        }
        
        if(item.item_weight != null){
            formData.append('item_weight', item.item_weight);
        }
        
        if(item.color != null){
            formData.append('color', item.color);
        }
        
        if(item.remarks != null){
            formData.append('remarks', item.remarks);
        }
        
        if(item.parent_variant_id != null){
            formData.append('parent_variant_id', item.parent_variant_id);
        }
        
        if(item.release_date != null){
            formData.append('release_date', item.release_date);
        }
        
        if(item.profile_url !=null){
            formData.append('profile_url', item.profile_url, item.profile_url.name);
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
        formData.append('_method', 'PUT')
        await axios.post('/items/'+id,formData
        ).then(response => {

        }).catch(error => {
            if(error.response && error.response.status == 422){
                errors.value = error.response.data.errors
            }
        });  
    }

    async function deleteItem(item_id){
        errors.value = []

        await axios.delete('/items/'+item_id).then(response => {
            if(response.data.error != null){
                errors.value = response.data.error
            }
        }).catch(error => {
            errors.value = error
        })
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
        deleteItem,
        getAllItems,
        getItem,
    }
}