import React from 'react';
import './List.css';
import Card from './Card';

function List(props) {
  return (
    <section className='List'>
        <header className='List-header'>
            {props.header}
        </header>
        <div className='List-cards'>
            {props.cards.map((card) =>
            <Card
                key={card.id}
                id={card.id}
                title={card.title}
                content={card.content}
                onDeleteCard={props.onDeleteCard}
            />
            )}
            <button type='button' onClick={ () => props.onAddCard(props.id)} className='List-add-button'>
                + Add Random Card
            </button>
        </div>
    </section>
  );
}

export default List;