import CalendarLocale from 'rc-calendar/es/locale/sk_SK';
import TimePickerLocale from '../../time-picker/locale/sk_SK';
import assign from 'object-assign';
var locale = {
    lang: assign({
        placeholder: 'Vybrať dátum',
        rangePlaceholder: ['Od', 'Do']
    }, CalendarLocale),
    timePickerLocale: assign({}, TimePickerLocale)
};
export default locale;