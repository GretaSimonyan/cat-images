import React from 'react';

const Cat = (props) => {
  return (
    <div className='Cat' >
      <img src={props.src} style={{ width: '90%', display: 'block' }} alt='cat img' />
    </div>
  );
};

export default Cat;
