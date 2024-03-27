import React from 'react';
import './cards.css';

class FancyRadioForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedOption: 'clubs' // Default selected option
    };
  }

  handleChange = (event) => {
    this.setState({
      selectedOption: event.target.value
    });
  };

  render() {
    return (
      <form>
        <input
          type="radio"
          name="fancy"
          autoFocus
          value="clubs"
          id="clubs"
          checked={this.state.selectedOption === 'clubs'}
          onChange={this.handleChange}
        />
        <input
          type="radio"
          name="fancy"
          value="hearts"
          id="hearts"
          checked={this.state.selectedOption === 'hearts'}
          onChange={this.handleChange}
        />
        <input
          type="radio"
          name="fancy"
          value="spades"
          id="spades"
          checked={this.state.selectedOption === 'spades'}
          onChange={this.handleChange}
        />
        <input
          type="radio"
          name="fancy"
          value="diamonds"
          id="diamonds"
          checked={this.state.selectedOption === 'diamonds'}
          onChange={this.handleChange}
        />
        <label htmlFor="clubs">&#9827; Clubs</label>
        <label htmlFor="hearts">&#9829; Hearts</label>
        <label htmlFor="spades">&#9824; Spades</label>
        <label htmlFor="diamonds">&#9830; Diamonds</label>

        <div className="keys">Use left and right keys to navigate</div>
      </form>
    );
  }
}

export default FancyRadioForm;
