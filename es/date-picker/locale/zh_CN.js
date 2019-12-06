import CalendarLocale from 'rc-calendar/es/locale/zh_CN';
import TimePickerLocale from '../../time-picker/locale/zh_CN';
import assign from 'object-assign';
import moment from 'moment';
import 'moment/locale/zh-cn';
moment.locale('zh-cn');
var locale = {
    lang: assign({
        placeholder: '请选择日期',
        rangePlaceholder: ['开始日期', '结束日期']
    }, CalendarLocale),
    timePickerLocale: assign({}, TimePickerLocale)
};
locale.lang.ok = '确 定';
export default locale;