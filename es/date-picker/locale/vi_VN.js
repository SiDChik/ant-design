import CalendarLocale from 'rc-calendar/es/locale/en_US';
import TimePickerLocale from '../../time-picker/locale/en_US';
import assign from 'object-assign';
var locale = {
    lang: assign({
        placeholder: 'Chọn thời điểm',
        rangePlaceholder: ['Ngày bắt đầu', 'Ngày kết thúc']
    }, CalendarLocale),
    timePickerLocale: assign({}, TimePickerLocale)
};
export default locale;