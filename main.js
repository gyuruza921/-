
"use strict"

// 
// ドキュメント部から各要素を取得
// 

// 配列を作るボタン
const btnStart = document.getElementById("start");

// 出来た配列を表示する
const disp1 = document.getElementById("disp1");

// 作った配列を降順にソートする
const btnSort = document.getElementById("btn2");

// ソートした配列を表示する
const disp2 = document.getElementById("disp2");

// 
// 処理部
// 

// 降順にソートする関数
function quickSortDecend(array, start , end) {

    // start と endが逆転したら終わり
    if(end <= start) {
        return;
    }

    // ピボットは先頭の物にする
    // のちの改良ではここをもう少し工夫する
    const pivot = array[start];

    // 配列の前半と後半に振り分ける
    let left = start;
    let right = end;

    // このままでは無限ループになる
    while(true){

        // この部分での処理を前の関数とは逆にする
        while(array[left] > pivot) { left++ } // pivot以下の値を左から探す
        while(array[right] < pivot) { right-- } // pivot以上の値を右から探す
        if(left >= right) { break; } // leftとrightが逆転したらwhileを抜ける
        [array[left], array[right]] = [array[right], array[left]]; // 値の入れ替え
        left++;
        right--;

    }

    // 配列の前半と後半をそれぞれ降順にクイックソート
    quickSortDecend(array, start, left - 1);
    quickSortDecend(array, right + 1, end)

}

const array = [10, 8, 4, 3, 7, 1, 5, 6, 2, 9];

// 降順にソート
quickSortDecend(array, 0, array.length - 1);
console.log(array);



// 値のランダムな配列を作る

// 空の配列を作る
const array1 = []

// 配列にランダムな値を加える関数
function addRandomValue(array, n) {

    // 配列の長さを決める
    array.length = n;

    // 反復処理
    for(let i = 0; i < n; i++){

        const min = 0;

        const max = Math.floor(n);

        // ランダムな整数を生成する
        const value = Math.floor( Math.random() * (max - min)) + min ;

        // 生成した値が前の値と同じならやり直し
        if(value == array[i - 1]){
            continue;
        }

        // 生成した整数を配列に加える
        array[i] = value;

    }
    
}

addRandomValue(array1, 20);

console.log(array1);

// 
// 操作部
// 

// ボタンを押すと配列を生成し、段落に表示する
btnStart.addEventListener("click",()=>{

    // 配列にランダムな値を追加する
    addRandomValue(array1, 20);
    // 一つ目の段落に表示する
    disp1.innerHTML = array1;

    });

// ボタンを押したら配列をソートして結果を表示する
btnSort.addEventListener( "click",()=>{

    // 配列を降順にソートする
    quickSortDecend(array1, 0, array1.length - 1);

    // 結果を表示する
    disp2.innerHTML = array1;

} )
