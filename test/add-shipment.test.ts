import Flotta from '../src';

describe('Flotta.AddShipment', () => {
  it('should add shipment', () => {

    const client = new Flotta('your-api-key', 'http://localhost:5000');
    const token = 'your-token';
    const storeId = 'store-id';

    client.GraphQLClient.mutate = jest.fn();

    client.AddShipment(token, storeId, {
      delivery: {
        customer: {
          firstName: 'Darth',
          secondName: 'Vader',
          phone: '3663189261',
          email: 'darth@starwars.com'
        },
        address: {
          country: 'IT',
          city: 'Roma',
          street: 'Via Giovanni Giolitti',
          number: '10',
          zipCode: '20124'
        },
        position: {
          coordinates: [9.213473, 45.466794],
          type: 'Point'
        },
        time: '2017-08-30T19:33:51.149+0000',
        intercom: 'Death Star'
      },
      order: {
        paymentMethod: 'CASH',
        currency: 'EUR',
        total: 1600,
        fee: 100,
        items: [
          {
            name: 'Pizza Margherita',
            quantity: 1,
            price: 500,
          },
          {
            name: 'Hamburger',
            quantity: 1,
            price: 1000,
            description: 'Hamburger con insalata, pomodoro e formaggio'
          }
        ],
        notes: 'hamburger cottura al sangue, grazie.'
      },
      notes: 'in fondo al cortile a destra'
    });

    const mockedMutation = client.GraphQLClient.mutate;

    expect(mockedMutation.mock.calls.length).toBe(1);

  });
});