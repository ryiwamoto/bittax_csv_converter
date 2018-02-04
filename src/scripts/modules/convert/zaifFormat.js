import format from 'date-fns/format';

export const toZaifDate = date => format(new Date(date), "YYYY-MM-DD HH:mm:ss.000000");
