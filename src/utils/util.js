
const isNumber = (value) => {
    return /^\d+$/.test(value);
}

/**
 * 數字轉換，將負數 & null 等值轉換成 0
 * 大於該單位時間上限時直接回傳上限值
 */
const timeProcess = (t, unit) => {
    if (t === null || t === undefined) return 0;
    if (t < 0) return 0;
    if (!isNumber(t)) return 0;

    if (unit === 'hours') return t >= 24 ? 23 : t;
    else return t >= 59 ? 59 : t;
}


export {
    timeProcess,
}