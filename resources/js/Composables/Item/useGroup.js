import { ref, reactive } from 'vue'

export default function useGroup(){
    const groups        = ref([])
    const totalGroups   = ref(0)
    const group_list    = ref([])
    const errors        = ref([])

    const group = reactive({
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
        delete_group_logo: false
    })

    const columns = ref([
        { id:0, field: 'name', label: 'Name',   sortable: true },
        { id:1, field: 'id',   label: 'Action', sortable: false },
    ]);

    function resetFields(){
        group.id = ''
        group.name = ''
        group.description = ''
        group.image_url = null
        group.thumbnail_url = null
        group.main_img = null
        group.main_thumb_img = null
        group.active = '1'
        group.tags = []
        group.color = ''
        group.delete_group_logo = false
    }

    async function getGroup(group_id){
        await axios.get('/groups/' + group_id).then(response => {
            if(response.data){
                group.id                = response.data.id
                group.name              = response.data.name
                group.description       = response.data.description
                group.main_img          = response.data.image_url
                group.main_thumb_img    = response.data.thumbnail_url
                group.active            = response.data.active.toString()
                group.tags              = response.data.tags
                group.color             = response.data.color
            }
        })
    }

    async function getAllGroups(searchInput){
        await axios.get('/groups/getAll',{
            params: {
                search: searchInput
            }
        }).then(response => {
            groups.value      = response.data.data
            totalGroups.value = response.data.total
        })
    }

    async function getGroupList(){
        await axios.get('/getGroupList').then(response => {
            group_list.value = response.data
        });
    }

    function setFormData(){
        let formData = new FormData();
        formData.append('name', group.name);

        if(group.description !=null){
            formData.append('description', group.description);
        }
    
        if(group.image_url !=null){
            formData.append('image_url', group.image_url, group.image_url.name);
        }
    
        if(group.color != null && group.color != ''){
            formData.append('color', group.color);
        }

        if(group.active !=null){
            formData.append('active', group.active);
        }

        if(group.tags != null && group.tags != ''){
            formData.append('tags', group.tags);
        }
        
        if(group.delete_group_logo == true){
            formData.append('delete_group_logo', group.delete_group_logo);
        }

        return formData;
    }

    async function storeGroup(){
        errors.value = []

        let formData = setFormData();

        await axios.post('/groups',formData
        ).then(response => {
            resetFields()
        }).catch(error => {
            if(error.response && error.response.status == 422){
                errors.value = error.response.data.errors
            }
        });
    }

    async function updateGroup(group_id){
        errors.value = []

        let formData = setFormData();
        formData.append('_method', 'PUT')
        await axios.post('/groups/'+group_id,formData
        ).then(response => {
            resetFields()
        }).catch(error => {
            if(error.response && error.response.status == 422){
                errors.value = error.response.data.errors
            }
        });
    }

    async function deleteGroup(group_id){
        errors.value = []

        await axios.delete('/groups/'+group_id).then(response => {
            if(response.data.error != null){
                errors.value = response.data.error
            }
        }).catch(error => {
            errors.value = error
        })
    }
    
    return {
        group,
        groups,
        group_list,
        totalGroups,
        columns,
        errors,
        resetFields,
        storeGroup,
        updateGroup,
        deleteGroup,
        getGroup,
        getAllGroups,
        getGroupList,

    }
}