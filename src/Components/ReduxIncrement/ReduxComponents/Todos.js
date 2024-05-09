import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import getAllTodosAction from './Services/Actions/TodosActions';

const Todos = () => {
  const { isLoading, todos, error } = useSelector(state => state.todos);

  console.log(todos);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllTodosAction());
  }, [dispatch]);

  return (
    <div>
      <h1>Todos App</h1>
      {isLoading && <h3>Loading....</h3>}
      {error && <h3>Error : {error.message}</h3>}
      <section>
        {todos && todos.map(todo => (
          <article key={todo.id}>
            <h3>{todo.id}</h3>
            <h3>{todo.title}</h3> {/* Corrected 'titile' to 'title' */}
            <p>hello</p>
          </article>
        ))}
      </section>
    </div>
  );
};

export default Todos;
