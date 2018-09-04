import CalendarLocale from 'rc-calendar/es/locale/pt_BR';
import TimePickerLocale from '../../time-picker/locale/pt_BR';
import assign from 'object-assign';
var locale = {
    lang: assign({
        placeholder: 'Selecionar data',
        rangePlaceholder: ['Data de início', 'Data de fim']
    }, CalendarLocale),
    timePickerLocale: assign({}, TimePickerLocale)
};
export default locale;