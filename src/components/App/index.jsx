import React from 'react';
import BillDescriptionStep from '../BillDescriptionStep';

class App extends React.Component {
  state = {
    amount: null,
    description: ''
  };

  onAmountChange = e => {
    this.setState({ amount: parseFloat(e.target.value) });
  };

  onDescriptionChange = e => {
    this.setState({ description: e.target.value });
  };

  render() {
    const { amount, description } = this.state;
    return (
      <BillDescriptionStep
        amount={amount}
        onAmountChange={this.onAmountChange}
        description={description}
        onDescriptionChange={this.onDescriptionChange}
        onNextButton={() => {
          console.log('next');
        }}
      />
    );
  }
}

export default App;
