
#include <iostream>
#include <iomanip>
using namespace std;

int main()
{
    int fourDigitsNumber;

    cout << "Enter a four-digit number: ";

    cin >> fourDigitsNumber;

    int firstDigit = fourDigitsNumber / 1000;
    int secondDigit = (fourDigitsNumber / 100) % 10;
    int thirdDigit = (fourDigitsNumber / 10) % 10;
    int fourthDigit = fourDigitsNumber % 10;

    int reversedNumber = fourthDigit * 1000 + thirdDigit * 100 + secondDigit * 10 + firstDigit;

    cout << "Reversed number: " << reversedNumber << endl;
}