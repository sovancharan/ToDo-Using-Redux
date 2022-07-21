import React, { useState } from 'react';
import '../Todo/Todo.css';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, deleteTodo, removeTodo } from '../../Actions/index';
// import { Button } from 'bootstrap';

const Todo = () => {
    const [inputData, setInputData] = useState('');

    const list = useSelector((state) => state.todoReducers.list);
    console.log('list=', list);
    const dispatch = useDispatch();
    //   console.log('dispatch=', dispatch(addTodo(inputData)))
    return (
        <>
            <div className="main-div">
                <div className="child-div">
                    <figure>
                        <figcaption>Add your List Here ✌️ </figcaption>
                    </figure>
                    <div className="addItems">
                        <input
                            type="text"
                            placeholder="✍️ Add Items..."
                            value={inputData}
                            onChange={(event) =>
                                setInputData(event.target.value)
                            }
                        />
                        <i
                            class="fa fa-plus add-btn"
                            onClick={() => {
                                dispatch(addTodo(inputData), setInputData(''));
                            }}
                        ></i>
                    </div>

                    <div className="showItems">
                        {list.map((elem) => {
                            return (
                                <div className="eachItem" key={elem.id}>
                                    <h3>{elem.list}</h3>
                                    <i
                                        class="far fa-trash-alt add-btn"
                                        title="Delete Item"
                                        onClick={() => {
                                            dispatch(deleteTodo(elem.id));
                                        }}
                                    ></i>
                                </div>
                            );
                        })}
                    </div>
                    <div className="showItems">
                        <button
                            variant="secondary"
                            className="fs-2 fw-bolder px-2 py-1"
                            onClick={() => dispatch(removeTodo())}
                        >
                            Remove All{' '}
                        </button>{' '}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Todo;
