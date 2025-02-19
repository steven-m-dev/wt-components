import { FoundationOptions } from '../colors/types';
import { colorsFromFoundation } from '../colorsFromFoundation';

const foundationLight: FoundationOptions = {
    primary: '#1976d2',
    secondary: '#616161',
    accent: '#29b6f6',
    critical: '#f44336',
    info: '#2196f3',
    success: '#4caf50',
    warning: '#ffc107',
};

const foundationDark: FoundationOptions = {
    primary: '#1976d2',
    secondary: '#616161',
    accent: '#29b6f6',
    critical: '#f44336',
    info: '#2196f3',
    success: '#4caf50',
    warning: '#ffc107',
};

const { light, dark } = colorsFromFoundation(foundationLight, foundationDark);

const options = {
    colors: {
        light: {
            ...light,
            controls: {
                chart: {
                    backdrop: 'rgba(255, 255, 255, 0.75)',
                    background: '#666',
                    border: '#666',
                    grid: 'rgba(0, 0, 0, 0.6)',
                    text: '#666',
                    ticks: 'rgba(0, 0, 0, 0.6)',
                },
            },
        },
        dark: {
            ...dark,
            controls: {
                chart: {
                    backdrop: 'rgba(0, 0, 0, 0.75)',
                    background: '#FFF',
                    border: '#FFF',
                    grid: 'rgba(255, 255, 255, 0.7)',
                    text: '#FFF',
                    ticks: 'rgba(255, 255, 255, 0.7)',
                },
            },
        },
    },
    icons: {
        // Vuetify base icons
        complete: 'mdi-check',
        cancel: 'mdi-close-circle',
        close: 'mdi-close',
        delete: 'mdi-delete',
        deleteOff: 'mdi-delete-off',
        clear: 'mdi-close',
        success: 'mdi-check-circle',
        info: 'mdi-information-outline',
        warning: 'mdi-exclamation',
        error: 'mdi-alert-outline',
        prev: 'mdi-chevron-left',
        next: 'mdi-chevron-right',
        checkboxOn: 'mdi-checkbox-marked',
        checkboxOff: 'mdi-checkbox-blank-outline',
        checkboxIndeterminate: 'mdi-minus-box',
        delimiter: 'mdi-circle',
        sort: 'mdi-arrow-up',
        expand: 'mdi-chevron-down',
        menu: 'mdi-menu',
        subgroup: 'mdi-menu-down',
        dropdown: 'mdi-menu-down',
        radioOn: 'mdi-radiobox-marked',
        radioOff: 'mdi-radiobox-blank',
        edit: 'mdi-pencil-outline',
        ratingEmpty: 'mdi-star-outline',
        ratingFull: 'mdi-star',
        ratingHalf: 'mdi-star-half-full',
        loading: 'mdi-loading',
        first: 'mdi-page-first',
        last: 'mdi-page-last',
        unfold: 'mdi-unfold-more-horizontal',
        file: 'mdi-paperclip',
        plus: 'mdi-plus',
        minus: 'mdi-minus',
        search: 'mdi-magnify',
        like: 'mdi-thumb-up',
        dislike: 'mdi-thumb-down',

        // Wtg specific icons
        account: 'mdi-account',
        accountGroup: 'mdi-account-group',
        accountMinus: 'mdi-account-minus',
        accountPlus: 'mdi-account-plus',
        add: 'mdi-plus-circle-outline',
        accountSwitch: 'mdi-account-switch-outline',
        aggregate: 'mdi-calculator',
        alert: 'mdi-alert-outline',
        apps: 'mdi-apps',
        arrowLeft: 'mdi-arrow-left',
        arrowRight: 'mdi-arrow-right',
        calendarEmpty: 'mdi-calendar',
        camera: 'mdi-camera',
        check: 'mdi-check',
        chevronDown: 'mdi-chevron-down',
        chevronLeft: 'mdi-chevron-left',
        chevronRight: 'mdi-chevron-right',
        chevronUp: 'mdi-chevron-up',
        clock: 'mdi-clock-outline',
        cloudUpload: 'mdi-cloud-upload',
        cloud: 'mdi-cloud',
        configure: 'mdi-tune',
        containerLoadList: 'mdi-view-column',
        containerLoadPlans: 'mdi-view-comfy',
        copy: 'mdi-content-copy',
        dockWindow: 'mdi-dock-window',
        dotsHorizontal: 'mdi-dots-horizontal',
        dotsVertical: 'mdi-dots-vertical',
        dragVertical: 'mdi-drag-vertical',
        drawerClose: 'mdi-menu',
        drawerOpen: 'mdi-menu',
        earth: 'mdi-earth',
        email: 'mdi-at',
        exitApp: 'mdi-exit-to-app',
        eDocs: 'mdi-file-cloud-outline',
        fileDocument: 'mdi-file-document-outline',
        fileHidden: 'mdi-file-hidden',
        filterMenu: 'mdi-filter-outline',
        folder: 'mdi-folder',
        logs: 'mdi-format-list-bulleted',
        groupBy: 'mdi-format-list-group',
        help: 'mdi-help-circle-outline',
        home: 'mdi-home',
        landline: 'mdi-phone',
        lock: 'mdi-lock',
        menuUp: 'mdi-menu-up',
        menuRight: 'mdi-menu-right',
        message: 'mdi-message',
        messageAlert: 'mdi-message-alert',
        chat: 'mdi-message-outline',
        mobile: 'mdi-cellphone',
        notes: 'mdi-note-outline',
        notification: 'mdi-bell-outline',
        openInNew: 'mdi-open-in-new',
        orderLines: 'mdi-package-variant',
        package: 'mdi-text-box-multiple-outline',
        paste: 'mdi-content-paste',
        refresh: 'mdi-refresh',
        restricted: 'mdi-eye-off',
        settings: 'mdi-cog-outline',
        sidebarRight: 'mdi-page-layout-sidebar-right',
        sortVariant: 'mdi-sort-variant',
        star: 'mdi-star',
        starOutline: 'mdi-star-outline',
        supplierBookings: 'mdi-view-compact',
        themeOutline: 'mdi-palette-outline',
        toggleLightDark: 'mdi-white-balance-sunny',
        toggleStyle: 'mdi-chevron-double-left',
        unlock: 'mdi-lock-open-variant',
        workflows: 'mdi-vector-polyline',
        visible: 'mdi-eye',
    },
};

export default options;
