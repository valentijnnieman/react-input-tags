import React from 'react';
import ReactDOM from 'react-dom';
import TagInput from './components/tag-input.js'

const App = () => {
  return <div>
    <label>Emails: </label>
    <TagInput />
    <label>Phone numbers: </label>
    <TagInput maxTags="3" maxExceeded={() => {alert("exceeded max tags!")}}/>
  </div>
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
