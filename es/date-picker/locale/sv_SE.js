import CalendarLocale from 'rc-calendar/es/locale/sv_SE';
import TimePickerLocale from '../../time-picker/locale/sv_SE';
import assign from 'object-assign';
var locale = {
    lang: assign({
        placeholder: 'Välj datum',
        rangePlaceholder: ['Startdatum', 'Slutdatum']
    }, CalendarLocale),
    timePickerLocale: assign({}, TimePickerLocale)
};
export default locale;