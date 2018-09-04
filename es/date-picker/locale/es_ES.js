import CalendarLocale from 'rc-calendar/es/locale/es_ES';
import TimePickerLocale from '../../time-picker/locale/es_ES';
import assign from 'object-assign';
var locale = {
    lang: assign({
        placeholder: 'Seleccionar fecha',
        rangePlaceholder: ['Fecha inicial', 'Fecha final']
    }, CalendarLocale),
    timePickerLocale: assign({}, TimePickerLocale)
};
export default locale;