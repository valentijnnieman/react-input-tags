import React from 'react';
import ReactDOM from 'react-dom';
import TagInput from './components/tag-input.js' 

class App extends React.Component {
  constructor(props) {
    super(props)

    this.onSubmit = this.onSubmit.bind(this)
  }
  onSubmit(e) {
    //e.preventDefault()
    let body = {emails: this.refs.emails.state.tags, numbers: this.refs.numbers.state.tags}
    console.log("sending to server: ", body)
  }
  render() {
    return <div className='app'>
      <p className='black'><b>Uitbetalingen</b></p>
      <p className='grey'>Bij elke uitbetaling van je tegoeden zul je een notificatie ontvangen.</p>
      <form className='form' onSubmit={this.onSubmit}>
        <label className='grey'>E-mailadressen</label>
        <TagInput ref="emails"/> 
        <label className='grey'>Telefoonnummers</label>
        <TagInput ref="numbers" maxTags="3" alertMsg="Beperkt tot 3 telefoonnummers!" /> 
        <p className='lightgrey'><small>€ 0,09 per sms-bericht. Beperkt tot 3 telefoonnummers.</small></p>
        <input type='submit' className='hidden'/>
      </form>
    </div>
  }
};

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
