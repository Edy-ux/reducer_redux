import * as React from 'react';
import './style.css';

type PerssonProps = {
  name: string | number;
  age: number;
};

type ContactProps = {
  phone: string;
  email: string;
};

type AndressProps = {
  city: string;
  zipCode: string;
};



type CustomerProps = PerssonProps;

function TypePage({name }: CustomerProps) {
console.log(name);
  return (
    <div>
      <h2>typescript Conceitos</h2> 
      <span>{name}</span>
       
    </div>
  );
}

<TypePage name="Ednei" age={32}/>
