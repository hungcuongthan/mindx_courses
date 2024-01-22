#include <iostream>
using namespace std;

int main()
{
    int m, d, k, c;
    cin >> m >> d >> k >> c;

    int gold = 0;
    int durability = d;
    bool impossible = false;

    for (int i = 0; i < m; i++)
    {
        if (durability - k <= 0)
        {
            // repare if drop to 0 or below
            if (durability == k && i != m - 1)
            { // last monster no repare
                durability = d;
                gold += c;
            }
            else if (durability < k)
            {
                impossible = true;
                break;
            }
        }
        durability -= k;
    }

    if (impossible)
    {
        cout << -1 << endl;
    }
    else
    {
        cout << gold << endl;
    }

    return 0;
}