/*
 * @Author: your name
 * @Date: 2021-04-15 00:08:46
 * @LastEditTime: 2021-04-15 00:12:36
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Digital-Search\src\util\isPrime.js
 */


export default function (n) {
    if (n < 2) {
        return false;
    }
    for (let i = 2; i <= n - 1; i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
}