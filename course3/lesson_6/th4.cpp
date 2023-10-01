
#include <iostream>
#include <iomanip>
using namespace std;

int main()
{

    int twoDigitsNumber;

    cout << "Enter a two-digit number: ";

    cin >> twoDigitsNumber;

    cout << "Digits sum = " << twoDigitsNumber / 10 << " + " << twoDigitsNumber % 10 << " = " << twoDigitsNumber / 10 + twoDigitsNumber % 10 << endl;
}