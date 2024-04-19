export const formatMoney = (money: string, isWithPennies = true, separator = ' ') => {
    if (!money?.length) {
        return isWithPennies ? '0.00' : '0'
    }

    const [integer, fractional] = money
        .replace(/\s+/g, '')
        .replace(/^[0]*(?=[0-9]+)|[.](?=.*[.])/g, '')
        .split('.')

    const delimitedInteger = integer.replace(/\B(?=(\d{3})+(?!\d))/g, separator)
    if (isWithPennies) {
        const formattedFractional = `${fractional ?? ''}00`.slice(0, 2)
        return [delimitedInteger, formattedFractional].join('.')
    }
    return delimitedInteger
}
