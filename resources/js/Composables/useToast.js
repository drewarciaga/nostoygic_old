import { createToast } from 'mosha-vue-toastify';

export default function useToast(){
    const toast = (message,type) => {
        createToast(message, {
            type: type,
            position: 'top-right',
            timeout: 2000,
            hideProgressBar: true,
            showIcon: true,
        })
    }

    return {
        toast
    }
}