#include <iostream>
#include <iomanip>
using namespace std;

int a,b;

int main() {
    a =105;
    b = 523;
    
    cout << "a " << a << endl;
    cout << "b " << b << endl;

    cout << a+b << endl;

    cout << a%10 + b%10  << endl;

    a = a +b;
    b = a-b;
    a = a-b;

    cout << "a " << a << endl;
    cout << "b " << b << endl;
}