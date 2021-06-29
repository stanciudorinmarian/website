import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        options: {
            customProperties: true,
            variations: false,
            themeCache: {
                get: key => localStorage.getItem(key),
                set: (key, value) => localStorage.setItem(key, value),
            },
        },
        themes: {
            light: {
                primary: '#3B3B3B',
                secondary: '#FFFFFF',
                accent: '#82B1FF',
                error: '#FF5252',
                info: '#2196F3',
                success: '#4CAF50',
                warning: '#FFC107',
                anchor: '#FFFFFF',
            },
        },
    },
    icons: {
        iconfont: 'faSvg',
    },
});
