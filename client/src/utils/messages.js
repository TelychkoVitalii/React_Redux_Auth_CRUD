import { message } from 'antd';

export const message_error = value => message.error(value);
export const message_warn = value => message.warning(value);
export const message_success = value => message.success(value);
export const message_info = value => message.info(value);