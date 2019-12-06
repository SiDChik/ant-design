import CalendarLocale from 'rc-calendar/es/locale/de_DE';
import TimePickerLocale from '../../time-picker/locale/de_DE';
import assign from 'object-assign';
var locale = {
    lang: assign({
        placeholder: 'Datum auswählen',
        rangePlaceholder: ['Startdatum', 'Enddatum']
    }, CalendarLocale),
    timePickerLocale: assign({}, TimePickerLocale)
};
export default locale;