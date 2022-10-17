import React, { useState, /*useEffect,*/ useRef } from 'react';
import {
  TextField,
  SelectField,
  Button,
  TextAreaField,
  Text
} from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

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
    <form onSubmit={handleSubmit}>
      <div className="input-fields">
        <TextField
          label={<Text
            fontWeight='bold'
            fontSize='large'
          >
            Name
          </Text>}
          placeholder='Add a name'
          value={input}
          onChange={handleNameChange}
          name='name'
          ref={inputRef}
          variation="primary"
        />
        <TextAreaField
          label={<Text
            fontWeight='bold'
            fontSize='large'
          >
            Description
          </Text>}
          placeholder='Add a description'
          value={description}
          onChange={handleDescriptionChange}
          name='description'
          ref={inputRef}
          variation="primary"
        />
      </div>
      <section>
        <SelectField label={<Text fontWeight='bold' fontSize='large'> Priority </Text>} name="priority" id="priority" value={priority} onChange={handlePriorityChange} ref={inputRef}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </SelectField>
        <SelectField label={<Text fontWeight='bold' fontSize='large'> PrioStatusrity </Text>} name="status" id="status" value={status} onChange={handleStatusChange} ref={inputRef}>
          <option value="active">Active</option>
          <option value="inactive">Inactive</option>
          <option value="onHold">On Hold</option>
        </SelectField>
      </section>
      <Button className="colorful-button" margin="5px" onClick={handleSubmit} >
        Add todos
      </Button>
    </form >
  );
}

