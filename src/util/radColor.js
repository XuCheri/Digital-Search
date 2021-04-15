/*
 * @Author: your name
 * @Date: 2021-04-15 00:18:40
 * @LastEditTime: 2021-04-15 21:52:25
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Digital-Search\src\util\radColor.js
 */


var colors = ["#f26395", "#62efab", "#ef7658", "#ffe868", "#80e3f7", "#d781f9"];

export function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}
export default function () {
    var index = getRandom(0, colors.length - 1);
    return colors[index];
}