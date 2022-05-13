import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

describe('App tests', () =>{

    it('renders without crashing', () => {
      const div = document.createElement('div');
      ReactDOM.render(<App />, div);
    });
    it ('Only truly test', () =>{
        expect(true).toBe(true)
    })
})