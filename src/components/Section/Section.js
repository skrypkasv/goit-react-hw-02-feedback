import React from 'react';

export default function Section({ title, children }) {
  return (
    <div>
      <h2 className="title">{title}</h2>
      {children}
    </div>
  );
}
