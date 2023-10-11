#include <iostream>
#include <cmath>
using namespace std;
/**
 * int x;   => int a[5];
 * int x=3  => int a[5]= {1, 2, 3, 5, 9};
 *          => int a[] = {1, 2, 3};
 * int a[5];   //=> [?][?][?][?][?] => do IDE quy uoc   
    cout << a[0] << " " << a[4] << endl; //0? 0?

    int b[5] = { 1, 2, 3, 4, 5 };
    cout << b[0] << " " << b[0] << endl; //1 5

    int c[5] = { 1, 2, 3 };
    cout << c[0] << " " << c[4] << endl; //1 0

    int d[] = { 5, 2, 3 };
    cout << d[0] << " " << d[4] << endl; //1 lỗi
    //dự đoán kết các lệnh cout???
*/

//Viet ham nhap vao mang Arr voi N so nguyen cho biet truoc [#DungLenh_For]
//3
//1 4 6 => n=3, arr={1, 4, 6}
//Cau 1
void NhapMangFor(int arr[], int &n) {  //lam theo so lan yeu cau!!
    cin >> n;
    for (int i = 0; i < n; i++) cin >> arr[i];
}
//Cau 2
void XuatMang(int arr[], int n) {
    for (int i = 0; i < n; i++) cout << arr[i] <<" ";
    cout << endl;
}
//Viet ham nhap vao mang Arr voi N so nguyen [#DungLenh_While]
//1 4 6 10 => n=4, arr={1,4,6,10}
//Cau 3
void NhapMangWhile(int arr[], int& n) { //lam miet cho toi khi dat yeu cau!!
    n = 0;
    while (cin >> arr[n]) n++;  //khi dung bam Ctrl Z
}
//Cau 4a
bool chkPrime(int n) {
    if (n < 1) return false;
    if (n == 2 || n == 3) return true;
    if (n % 2 == 0)  return false;
    for (int i = 3; i * i <= n; i += 2)
        if (n % i == 0) return false;
    return true;
}
int countPrime(int arr[], int n) {
    int count = 0;
    for (int i = 0; i < n; i++) {
        if (chkPrime(arr[i])) {
            cout << arr[i] << " ";  //xuat SNT ra man hinh
            count++;
        }
    }
    return count;
}
//Cau 4b
bool chkChinhPhuong(int a){
    int x = sqrt(a);
    return (x * x == a);
}
int countSoCP(int arr[], int n) {
    int count = 0;
    for (int i = 0; i < n; i++) {
        if (chkChinhPhuong(arr[i])) {
            cout << arr[i] << " ";  //xuat SNT ra man hinh
            count++;
        }
    }
    return count;
}
//Cau 4c : Them gia tri value vao vi tri thu k => Tu vi tri k dich sang phai
/** arr= {3, 7, 0, 9}   value =10, k=1 => arr={3, 10, 7, 0, 9}
*                       value= 1, k=0  => arr={1, 3, 7, 0, 9}
*                       value -2, k=4  => arr={3, 7, 0, 9,-2} 
*/
void ThemPhanTu(int arr[], int &n, int value, int k) {
    //3 7 0 9 => chen 2
    //3 7 ? 0' 9'
    n++;
    for (int i = n; i > k; i--) {
        arr[i] = arr[i - 1];    //lay so truoc no
    }
    arr[k] = value;
}
//Cau 4d: Xoa vi tri thu k => Tu vi tri k dich sang trai

int main() {
    int a[10], n = 0;
    //NhapMangFor(a, n);
    NhapMangWhile(a, n);
    XuatMang(a, n);
    ThemPhanTu(a, n, -2, 4);
    XuatMang(a, n);
    return 0;
}