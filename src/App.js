import './App.css';
import React from 'react';


const Validate = ({children}) => {
const validation = (children)=> {

    if(!children) {
      return null;
      }
      // check if it's not an array - do not use map
    if (!Array.isArray(children)) {
      // if its name is validate console log it
      if(children.type.name === 'Validate') {
        console.log('I am a direct child')
        return children
      }
      // if it's not validate check if it has children
      if(children.props.length>0) {
        validation(children.props)
      }
    } else {
      children.map((child) => {
        if(child.type.name === 'Validate') {
          console.log('I was called!')
          return child
        } else if(child.props) {
          console.log(child.props.children)
          validation(child.props.children);
        }
      })
    }
  } 

  validation(children);
  return (
    <div>
      <h1> Kick ass</h1>
      {children}
    </div>
  )
}
const Some = ({children}) => {
  return (
    <div>I do nothing {children}</div>
  )
}

function App() {
  return (
    <Validate>
    <Some>
        <Validate></Validate>
      </Some>

      <Some>
        <Validate>
          <Validate></Validate>
        </Validate>
      </Some>  
      <Validate></Validate>    
    </Validate>
  );
}

export default App;

