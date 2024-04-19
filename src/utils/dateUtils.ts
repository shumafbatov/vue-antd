import { format } from 'date-fns'

export const dateToView = (date: Date | unknown): string | null =>{
    if (date instanceof Date) {
        return format(date, 'dd.MM.yyyy')
    }
    return null
}
