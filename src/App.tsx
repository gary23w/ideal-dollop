import React, { useState } from 'react';

import TodoList from './components/SearchList';
import NewSearch from './components/NewSearch';
import { SEARCH } from './search.model';

const App: React.FC = () => {
  const [searches, setSearches] = useState<SEARCH[]>([]);

  const searchAddHandler = (text: string) => {
      setSearches(prevTodos => [...prevTodos, 
        {
          id: Math.random().toString(),
           text: text,
           response: "TEST"
          }]);
  }

  const searchDeleteHandler = (todoid: string) => {
    setSearches(prevTodos => {
      return prevTodos.filter(todo => todo.id !== todoid);
    })
  }
  return (<div className="App">
    <NewSearch onAddSearch={searchAddHandler} />
    <TodoList items={searches} onDeleteSearch={searchDeleteHandler} />
  </div>);
}

export default App;
