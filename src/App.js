import './styles/App.css';
import React, { useEffect, useState } from 'react';
import CatsList from './components/CatsList';
import MySelect from './components/UI/MySelect';
import axios from 'axios';

function App() {
  const [selected, setSelected] = useState('');
  const [cats, setCats] = useState([]);
  const [selectOptions, setSelectOptions] = useState([]);
  const [limit, setLimit] = useState(10);

  useEffect(() => {
    let query_params = {
      limit: limit,
      category_ids: selected && selectOptions.find((item) => item.name === selected).id
    };
    const fetchData = async () => {
      await axios.get('https://api.thecatapi.com/v1/images/search?api_key=d4d110a7-390d-413d-9166-cea135ea6dc1', { params: query_params })
        .then((response) => {
          setCats([...response.data]);
        }, (error) => {
          console.log(error);
        });
    }
    fetchData();
  }, [selected, limit]);

  useEffect(() => {
    const fetchData = async () => {
      await axios.get('https://api.thecatapi.com/v1/categories')
        .then((response) => {
          setSelectOptions(response.data)
        }, (error) => {
          console.log(error);
        });
    }
    fetchData();
  }, []);

  const sortCats = (sort) => {
    setSelected(sort);
  };

  const moreImages = () => {
    setLimit(limit + 10)
  };

  return (
    <div className="App">
      <MySelect value={selected}
        onChange={sortCats}
        options={selectOptions}
        defaultValue='options'
      />
      <CatsList cats={cats} />
      <button onClick={moreImages}>10 more</button>
    </div>
  );
}

export default App;
