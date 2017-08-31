import Flotta from '../src';

describe('Flotta.AddStore', () => {
  it('should add store', () => {

    const client = new Flotta('your-api-key', 'http://localhost:5000');
    const token = 'your-token';

    client.GraphQLClient.mutate = jest.fn();

    client.AddStore(token, {
      address: {
        city: 'Milano',
        street: 'Via Melchiorre Gioia',
        number: '8',
        country: 'IT',
        zipCode: '20186',
      },
      position: {
        type: 'Point',
        coordinates: [0, 0],
      },
      email: 'email@email.com',
      phone: ['123456789'],
      name: 'Vynil'
    });

    const mockedMutation = client.GraphQLClient.mutate;

    expect(mockedMutation.mock.calls.length).toBe(1);

  });
});