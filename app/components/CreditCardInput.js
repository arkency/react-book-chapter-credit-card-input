import React from 'react';

class CreditCardInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = { number: '' };
    this.handleChange = this.handleChange.bind(this);
  }

  process(number) {
    return { text: '', type: '' };
  }
  
  handleChange(e) {
    let newValue = e.target.value;
    let newNumber = this.filterWhitespace(newValue);
    this.setState({ number: newNumber });
  }

  filterWhitespace(text) {
    return text.replace(/\s/g, '');
  }

  render () {
    let { text: text, type: type } = this.process(this.state.number);
    return (
      <div>
        <input type="text" value={text} onChange={this.handleChange} />
        <input type="text" value={type} readOnly />
      </div>
    );
  }
}

export default CreditCardInput;