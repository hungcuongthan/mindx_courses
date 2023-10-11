#include <iostream>
using namespace std;

int main()
{
    char char1, char2;

    // Input the first character
    cout << "Enter the first character: ";
    cin >> char1;

    // Input the second character
    cout << "Enter the second character: ";
    cin >> char2;

    // Calculate ASCII values manually
    int ascii1 = char1;
    int ascii2 = char2;

    // Output ASCII values
    cout << "ASCII value of " << char1 << ": " << ascii1 << endl;
    cout << "ASCII value of " << char2 << ": " << ascii2 << endl;

    // Calculate and output the sum of ASCII values
    int sum = ascii1 + ascii2;
    cout << "Sum of ASCII values: " << sum << endl;

    return 0;
}
