import React from 'react';
import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'

const BerChar = ({ book }) => {
  if (book.length == 0) {
    return;
  }
  const chatData = book.map(it => ({
    name: it.name,
    price: it.visit_price
  }))

  return (
    <div style={{ width: "100%", height: 500 }}>
      <ResponsiveContainer>
        <BarChart
          data={chatData}
          barSize={40}

          margin={{ top: 20, bottom: 20 }}
        >
          <CartesianGrid strokeDasharray="5 5" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip formatter={(t) => [`${t} : taka`]} />
          <Bar dataKey="price" fill='#8884d8' radius={4} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default BerChar;