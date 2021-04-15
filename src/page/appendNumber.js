/*
 * @Author: your name
 * @Date: 2021-04-15 21:13:21
 * @LastEditTime: 2021-04-15 21:55:41
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Digital-Search\src\page\appendNumber.js
 */
import radColor from "../util/radColor"
import {
    getRandom
} from "../util/radColor"

var divContainer = document.getElementById('divContainer');
var divCenter = document.getElementById('divCenter')
export default function (n, isPrime) {
    var span = document.createElement('span');
    var color = radColor()
    if (isPrime) {
        span.style.color = color;
        createCenterPrimeNumber(n, color)

    }
    span.innerText = n;
    divContainer.appendChild(span);

    createCenterNumber(n);
}

function createCenterNumber(n) {
    divCenter.innerText = n;
}

function createCenterPrimeNumber(n, color) {
    var div = document.createElement('div');
    div.className = 'center';
    div.style.color = color;
    div.innerText = n;
    document.body.appendChild(div);

    // 加入div后，强行让页面重新渲染
    getComputedStyle(div).left;
    div.style.transform = `translate(${getRandom(-150,150)}px,${getRandom(-150,150)}px)`
    div.style.opacity = 0;
}