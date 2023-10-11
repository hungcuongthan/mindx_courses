
#include <iostream>
#include <iomanip>
using namespace std;

int main()
{
    int fourDigitNumber;

    cout << "Enter a four-digit number: ";

    cin >> fourDigitNumber;

    int firstDigit = fourDigitNumber / 1000; // Lay so hang nghin
    int remainDigits = fourDigitNumber % 1000;

    int secondDigit = remainDigits / 100; // Lay so hang tram
    remainDigits = remainDigits % 100;

    int thirdDigit = remainDigits / 10; // Lay so hang chuc

    int fourthDigit = remainDigits % 10;

    int reversedNumber = fourthDigit * 1000 + thirdDigit * 100 + secondDigit * 10 + firstDigit;

    cout << "Reversed number: " << reversedNumber << endl;

    cout << 'A' << endl;
}