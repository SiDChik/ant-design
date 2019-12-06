import CalendarLocale from 'rc-calendar/es/locale/en_US';
import TimePickerLocale from '../../time-picker/locale/tr_TR';
import assign from 'object-assign';
var locale = {
    lang: assign({
        placeholder: 'Tarih Seç',
        rangePlaceholder: ['Başlangıç Tarihi', 'Bitiş Tarihi']
    }, CalendarLocale),
    timePickerLocale: assign({}, TimePickerLocale)
};
export default locale;