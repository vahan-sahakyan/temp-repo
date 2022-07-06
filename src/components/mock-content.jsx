import React from 'react';
export const MockSample = ({ name }) => (
  <div>
    <br />
    <h3 style={{ color: '#134' }}>{name.toUpperCase()}</h3>
    <h5 style={{ color: 'green' }}>MOCK CONTENT to fill up space FOR TESTING</h5>
    <br />
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, consectetur nisi iusto delectus, provident
      recusandae vero voluptatibus maiores voluptatum rem qui excepturi at omnis fugit dolore quas laudantium!
      Similique, expedita! Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, consectetur nisi iusto
      delectus, provident recusandae vero voluptatibus maiores voluptatum rem qui excepturi at omnis fugit dolore quas
      recusandae vero voluptatibus maiores voluptatum rem qui excepturi at omnis fugit dolore quas laudantium! delectus,
      provident recusandae vero volupta
    </p>
    <br />
  </div>
);
export const MockContent = ({ name }) => (
  <div
    style={{
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '5vw',
      padding: '2em 2vw',
    }}
  >
    <MockSample name={name} />
    <MockSample name={name} />
    <MockSample name={name} />
    <MockSample name={name} />
    <MockSample name={name} />
    <MockSample name={name} />
    <MockSample name={name} />
    <MockSample name={name} />
    <MockSample name={name} />
  </div>
);

export default MockContent;
