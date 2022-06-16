import { ref, reactive } from 'vue'

export default function useUser(){
    const users        = ref([])
    const totalUsers   = ref(0)
    const user_list    = ref([])
    const errors       = ref([])

    const user = reactive({
        id: '',
        first_name: '',
        last_name: '',
        middle_name: '',
        full_name: '',
        username: '',
        email: '',
        password: '',
        password_confirmation: '',
        mobile_no: '',
        active: 1,
        locked: 0,
        profile_url: null,
        profile_img: null,
        delete_profile_img: false,
        fb_link: '',
        ig_link: '',
        super_admin: 0,
        remarks: '',
    })

    const columns = ref([
        { id:0, field: 'last_name',     label: 'Last Name',     sortable: true },
        { id:1, field: 'first_name',    label: 'First Name',    sortable: true },
        { id:2, field: 'middle_name',   label: 'Middle Name',   sortable: true },
        { id:3, field: 'id',            label: 'Action',        sortable: false },
    ]);

    function resetFields(){
        user.id = ''
        user.first_name = ''
        user.last_name = ''
        user.middle_name = ''
        user.full_name = ''
        user.username = ''
        user.email = ''
        user.password = ''
        user.password_confirmation = ''
        user.mobile_no = ''
        user.active = 1
        user.locked = 0
        user.profile_url = null
        user.profile_img = null
        user.fb_link = ''
        user.ig_link = ''
        user.super_admin = 0
        user.delete_profile_img = false
        user.remarks = ''
    }

    async function getUser(user_id){
        await axios.get('/users/' + user_id).then(response => {
            if(response.data){
                user.id                 = response.data.id
                user.first_name         = response.data.first_name
                user.last_name          = response.data.last_name
                user.middle_name        = response.data.middle_name
                user.full_name          = response.data.full_name
                user.username           = response.data.username
                user.email              = response.data.email
                user.password           = response.data.password
                user.mobile_no          = response.data.mobile_no
                user.active             = response.data.active.toString()
                user.locked             = response.data.locked.toString()
                user.profile_img        = response.data.profile_url
                user.fb_link            = response.data.fb_link
                user.ig_link            = response.data.ig_link
                user.super_admin        = response.data.super_admin.toString()
            }
        })
    }

    async function getAllUsers(page, perPage, sortField, sortOrder, searchInput){
        await axios.get('/users/getAll',{
            params: {
                page:           page,
                itemsPerPage:   perPage,
                sortBy:         sortField,
                sortDesc:       sortOrder,
                search:         searchInput,
            }
        }).then(response => {
            users.value      = response.data.data
            totalUsers.value = response.data.total
        })
    }

    async function getUserList(){
        await axios.get('/getUserList').then(response => {
            user_list.value = response.data
        });
    }

    function setFormData(){
        let formData = new FormData();
        formData.append('first_name', user.first_name);
        formData.append('last_name', user.last_name);
        formData.append('email', user.email);
        formData.append('username', user.username);

        if(user.middle_name !=null){
            formData.append('middle_name', user.middle_name);
        }

        if(user.mobile_no !=null){
            formData.append('mobile_no', user.mobile_no);
        }

        if(user.password !=null){
            formData.append('password', user.password);
        }

        if(user.password_confirmation !=null){
            formData.append('password_confirmation', user.password_confirmation);
        }
    
        if(user.profile_url !=null){
            formData.append('profile_url', user.profile_url, user.profile_url.name);
        }
    
        if(user.active !=null){
            formData.append('active', user.active);
        }

        if(user.locked !=null){
            formData.append('locked', user.locked);
        }
        
        if(user.delete_profile_img == true){
            formData.append('delete_profile_img', user.delete_profile_img);
        }

        if(user.remarks !=null){
            formData.append('remarks', user.remarks);
        }
        
        return formData;
    }

    async function storeUser(){
        errors.value = []

        let formData = setFormData();

        await axios.post('/users',formData
        ).then(response => {
            resetFields()
        }).catch(error => {
            if(error.response && error.response.status == 422){
                errors.value = error.response.data.errors
            }
        });
    }

    async function updateUser(user_id){
        errors.value = []

        let formData = setFormData();
        formData.append('_method', 'PUT')
        await axios.post('/users/'+user_id,formData
        ).then(response => {
            resetFields()
        }).catch(error => {
            if(error.response && error.response.status == 422){
                errors.value = error.response.data.errors
            }
        });
    }

    async function deleteUser(user_id){
        errors.value = []
        await axios.delete('/users/'+user_id).then(response => {
            if(response.data.error != null){
                errors.value = response.data.error
            }
        }).catch(error => {
            errors.value = error
        })
    }
    
    return {
        user,
        users,
        user_list,
        totalUsers,
        columns,
        errors,
        resetFields,
        storeUser,
        updateUser,
        deleteUser,
        getUser,
        getAllUsers,
        getUserList,

    }
}