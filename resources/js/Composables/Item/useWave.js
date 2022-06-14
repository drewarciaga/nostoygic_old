import { ref, reactive } from 'vue'

export default function useWave(){
    const waves        = ref([])
    const totalWaves   = ref(0)
    const wave_list    = ref([])
    const errors        = ref([])

    const wave = reactive({
        id: '',
        name: '',
        image_url: null,

        thumbnail_url: null,

        description: '',
        tags: [],
        color: '',
        active: '1',
        delete_wave_logo: false
    })

    const columns = ref([
        { id:0, field: 'name', label: 'Name',   sortable: true },
        { id:1, field: 'id',   label: 'Action', sortable: false },
    ]);

    function resetFields(){
        wave.id = ''
        wave.name = ''
        wave.description = ''
        wave.image_url = null
        wave.thumbnail_url = null
        wave.main_img = null
        wave.main_thumb_img = null
        wave.active = '1'
        wave.tags = []
        wave.color = ''
        wave.delete_wave_logo = false
    }

    async function getWave(wave_id){
        await axios.get('/waves/' + wave_id).then(response => {
            if(response.data){
                wave.id                = response.data.id
                wave.name              = response.data.name
                wave.description       = response.data.description
                wave.main_img          = response.data.image_url
                wave.main_thumb_img    = response.data.thumbnail_url
                wave.active            = response.data.active.toString()
                wave.tags              = response.data.tags
                wave.color             = response.data.color
            }
        })
    }

    async function getAllWaves(searchInput){
        await axios.get('/waves/getAll',{
            params: {
                search: searchInput
            }
        }).then(response => {
            waves.value      = response.data.data
            totalWaves.value = response.data.total
        })
    }

    async function getWaveList(){
        await axios.get('/getWaveList').then(response => {
            wave_list.value = response.data
        });
    }

    function setFormData(){
        let formData = new FormData();
        formData.append('name', wave.name);

        if(wave.description !=null){
            formData.append('description', wave.description);
        }
    
        if(wave.image_url !=null){
            formData.append('image_url', wave.image_url, wave.image_url.name);
        }
    
        if(wave.color != null && wave.color != ''){
            formData.append('color', wave.color);
        }

        if(wave.active !=null){
            formData.append('active', wave.active);
        }

        if(wave.tags != null && wave.tags != ''){
            formData.append('tags', wave.tags);
        }
        
        if(wave.delete_wave_logo == true){
            formData.append('delete_wave_logo', wave.delete_wave_logo);
        }

        return formData;
    }

    async function storeWave(){
        errors.value = []

        let formData = setFormData();

        await axios.post('/waves',formData
        ).then(response => {
            resetFields()
        }).catch(error => {
            if(error.response && error.response.status == 422){
                errors.value = error.response.data.errors
            }
        });
    }

    async function updateWave(wave_id){
        errors.value = []

        let formData = setFormData();
        formData.append('_method', 'PUT')
        await axios.post('/waves/'+wave_id,formData
        ).then(response => {
            resetFields()
        }).catch(error => {
            if(error.response && error.response.status == 422){
                errors.value = error.response.data.errors
            }
        });
    }

    async function deleteWave(wave_id){
        errors.value = []

        await axios.delete('/waves/'+wave_id).then(response => {
            if(response.data.error != null){
                errors.value = response.data.error
            }
        }).catch(error => {
            errors.value = error
        })
    }
    
    return {
        wave,
        waves,
        wave_list,
        totalWaves,
        columns,
        errors,
        resetFields,
        storeWave,
        updateWave,
        deleteWave,
        getWave,
        getAllWaves,
        getWaveList,

    }
}