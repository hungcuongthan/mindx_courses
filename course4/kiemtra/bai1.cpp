#include <iostream>
#include <stack>
#include <string>
using namespace std;

bool isBalance(string s)
{
    stack<char> bracketList;

    for (char ch : s)
    {
        if (ch == '(' || ch == '[' || ch == '{')
        {
            bracketList.push(ch);
        }
        else
        {
            if (bracketList.empty())
            {
                return false;
            }
            if ((ch == ')' && bracketList.top() != '(') ||
                (ch == ']' && bracketList.top() != '[') ||
                (ch == '}' && bracketList.top() != '{'))
            {
                return false;
            }
            bracketList.pop();
        }
    }

    return bracketList.empty();
}

int main()
{
    int N;
    cin >> N;

    for (int i = 0; i < N; i++)
    {
        string s;
        cin >> s;
        cout << (isBalance(s) ? "true" : "false") << endl;
    }

    return 0;
}