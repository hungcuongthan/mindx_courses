
#include <iostream>
#include <iomanip>
using namespace std;

int main()
{

    int threeDigitsNumber;

    cout << "Enter a three-digit number: ";

    cin >> threeDigitsNumber;

    cout << "Digits sum = " << threeDigitsNumber / 100 << " + " << ((threeDigitsNumber / 10) % 10) << " + " << threeDigitsNumber % 10 << " = " << threeDigitsNumber / 100 + ((threeDigitsNumber / 10) % 10) + threeDigitsNumber % 10 << endl;
}