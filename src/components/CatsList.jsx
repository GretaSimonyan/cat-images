import React from 'react';
import Cat from './Cat';

function CatsList({cats}) {
  return (
    <div className="CatsList">
      {cats.map(item => {
        console.log(item.id);
        return <Cat key={item.id} src={item.url} post={item}/>}
      )}
    </div>
  );
}

export default CatsList;
