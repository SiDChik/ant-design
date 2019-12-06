import CalendarLocale from 'rc-calendar/es/locale/ca_ES';
import TimePickerLocale from '../../time-picker/locale/ca_ES';
import assign from 'object-assign';
var locale = {
    lang: assign({
        placeholder: 'Seleccionar data',
        rangePlaceholder: ['Data inicial', 'Data final']
    }, CalendarLocale),
    timePickerLocale: assign({}, TimePickerLocale)
};
export default locale;