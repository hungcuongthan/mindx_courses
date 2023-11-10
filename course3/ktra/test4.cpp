#include <iostream>
#include <queue>
#include <vector>
using namespace std;

bool isPrime(int n)
{
    if (n < 2)
    {
        return false;
    }

    for (int i = 2; i * i <= n; i++)
    {
        if (n % i == 0)
        {
            return false;
        }
    }

    return true;
}

bool isSuperPrime(int n)
{
    if (!isPrime(n))
    {
        return false;
    }

    while (n > 0)
    {
        if (!isPrime(n))
        {
            return false;
        }
        n /= 10;
    }

    return true;
}

vector<int> superPrimeList(int n)
{
    queue<int> primeQueue;
    vector<int> superPrimeList;

    primeQueue.push(2);
    primeQueue.push(3);
    primeQueue.push(5);
    primeQueue.push(7);

    while (!primeQueue.empty())
    {
        int prime = primeQueue.front();
        primeQueue.pop();

        if (prime <= n && isSuperPrime(prime))
        {
            superPrimeList.push_back(prime);
        }

        if (prime <= n / 10)
        {
            primeQueue.push(prime * 10 + 1);
            primeQueue.push(prime * 10 + 3);
            primeQueue.push(prime * 10 + 7);
            primeQueue.push(prime * 10 + 9);
        }
    }

    return superPrimeList;
}

int main()
{
    int n;
    cout << "Enter a number: ";
    cin >> n;

    vector<int> superPrimes = superPrimeList(n);
    cout << "Super prime numbers less than or equal to " << n << ":" << endl;
    for (int prime : superPrimes)
    {
        cout << prime << " ";
    }
    cout << endl;

    return 0;
}