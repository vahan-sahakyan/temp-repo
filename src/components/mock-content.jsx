import React from 'react';
const MockSample = ({ name }) => (
  <>
    <br />
    <h3 style={{ color: '#444' }}>{name.toUpperCase()}</h3>
    <h5 style={{ color: 'green' }}>MOCK CONTENT to fill up space FOR TESTING</h5>
    <br />
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, consectetur nisi iusto delectus, provident
      recusandae vero voluptatibus maiores voluptatum rem qui excepturi at omnis fugit dolore quas laudantium!
      Similique, expedita! Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, consectetur nisi iusto
      delectus, provident recusandae vero voluptatibus maiores voluptatum rem qui excepturi at omnis fugit dolore quas
      recusandae vero voluptatibus maiores voluptatum rem qui excepturi at omnis fugit dolore quas laudantium!
      Similique, expedita! Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, consectetur nisi iusto
      delectus, provident recusandae vero voluptatibus maiores voluptatum rem qui excepturi at omnis fugit dolore quas
      recusandae vero voluptatibus maiores voluptatum rem qui excepturi at omnis fugit dolore quas laudantium!
      Similique, expedita! Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, consectetur nisi iusto
      delectus, provident recusandae vero voluptatibus maiores voluptatum rem qui excepturi at omnis fugit dolore quas
      recusandae vero voluptatibus maiores voluptatum rem qui excepturi at omnis fugit dolore quas laudantium!
      Similique, expedita! Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, consectetur nisi iusto
      delectus, provident recusandae vero voluptatibus maiores voluptatum rem qui excepturi at omnis fugit dolore quas
      laudantium! Similique, expedita!
    </p>
  </>
);
const MockContent = ({ name }) => (
  <>
    <MockSample name={name} />
    <MockSample name={name} />
    <MockSample name={name} />
    <MockSample name={name} />
    <MockSample name={name} />
    <MockSample name={name} />
  </>
);

export default MockContent;
