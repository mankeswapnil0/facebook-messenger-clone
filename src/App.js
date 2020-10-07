import React, { useState, useEffect } from 'react';
import './App.css';
import { FormControl, Input } from '@material-ui/core';
import Message from './Message';
import db from './firebase';
import firebase from 'firebase';
import FlipMove from 'react-flip-move';
import SendIcon from '@material-ui/icons/Send';
import { IconButton } from '@material-ui/core';

//1hr 50 min
function App() {

  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);
  const [username, setUsername] = useState('');


  useEffect(() => {
    db.collection('messages')
      .orderBy('timestamp', 'desc')
      .onSnapshot(snapshot => {
        setMessages(snapshot.docs.map(doc => ({ id: doc.id, message: doc.data() })))
      })
  }, [])

  useEffect(() => {
    setUsername(prompt('Enter your name'));
  }, [])


  const sendMessage = (event) => {
    event.preventDefault();

    db.collection('messages').add({
      message: input,
      username: username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    //setMessages([...messages, {username: username, text: input}]); //this is appending in the existing input
    setInput('');
  };

  return (
    <div className="App">
      <img src="https://facebookbrand.com/wp-content/uploads/2018/09/Header-e1538151782912.png?w=99&h=99" />
      <h1>THIS IS A FACEBOOK MESSENGER CLONE🚀</h1>
      <h2>Welcome {username}</h2>
      <form className="app_form">
        <FormControl className="app_formcontrol">
          <Input className="app_input" placeholder={"Enter a message..."} value={input} onChange={event => setInput(event.target.value)} />
          <IconButton className="app_iconbutton" disabled={!input} variant="contained" color="primary" type='submit' onClick={sendMessage}>
            <SendIcon />
          </IconButton>
        </FormControl>
      </form>

      <FlipMove>
        {
          messages.map(({ id, message }) => (
            <Message key={id} username={username} message={message} />
          ))
        }
      </FlipMove>

    </div>
  );
}

export default App;
