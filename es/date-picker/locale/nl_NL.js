import CalendarLocale from 'rc-calendar/es/locale/nl_NL';
import TimePickerLocale from '../../time-picker/locale/nl_NL';
import assign from 'object-assign';
var locale = {
    lang: assign({
        placeholder: 'Selecteer datum',
        rangePlaceholder: ['Begin datum', 'Eind datum']
    }, CalendarLocale),
    timePickerLocale: assign({}, TimePickerLocale)
};
export default locale;