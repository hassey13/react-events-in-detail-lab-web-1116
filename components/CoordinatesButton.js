import React from 'react';

 class CoordinatesButton extends React.Component {
   constructor() {
     super()

     this.handleClick = this.handleClick.bind(this);
   }

   handleClick(e) {
    this.props.onReceiveCoordinates([e.clientX, e.clientY]);
   }

   render() {
     return (
       <button onClick={this.handleClick}>
        Click Me!
       </button>
     );
   }
 }

 module.exports = CoordinatesButton;

//  COORDINATESBUTTON

// In the components/CoordinatesButton.js file, create a CoordinatesButton React component.

// This component takes in one prop: onReceiveCoordinates. This prop is a _function). (This props is only passed in the test suite, you will have errors in the browser)

// When the button is clicked, create an array with two elements: the X and Y coordinates of the mouse. Find these using the event data.

// The onReceiveCoordinates callback prop is then called with these coordinates.
