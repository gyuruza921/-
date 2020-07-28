
"use strict"

// 
// 配列をクイックソートする関数
// 

function quickSort(array, start, end){

    // startとendが逆転していたら終わり
    if(end <= start){
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

        while(array[left] < pivot) { left++ } // pivot以上の値を左から探す
        while(array[right] > pivot) { right-- } // pivot以下の値を右から探す
        if(left >= right) { break; } // leftとrightが逆転したらwhileを抜ける
        [array[left], array[right]] = [array[right], array[left]]; // 値の入れ替え
        left++;
        right--;

    }

    // 配列の前半と後半をそれぞれクイックソート
    quickSort(array, start, left - 1);
    quickSort(array, right + 1, end);
    
}


// 
// 降順にソートする関数関数
// 

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

        while(array[left] < pivot) { left++ } // pivot以上の値を左から探す
        while(array[right] > pivot) { right-- } // pivot以下の値を右から探す
        if(left >= right) { break; } // leftとrightが逆転したらwhileを抜ける
        [array[left], array[right]] = [array[right], array[left]]; // 値の入れ替え
        left++;
        right--;

    }

    // 配列の前半と後半をそれぞれ降順にクイックソート

}

const array = [10, 8, 4, 3, 7, 1, 5, 6, 2, 9];
quickSort(array, 0, array.length - 1);
console.log(array);