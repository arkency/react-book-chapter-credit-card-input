import React from 'react';
import CreditCardInput from './components/CreditCardInput';

const APP_ROOT = document.createElement('div');
document.body.appendChild(APP_ROOT);

React.render(<CreditCardInput />, APP_ROOT);
