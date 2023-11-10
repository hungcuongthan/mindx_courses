#include <iostream>
#include <stack>
#include <string>
using namespace std;

string encodeString(const string &s)
{
    stack<char> charStack;
    stack<int> countStack;
    string encodedString;

    for (char c : s)
    {
        if (charStack.empty() || charStack.top() != c)
        {
            charStack.push(c);
            countStack.push(1);
        }
        else
        {
            countStack.top()++;
        }
    }

    while (!charStack.empty())
    {
        encodedString = charStack.top() + to_string(countStack.top()) + encodedString;
        charStack.pop();
        countStack.pop();
    }

    return encodedString;
}

int main()
{
    string s;
    cout << "Enter a string: ";
    cin >> s;
    cout << encodeString(s) << endl; // Output: a3b2a3c1
    return 0;
}