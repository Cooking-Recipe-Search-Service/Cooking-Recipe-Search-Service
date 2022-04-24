export const COOKING_TIME_MAPPER = <Record<string, readonly number[]>>{
    'до 30 минут': [0, 30],
    'от 30 до 1 часа': [31, 60],
    'от 1 часа до 2-х часов': [61, 120],
    'более 2 часов': [121],
};
