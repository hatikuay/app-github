import React, {FC} from 'react';
import "./List.css"

type Item = {
    label:string;
    value: JSX.Element | string;
} 

type ListProps = {
    items:Array<Item>;
    title:string;
}

const List:FC<ListProps> = (props:ListProps) => (
  <>
    <h2 className='Title'>{props.title}</h2>
    <ul className='ListWrapper'>
      {props.items.map(item => (
        <li className='ListItem' key={item.label}>
          <span className='Label'>{item.label}</span>
          {item.value}
        </li>
      ))}
    </ul>
  </>
);

export default List;
