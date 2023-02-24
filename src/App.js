import React from "react";
import { sculptureList } from "./data";
import { useState } from "react";

function Button({handleAction, name}) {

  return(
    <button onClick={handleAction}>{name}</button>
  )

}

function ButtonNext({ handleNext }){
  return(
    <button onClick={handleNext}>
      Next
    </button>
  )
}

function Page({ data }){
  const[index, setindex] = useState(0);
  const[hide, sethide] = useState(false);

  function handleNextImage(index) {
    setindex(index+1);
  }

  function hideDetails() {
     sethide(!hide);

  }
  return(
    <>
    <ButtonNext handleNext={() => handleNextImage(index)}></ButtonNext>
    <h2>{data[index].name}</h2>
    <h3>{data[index].artist}</h3>
    <button onClick={hideDetails}>{hide ? 'ShowDetails' : 'HideDetails'}</button> 
    {!hide && <p>{data[index].description}</p> }
    <img src ={data[index].url} alt={data[index].alt} />
    </>
  )

}

 function Interactivity() {

  function handleEvent(key){
    if(key === 'Audio')
    alert('Playing Audio');
    else{
      alert('Playing Vedio');
    }
  }
  return(
    <>
    <h1>Adding Interactivity Course</h1>
    <Button handleAction={() => handleEvent('Audio')} name='PlayAudio'></Button>
    <Button handleAction={() => handleEvent('Vedio')} name='PlayVedio'></Button>
    </>
  );
 }

 function PreventdefaultFunc() {
  const[to, setTo] = useState('Rama');
  const[message, setMessage] = useState('Hello');

  function handleSubmit(e) {
    e.PreventDefault();
    setTimeout(() => {
      console.log(`You said ${message} to ${to}`);
    }, 5000);
  }
  return(
    <React.Fragment>
    <h4>State As Snap Shot Example</h4>
    <form onSubmit={handleSubmit}>
      <label>
        To:{' '}
        <select
          value={to}
          onChange={e => setTo(e.target.value)}>
          <option value="Alice">Alice</option>
          <option value="Bob">Bob</option>
        </select>
      </label>
      <textarea
        placeholder="Message"
        value={message}
        onChange={e => setMessage(e.target.value)}/>
      <button type="submit">submit</button>
    </form>
    </React.Fragment>
  );

}

function StateUpdates(){
  const[getNum, setNum] = useState(0);

  function handleClick() {
    setNum(num => num + 1);
  }

  return(
    <>
    <h4>Queueing a series of state updates</h4>
    <button onClick={() => handleClick()}>+1</button>
    <button onClick={() => {
                  handleClick()
                  handleClick()
                  handleClick()}}>+3</button>
    <h4>Score:{getNum}</h4>
    <textarea value={getNum}/>

    </>
  )

}

  export default function App() {

    return (
      <>
        <Interactivity></Interactivity>
        <Page data={sculptureList}/>
        <PreventdefaultFunc/>
        <StateUpdates/>
      </>
     

    )
  }

