import React, {FC} from 'react';
import "./Link.css";

type LinkProps = {
    url:string, 
    title:string 
}

const Link:FC<LinkProps> = (props:LinkProps) => (
  <a className='InnerLink' href={props.url} target='_blank' rel='noopener noreferrer'>
    {props.title}
  </a>
);

export default Link;
