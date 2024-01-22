#include <iostream>
using namespace std;

int numWays(int M, int T)
{
    if (M == 0 && T == 0)
        return 1;
    if (M < 0 || T < 0)
        return 0;

    return numWays(M - 1, T) + numWays(M, T - 1);
}

int main()
{
    int N;
    cin >> N;

    for (int i = 0; i < N; i++)
    {
        int x, y;
        cin >> x;
        cin >> y;
        cout << numWays(x, y) << endl;
    }

    return 0;
}