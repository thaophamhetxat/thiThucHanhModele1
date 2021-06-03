let Arr = prompt('nhap vao chuoi ky tu bat ky: ');
var newArr = Arr.split('');
console.log(newArr);
function check(newArr) {
    let Counter = 0;
    for (let i = 0; i < newArr.length; i++) {
        if (newArr[i] == 'a' || newArr[i] == 'e' || newArr[i] == 'i' || newArr[i] == 'o' || newArr[i] == 'u') {
            Counter++;
            console.log(Counter);
        }
    }return Counter;
}
if (check(newArr)==0){
    alert('false');
}else {
    alert('so nguyen am trong chuoi la : '+ check(newArr));
}