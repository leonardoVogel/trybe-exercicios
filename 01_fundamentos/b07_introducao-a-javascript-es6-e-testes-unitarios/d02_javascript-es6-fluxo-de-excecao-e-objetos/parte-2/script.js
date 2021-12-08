const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      marguerita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      }
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      }
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    }
  },
  payment: {
    total: 60,
  },
};

const customerInfo = (order) => {
  const deliveryPerson = order.order.delivery.deliveryPerson;
  const name = order.name;
  const phoneNumber = order.phoneNumber;
  const addressStreet = order.address.street
  const addressNumber = order.address.number
  const addressApartment = order.address.apartment

  console.log(`Olá ${deliveryPerson}, entrega para: ${name}, Telefone: ${phoneNumber}, R. ${addressStreet}, Nº: ${addressNumber}, AP: ${addressApartment}`);
}
customerInfo(order);

const orderModifier = (order) => {
  // Adicione abaixo as informações necessárias.
  const name = order.name = 'Luiz Silva';
  const foodOrder = Object.keys(order.order.pizza).join(', ');
  const drinkOrder = Object.keys(order.order.drinks).join(', ');
  const payment = order.payment.total = '50';

  console.log(`Olá ${name}, o total do seu pedido de ${foodOrder}, ${drinkOrder} é R$${payment}!`);
}

orderModifier(order);