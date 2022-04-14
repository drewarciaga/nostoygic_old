require('./bootstrap');

import { createApp, h } from 'vue';
import { createInertiaApp } from '@inertiajs/inertia-vue3';
import { InertiaProgress } from '@inertiajs/progress';
import '@mdi/font/css/materialdesignicons.css'
import 'tw-elements';
import Oruga from '@oruga-ui/oruga-next'
import moshaToast from 'mosha-vue-toastify'
import 'mosha-vue-toastify/dist/style.css'
import VueGridLayout from 'vue-grid-layout'
import '/js/jquery.lazyload.min.js'
/*import JQuery from 'jquery'
window.$ = JQuery*/

const appName = window.document.getElementsByTagName('title')[0]?.innerText || 'Laravel';

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) => require(`./Pages/${name}.vue`),
    setup({ el, app, props, plugin }) {
        return createApp({ render: () => h(app, props) })
            .use(plugin)
            .use(Oruga)
            .use(moshaToast)
            .use(VueGridLayout)
            .mixin({ methods: { route } })
            .mount(el);
    },
});

InertiaProgress.init({ color: '#4B5563' });
