
#include <iostream>
#include <iomanip>
using namespace std;

int main()
{

    int a, b;

    cout << "Enter a integer value for a: ";

    cin >> a;

    cout << "Enter a integer value for b: ";

    cin >> b;

    int i = a;
    a = b;
    b = i;

    cout << "a is now " << a << ", b is now " << b << endl;
}