import React from 'react';
import ReactDOM from 'react-dom';
import List from './List';
import renderer from 'react-test-renderer';

describe('Messages component', () => {
    it('renders without crashing', () => {
        const cards = [
            { id: 'a', title: 'First card', content: 'lorem ipsum' },
            { id: 'b', title: 'Second card', content: 'lorem ipsum' },
            { id: 'c', title: 'Third card', content: 'lorem ipsum' }
          ];
        const div = document.createElement('div');
        ReactDOM.render(<List header='list' key='listid' cards={cards}/>, div);
        ReactDOM.unmountComponentAtNode(div);
      });
      
      it('renders the UI as expected', () => {
          const cards = [
            { id: 'a', title: 'First card', content: 'lorem ipsum' },
            { id: 'b', title: 'Second card', content: 'lorem ipsum' },
            { id: 'c', title: 'Third card', content: 'lorem ipsum' }
          ];
          const tree = renderer.create(<List header='list' key='listid' cards={cards} />).toJSON();
          expect(tree).toMatchSnapshot();
      });
});