import './bootstrap';
import './micromodal';
import '../css/app.css';
import '../css/micromodal.css';

import { createApp, h } from 'vue';
import { createInertiaApp } from '@inertiajs/inertia-vue3';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { ZiggyVue } from '../../vendor/tightenco/ziggy/dist/vue.m';
import { Inertia } from '@inertiajs/inertia';

const appName = window.document.getElementsByTagName('title')[0]?.innerText || 'Laravel';

// Google Analyticsにページビューを送信する関数
function trackPageView(url) {
    if (typeof gtag === 'function') {
        gtag('config', 'G-6TB0WW8SWW', {
            page_path: url
        });
    }
}

// Inertiaのナビゲーションイベントにページビュー送信を追加
Inertia.on('navigate', (event) => {
    console.log("Tracking page view for:", event.detail.page.url); // 確認用ログ
    trackPageView(event.detail.page.url);
});

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) => resolvePageComponent(`./Pages/${name}.vue`, import.meta.glob('./Pages/**/*.vue')),
    setup({ el, App, props, plugin }) {
        return createApp({ render: () => h(App, props) })
            .use(plugin)
            .use(ZiggyVue, Ziggy)
            .mount(el);
    },
    progress: {
        color: '#4B5563',
    },
});
