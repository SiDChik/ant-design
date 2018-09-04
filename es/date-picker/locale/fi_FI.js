import CalendarLocale from 'rc-calendar/es/locale/fi_FI';
import TimePickerLocale from '../../time-picker/locale/fi_FI';
import assign from 'object-assign';
var locale = {
    lang: assign({
        placeholder: 'Valitse päivä',
        rangePlaceholder: ['Alku päivä', 'Loppu päivä']
    }, CalendarLocale),
    timePickerLocale: assign({}, TimePickerLocale)
};
export default locale;