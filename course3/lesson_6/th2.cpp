#include <iostream>
#include <iomanip>
using namespace std;

int main()
{

    int m, n;

    cout << "Enter a integer value for m: ";

    cin >> m;

    cout << "Enter a integer value for n: ";

    cin >> n;

    cout << "Sum of m%10 and n%10 = " << m % 10 << " + " << n % 10 << " = " << m % 10 + n % 10 << endl;
}