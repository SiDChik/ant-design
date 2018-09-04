import CalendarLocale from 'rc-calendar/es/locale/bg_BG';
import TimePickerLocale from '../../time-picker/locale/bg_BG';
import assign from 'object-assign';
var locale = {
    lang: assign({
        placeholder: 'Избор на дата',
        rangePlaceholder: ['Начална', 'Крайна']
    }, CalendarLocale),
    timePickerLocale: assign({}, TimePickerLocale)
};
export default locale;