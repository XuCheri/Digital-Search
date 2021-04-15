/*
 * @Author: your name
 * @Date: 2021-04-15 20:55:50
 * @LastEditTime: 2021-04-15 21:03:28
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Digital-Search\src\util\number.js
 */
import isPrime from "./isPrime"
export default class NumberTimer {
    constructor(duration = 500) {
        this.duration = duration;
        this.number = 1;
        this.onNumberCreated = null; //当一个数字产生时要调用的回调函数
        this.timerId = null;
    }
    start() {
        if (this.timerId) {
            return;
        }
        this.timerId = setInterval(() => {
            this.onNumberCreated && this.onNumberCreated(this.number, isPrime(this.number));
            this.number++;
        }, this.duration);
    }
    stop() {
        clearInterval(this.timerId);
        this.timerId = null;
    }
}