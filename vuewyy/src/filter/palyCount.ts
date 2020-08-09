
// 播放量数字转换
export function playCount(value: number) {
    if (value > 10000) {
        return Math.floor(value / 10000) + '万';
    } else {
        return value;
    }
}