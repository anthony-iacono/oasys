const sample = {
  customers: [
    {id: 1, name: 'Leatha Ullrich'},
    {id: 2, name: 'Rocio Schuster'},
    {id: 3, name: 'Kelvin Schiller'}
  ],
  customer: {id: 9, name: 'Leatha Ullrich'},
  rooms: [
    {
      "number": 1,
      "roomType": "residential suite",
      "bidet": true,
      "bedSize": "queen",
      "numBeds": 1,
      "costPerNight": 358.4
    },
    {
      "number": 2,
      "roomType": "suite",
      "bidet": false,
      "bedSize": "full",
      "numBeds": 2,
      "costPerNight": 477.38
    },
    {
      "number": 3,
      "roomType": "single room",
      "bidet": false,
      "bedSize": "king",
      "numBeds": 1,
      "costPerNight": 491.14
    },
    {
      "number": 12,
      "roomType": "single room",
      "bidet": false,
      "bedSize": "twin",
      "numBeds": 2,
      "costPerNight": 172.09
    },
    {
      "number": 15,
      "roomType": "residential suite",
      "bidet": false,
      "bedSize": "full",
      "numBeds": 1,
      "costPerNight": 294.56
    },
    {
      "number": 24,
      "roomType": "suite",
      "bidet": false,
      "bedSize": "queen",
      "numBeds": 1,
      "costPerNight": 327.24
    }
  ],
  manager: 'Manager',
  bookings: [
    {
      "id": "5fwrgu4i7k55hl6sz",
      "userID": 9,
      "date": "2020/04/22",
      "roomNumber": 15,
      "roomServiceCharges": []
    },
    {
      "id": "5fwrgu4i7k55hl6t5",
      "userID": 43,
      "date": "2020/01/24",
      "roomNumber": 24,
      "roomServiceCharges": []
    },
    {
      "id": "5fwrgu4i7k55hl6t6",
      "userID": 13,
      "date": "2020/01/10",
      "roomNumber": 12,
      "roomServiceCharges": []
    }
  ],
  newBooking: {
    date: "2021/10/01",
    id: "1632368656175",
    roomNumber: 4,
    userID: 1
  }
}

export default sample;
