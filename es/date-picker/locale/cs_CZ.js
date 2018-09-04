import CalendarLocale from 'rc-calendar/es/locale/cs_CZ';
import TimePickerLocale from '../../time-picker/locale/cs_CZ';
import assign from 'object-assign';
var locale = {
    lang: assign({
        placeholder: 'Vybrat datum',
        rangePlaceholder: ['Od', 'Do']
    }, CalendarLocale),
    timePickerLocale: assign({}, TimePickerLocale)
};
export default locale;