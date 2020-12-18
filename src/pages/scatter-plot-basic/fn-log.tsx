/* eslint-disable no-console */
export const fnLog = (str: string) => (...rest: any) => {
    console.log(str);
    console.log(...rest);
    console.log('');
};
