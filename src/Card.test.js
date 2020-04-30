import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Card';
import renderer from 'react-test-renderer';

describe('Messages component', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Card />, div);
        ReactDOM.unmountComponentAtNode(div);
      });
      
      it('renders the UI as expected', () => {
          const tree = renderer.create(<Card key='a' title='shit' content='eric the shitcock'/>).toJSON();
          expect(tree).toMatchSnapshot();
      });
});