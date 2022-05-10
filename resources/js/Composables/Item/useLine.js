import { ref, reactive } from 'vue'

export default function useLine(){
    const lines        = ref([])
    const totalLines   = ref(0)
    const line_list    = ref([])
    const errors       = ref([])

    const line = reactive({
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
        delete_line_logo: false
    })

    const columns = ref([
        { id:0, field: 'name', label: 'Name',   sortable: true },
        { id:1, field: 'id',   label: 'Action', sortable: false },
    ]);

    function resetFields(){
        line.id = ''
        line.name = ''
        line.description = ''
        line.image_url = null
        line.thumbnail_url = null
        line.main_img = null
        line.main_thumb_img = null
        line.active = '1'
        line.tags = []
        line.color = ''
        line.delete_line_logo = false
    }

    async function getLine(line_id){
        await axios.get('/lines/' + line_id).then(response => {
            if(response.data){
                line.id                = response.data.id
                line.name              = response.data.name
                line.description       = response.data.description
                line.main_img          = response.data.image_url
                line.main_thumb_img    = response.data.thumbnail_url
                line.active            = response.data.active.toString()
                line.tags              = response.data.tags
                line.color             = response.data.color
            }
        })
    }

    async function getAllLines(){
        await axios.get('/lines/getAll').then(response => {
            lines.value      = response.data.data
            totalLines.value = response.data.total
        })
    }

    async function getLineList(){
        await axios.get('/getLineList').then(response => {
            line_list.value = response.data
        });
    }

    function setFormData(){
        let formData = new FormData();
        formData.append('name', line.name);
        formData.append('description', line.description);
    
        if(line.image_url !=null){
            formData.append('image_url', line.image_url, line.image_url.name);
        }
    
        
        if(line.color != null && line.color != ''){
            formData.append('color', line.color);
        }
        formData.append('active', line.active);
        if(line.tags != null && line.tags != ''){
            formData.append('tags', line.tags);
        }
        
        if(line.delete_line_logo == true){
            formData.append('delete_line_logo', line.delete_line_logo);
        }
        

        return formData;
    }

    async function storeLine(){
        errors.value = []

        let formData = setFormData();

        await axios.post('/lines',formData
        ).then(response => {
            resetFields()
        }).catch(error => {
            if(error.response && error.response.status == 422){
                errors.value = error.response.data.errors
            }
        });
    }

    async function updateLine(line_id){
        errors.value = []

        let formData = setFormData();
        formData.append('_method', 'PUT')
        await axios.post('/lines/'+line_id,formData
        ).then(response => {
            resetFields()
        }).catch(error => {
            if(error.response && error.response.status == 422){
                errors.value = error.response.data.errors
            }
        });
    }

    async function deleteLine(line_id){
        errors.value = []

        await axios.delete('/lines/'+line_id).then(response => {
            if(response.data.error != null){
                errors.value = response.data.error
            }
        }).catch(error => {
            console.log('test')
            errors.value = error
        })
    }
    
    return {
        line,
        lines,
        line_list,
        totalLines,
        columns,
        errors,
        resetFields,
        storeLine,
        updateLine,
        deleteLine,
        getLine,
        getAllLines,
        getLineList,

    }
}