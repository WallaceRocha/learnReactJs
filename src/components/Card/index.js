import React, { useRef } from 'react';

import { Container, Label } from './styles';

import { useDrag, useDrop } from 'react-dnd';

export default function Card({data}) {
  
  const ref = useRef();

  const [{isDragging}, dragRef] =  useDrag({
    item: { type: 'CARD', id: data.id},
    collect: monitor => ({
      isDragging: monitor.isDragging(),
    })
  });

  const [,dropRef] = useDrop({
    accept: 'CARD',
    hover(item, monitor){
      
    },
    drop(item){
      
      console.log(data.id)
    }
  })

  dragRef(dropRef(ref))

  return (
    <Container ref={ref} isDragging={isDragging}>
      <header>
        {data.labels.map(label => <Label key={label} color={label}/> )}
      </header>
      <p>{data.content}</p>
      {data.user &&<img src={data.user} alt="avatar"/> }
    </Container>
  );
}
