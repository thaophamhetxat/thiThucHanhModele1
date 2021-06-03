let arr = [1,2,3,5,6];
let Search = prompt("Nhập vào giá trị cần tìm: ");

function Check(Search) {
    let first = -1;
    for (let i = 0; i < arr.length; i++) {
        if (Search == arr[i]) {
            first = i;
        }
    }
    return first;
}
if (Check(Search) == -1) {
    alert("Không có giá trị cần tìm trong mảng!");
} else {
    alert('giá trị cần tìm là:'+ [Check(Search)]);
}