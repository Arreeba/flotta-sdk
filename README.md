# Flotta-sdk
### Flotta API wrapper

- [Installation](#installation)
- [Configuration](#configuration)
- [API Reference](#api)

### Installation
 
```bash
npm i flotta-sdk --save
```

```bash
yarn add flotta-sdk
```

### Configuration

```javascript
import Flotta from 'flotta-sdk';

const client = new Flotta(
  'api-key',
  'flotta-endpoint',
);
```

### API

- addBusinessHolder

```javascript
client.addBusinessHolder({
  fisrtName: 'SDK',
  secondName: 'SDK',
  email: 'sdk@sdk.com',
  password: 'sdk',
})
  .then(token => console.log(token))
  .catch(err => { throw new Error(err); });
```

- addStore

```javascript
client.addStore(token, {
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
})
  .then(store => console.log(store))
  .catch(err => { throw new Error(err); });
```

- addShipment

```javascript
client.addShipment(token, storeId, {
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
})
  .then(shipment => console.log(shipment))
  .catch(err => { throw new Error(err); });
```