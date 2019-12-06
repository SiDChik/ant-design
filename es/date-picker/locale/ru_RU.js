
import CalendarLocale from 'rc-calendar/es/locale/ru_RU';
import TimePickerLocale from '../../time-picker/locale/ru_RU';
import assign from 'object-assign';
var locale = {
    lang: assign({
        placeholder: 'Выберите дату',
        rangePlaceholder: ['Начальная дата', 'Конечная дата']
    }, CalendarLocale),
    timePickerLocale: assign({}, TimePickerLocale)
};
export default locale;