/*
 * @Author: your name
 * @Date: 2021-04-15 21:55:50
 * @LastEditTime: 2021-04-15 22:00:15
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Digital-Search\src\page\event.js
 */
import NumberTimer from "../util/number";
import appendNumber from "./appendNumber";
var n = new NumberTimer(500);
n.onNumberCreated = function (n, isPrime) {
    appendNumber(n, isPrime);
}
var isStart = false;
window.onclick = function () {
    if (isStart) {
        n.stop()
        isStart = false;
    } else {
        n.start();
        isStart = true;
    }
}