import CalendarLocale from 'rc-calendar/es/locale/fr_BE';
import TimePickerLocale from '../../time-picker/locale/fr_BE';
import assign from 'object-assign';
var locale = {
    lang: assign({
        placeholder: 'Sélectionner une date',
        rangePlaceholder: ['Date de début', 'Date de fin']
    }, CalendarLocale),
    timePickerLocale: assign({}, TimePickerLocale)
};
export default locale;