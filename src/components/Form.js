import React, { useState, /*useEffect,*/ useRef } from 'react';

export const Form = (props) => {
  const [input, setInput] = useState('');
  const [description, setDescription] = useState('')
  const [priority, setPriority] = useState('1')
  const [status, setStatus] = useState('Active')

  const inputRef = useRef(null);

  // useEffect(() => {
  //   inputRef.current.focus();
  // });

  const handleNameChange = e => {
    setInput(e.target.value);
  };

  const handleDescriptionChange = e => {
    setDescription(e.target.value);
  };

  const handlePriorityChange = e => {
    setPriority(e.target.value);
  };

  const handleStatusChange = e => {
    setStatus(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      name: input,
      description: description,
      priority: priority,
      status: status
    });
    setInput('');
    setDescription('');
    setPriority('');
    setStatus('');
  };

  return (
    <form onSubmit={handleSubmit} className='todo-form'>
      <>
        <input
          placeholder='Add name'
          value={input}
          onChange={handleNameChange}
          name='text'
          className='todo-input'
          ref={inputRef}
        />
        <input
          placeholder='Add description'
          value={description}
          onChange={handleDescriptionChange}
          name='description'
          className='todo-input'
          ref={inputRef}
        />
        <select name="priority" id="priority" value={priority} onChange={handlePriorityChange} ref={inputRef}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
        <select name="status" id="status" value={status} onChange={handleStatusChange} ref={inputRef}>
          <option value="active">Active</option>
          <option value="inactive">Inactive</option>
          <option value="onHold">On Hold</option>
        </select>
        <button onClick={handleSubmit} className='todo-button'>
          Add todo
        </button>
      </>
    </form>
  );
}

