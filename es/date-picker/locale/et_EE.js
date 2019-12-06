import CalendarLocale from 'rc-calendar/es/locale/et_EE';
import TimePickerLocale from '../../time-picker/locale/et_EE';
import assign from 'object-assign';
var locale = {
    lang: assign({
        placeholder: 'Vali kuupäev',
        rangePlaceholder: ['Algus kuupäev', 'Lõpu kuupäev']
    }, CalendarLocale),
    timePickerLocale: assign({}, TimePickerLocale)
};
export default locale;