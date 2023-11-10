#include <iostream>
#include <string>
using namespace std;

class flightTicket
{
private:
    string tenchuyen;
    string ngaybay;
    double giave;

public:
    // Constructor
    flightTicket(string num = "", string date = "", double price = 0.0)
    {
        tenchuyen = num;
        ngaybay = date;
        giave = price;
    }

    // Destructor
    ~flightTicket()
    {
        cout << "Flight ticket object destroyed" << endl;
    }

    // Setters
    void setFlightNum(string num)
    {
        tenchuyen = num;
    }

    void setFlightDate(string date)
    {
        ngaybay = date;
    }

    void setTicketPrice(double price)
    {
        giave = price;
    }

    // Getters
    string getFlightNum()
    {
        return tenchuyen;
    }

    string getFlightDate()
    {
        return ngaybay;
    }

    double getTicketPrice()
    {
        return giave;
    }

    // Input and output methods
    void input()
    {
        cout << "Enter flight number: ";
        cin >> tenchuyen;

        cout << "Enter flight date: ";
        cin >> ngaybay;

        cout << "Enter ticket price: ";
        cin >> giave;
    }

    void output()
    {
        cout << "Flight number: " << tenchuyen << endl;
        cout << "Flight date: " << ngaybay << endl;
        cout << "Ticket price: " << giave << endl;
    }
};

class Nguoi
{
private:
    string hoten;
    string gioitinh;
    int tuoi;

public:
    // Constructor
    Nguoi(string _hoten = "", string _gioitinh = "", int _tuoi = 0)
    {
        hoten = _hoten;
        gioitinh = _gioitinh;
        tuoi = _tuoi;
    }

    // Destructor
    ~Nguoi()
    {
        cout << "Nguoi object removed" << endl;
    }

    // Input and output methods
    void input()
    {
        cout << "Enter Full name: ";
        cin >> hoten;

        cout << "Enter gender: ";
        cin >> gioitinh;

        cout << "Enter age: ";
        cin >> tuoi;
    }

    void output()
    {
        cout << "Full Name: " << hoten << endl;
        cout << "Gender: " << gioitinh << endl;
        cout << "Age: " << tuoi << endl;
    }
};

class hanhkhach : public Nguoi
{
private:
    flightTicket *ticket;
    int numTickets;

public:
    // Constructor
    hanhkhach(string _hoten = "", string _gioitinh = "", int _tuoi = 0, flightTicket *t = nullptr, int num = 0)
        : Nguoi(_hoten, _gioitinh, _tuoi)
    {
        ticket = t;
        numTickets = num;
    }

    // Destructor
    ~hanhkhach()
    {
        cout << "Passenger object destroyed" << endl;
        delete ticket;
    }

    // Input and output methods
    void input()
    {
        Nguoi::input();

        cout << "Enter number of tickets: ";
        cin >> numTickets;
        cin.ignore();

        ticket = new flightTicket[numTickets];
        for (int i = 0; i < numTickets; i++)
        {
            cout << "Enter ticket #" << i + 1 << " details:" << endl;
            ticket[i].input();
        }
    }

    void output()
    {
        Nguoi::output();

        cout << "Number of tickets: " << numTickets << endl;
        for (int i = 0; i < numTickets; i++)
        {
            cout << "Ticket #" << i + 1 << " details:" << endl;
            ticket[i].output();
        }
    }

    // Total method
    double Total() const
    {
        double total = 0.0;
        for (int i = 0; i < numTickets; i++)
        {
            total += ticket[i].getTicketPrice();
        }
        return total;
    }
};

// Comparator function for sorting passengers by total amount to pay in descending order
bool comparePassengers(const hanhkhach &h1, const hanhkhach &h2)
{
    return h1.Total() > h2.Total();
}

int main()
{
    int n;
    cout << "Enter number of hanhkhachs: ";
    cin >> n;
    cin.ignore(); // Ignore the newline character left in the input buffer

    hanhkhach *hanhkhachs = new hanhkhach[n];
    for (int i = 0; i < n; i++)
    {
        cout << "Enter details for hanhkhach #" << i + 1 << ":" << endl;
        hanhkhachs[i].input();
    }

    // Print the list of hanhkhachs and their total amount to pay
    cout << "List of hanhkhachs and their total amount to pay:" << endl;
    for (int i = 0; i < n; i++)
    {
        hanhkhachs[i].output();
        cout << "Total amount to pay: " << hanhkhachs[i].Total() << endl;
        cout << endl;
    }

    // Sort the list of hanhkhachs by total amount to pay in descending order
    sort(hanhkhachs, hanhkhachs + n, comparePassengers);

    // Print the sorted list of hanhkhachs and their total amount to pay
    cout << "Sorted list of hanhkhachs by total amount to pay (descending order):" << endl;
    for (int i = 0; i < n; i++)
    {
        hanhkhachs[i].output();
        cout << "Total amount to pay: " << hanhkhachs[i].Total() << endl;
        cout << endl;
    }

    delete[] hanhkhachs;

    return 0;
}