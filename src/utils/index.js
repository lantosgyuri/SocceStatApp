export const makeSliderList = fieldInfoResponse => fieldInfoResponse
    .fields.map(item => {
        if (item.type === 'num') {
            return Object.assign(item, fieldInfoResponse.types.num)
        } else if (item.type === 'percentage') {
            return Object.assign(item, fieldInfoResponse.types.percentage)
        }
    });

export const makeFinalStatList = (fieldInfo, homeStat, awayStat) => {
    const getValue = (key, obj) => {
        const value = obj[key];
        return value ? value : 0;
    };

    return fieldInfo.map(item => {
        const homeValue = getValue(item.dbColumnName, homeStat.stats[0]);
        const awayValue = getValue(item.dbColumnName, awayStat.stats[0]);
        const currentValues =  {
            homeValue,
            awayValue
        };
        return (Object.assign(item, currentValues))
    });
};

export const createNumText = (type, number) => {
    const isPercentageType = type === 'percentage';
    if (isPercentageType) {
        const num = parseFloat(number) * 100
        return `${num.toFixed(1)}%`
    }
    return parseFloat(number).toFixed(1);
}
