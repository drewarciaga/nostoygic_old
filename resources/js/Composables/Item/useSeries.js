import { ref, reactive } from 'vue'

export default function useSeries(){
    const series_array  = ref([])
    const totalSeries   = ref(0)
    const series_list   = ref([])
    const errors        = ref([])

    const series = reactive({
        id: '',
        name: '',
        image_url: null,

        thumbnail_url: null,

        description: '',
        tags: [],
        color: '',
        active: '1',
        delete_series_logo: false
    })

    const columns = ref([
        { id:0, field: 'name', label: 'Name',   sortable: true },
        { id:1, field: 'id',   label: 'Action', sortable: false },
    ]);

    function resetFields(){
        series.id = ''
        series.name = ''
        series.description = ''
        series.image_url = null
        series.thumbnail_url = null
        series.main_img = null
        series.main_thumb_img = null
        series.active = '1'
        series.tags = []
        series.color = ''
        series.delete_series_logo = false
    }

    async function getSeries(series_id){
        await axios.get('/series/' + series_id).then(response => {
            if(response.data){
                series.id                = response.data.id
                series.name              = response.data.name
                series.description       = response.data.description
                series.main_img          = response.data.image_url
                series.main_thumb_img    = response.data.thumbnail_url
                series.active            = response.data.active.toString()
                series.tags              = response.data.tags
                series.color             = response.data.color
            }
        })
    }

    async function getAllSeries(searchInput){
        await axios.get('/series/getAll',{
            params: {
                search: searchInput
            }
        }).then(response => {
            series_array.value = response.data.data
            totalSeries.value  = response.data.total
        })
    }

    async function getSeriesList(){
        await axios.get('/getSeriesList').then(response => {
            series_list.value = response.data
        });
    }

    function setFormData(){
        let formData = new FormData();
        formData.append('name', series.name);

        if(series.description !=null){
            formData.append('description', series.description);
        }
    
        if(series.image_url !=null){
            formData.append('image_url', series.image_url, series.image_url.name);
        }
    
        if(series.color != null && series.color != ''){
            formData.append('color', series.color);
        }

        if(series.active !=null){
            formData.append('active', series.active);
        }

        if(series.tags != null && series.tags != ''){
            formData.append('tags', series.tags);
        }
        
        if(series.delete_series_logo == true){
            formData.append('delete_series_logo', series.delete_series_logo);
        } 

        return formData;
    }

    async function storeSeries(){
        errors.value = []

        let formData = setFormData();

        await axios.post('/series',formData
        ).then(response => {
            resetFields()
        }).catch(error => {
            if(error.response && error.response.status == 422){
                errors.value = error.response.data.errors
            }
        });
    }

    async function updateSeries(series_id){
        errors.value = []

        let formData = setFormData();
        formData.append('_method', 'PUT')
        await axios.post('/series/'+series_id,formData
        ).then(response => {
            resetFields()
        }).catch(error => {
            if(error.response && error.response.status == 422){
                errors.value = error.response.data.errors
            }
        });
    }

    async function deleteSeries(series_id){
        errors.value = []

        await axios.delete('/series/'+series_id).then(response => {
            if(response.data.error != null){
                errors.value = response.data.error
            }
        }).catch(error => {
            errors.value = error
        })
    }
    
    return {
        series,
        series_array,
        series_list,
        totalSeries,
        columns,
        errors,
        resetFields,
        storeSeries,
        updateSeries,
        deleteSeries,
        getSeries,
        getAllSeries,
        getSeriesList,

    }
}