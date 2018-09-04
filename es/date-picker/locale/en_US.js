import CalendarLocale from 'rc-calendar/es/locale/en_US';
import TimePickerLocale from '../../time-picker/locale/en_US';
import assign from 'object-assign';
var locale = {
    lang: assign({
        placeholder: 'Select date',
        rangePlaceholder: ['Start date', 'End date']
    }, CalendarLocale),
    timePickerLocale: assign({}, TimePickerLocale)
};
export default locale;