// let html='';
// for (i = 1; i <= 10; i++) {
//     html = html + '<tr>';
//     for (j = 1; j <= 10; j++) {
//         html = html + '<td>' + i * j + '</td>';
//     }
//     html = html + '</tr>';
// }
// document.getElementById('demo').innerHTML=html;
let html = '';
let i = 1;
let j = 1;
while (i <= 10) {
    html = html + '<tr>';
    while (j <= 10) {
        html = html + '<td>' + i * j + '</td>';
        j++;
    }
    i++;
    j = 1;
    html = html + '</tr>';
}
document.getElementById('demo').innerHTML = html;