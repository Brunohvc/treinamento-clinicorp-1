import { useEffect, useState } from 'react';
import './App.css';
import crud from './config/crud';

function App() {
  const [filterData, setFilter] = useState('');
  const [id, setId] = useState('');
  const [first, setFirst] = useState('');
  const [last, setLast] = useState('');
  const [listUsers, setListUsers] = useState([]);

  useEffect(() => {
    searchUser();
  }, [searchUser, filterData]);

  const searchUser = () => {
    const filters = [];

    const filterName = {
      property: 'first',
      operator: '>=',
      value: filterData
    };

    filters.push(filterName);

    crud.get("users", filters).then(listUser => {
      console.log(listUser);
      setListUsers(listUser);
    }).catch(console.error);
  }

  const addRegister = () => {
    crud.save("users", mountUser())
      .then(user => {
        console.log('USER:', user);
        searchUser();
      }).catch(console.error);
  }

  const changeRegister = () => {
    crud.save("users", mountUser(), id)
      .then(user => {
        console.log('USER:', user);
        searchUser();
      }).catch(console.error);
  }

  const deleteRegister = (id) => {
    crud.delete("users", id)
      .then(data => {
        console.log('USER:', data);
        searchUser();
      }).catch(console.error);
  }

  const mountUser = () => {
    return { first, last };
  }

  return (
    <div className="App">
      ID: <input value={id} onChange={e => { setId(e.target.value) }} /> <br />
      FIRST: <input value={first} onChange={e => { setFirst(e.target.value) }} /><br />
      LAST: <input value={last} onChange={e => { setLast(e.target.value) }} /><br />
      <button onClick={addRegister} > Adicionar </button><br />
      <button onClick={changeRegister} > Alterar </button><br /><br /><br />

      FILTER: <input value={filterData} onChange={e => { setFilter(e.target.value) }} /><br /><br /><br />
      {
        listUsers.map(user => (<div>{user.id} {user.first}<button onClick={() => setId(user.id)}>E</button> <button onClick={() => deleteRegister(user.id)}>X</button></div>))
      }
    </div>
  );
}

export default App;
