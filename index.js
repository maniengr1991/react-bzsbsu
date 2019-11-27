import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';

const PrintName = (props) => {
  return <div onClick={props.onClick} className={props.className}>This is {props.name}</div>;
}

const Clicked = () =>{
  alert('clicked');
}

const App = React.createElement('div', {className:"test"}, 'Hi ', <PrintName name={"Abc"} onClick={Clicked} className={'test1'} />);


  



render(App, document.getElementById('root'));
