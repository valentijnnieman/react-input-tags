import React from 'react';
import Tag from './tag.js' 

export class TagInput extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      input: "",
      tags: [],
      isFocused: false
    }
    this.onClick = this.onClick.bind(this)
    this.onChange = this.onChange.bind(this)
    this.onKeyDown = this.onKeyDown.bind(this)
    this.onFocus = this.onFocus.bind(this)
    this.removeTag = this.removeTag.bind(this)
  }
  resetInput() {
    // reset input to default state
    this.refs.input.size = 1;
    let input = ""
    this.setState({input: input})
  }
  createTag(input) {
    if(this.state.tags.length >= this.props.maxTags) {
      // here we could handle validation errors a little better in the future
      alert(this.props.alertMsg)
      this.resetInput()
      return false
    }
    let newTags = [...this.state.tags]
    newTags.push(input)
    this.setState({tags: newTags})
    this.resetInput()
  }
  removeTag(index) {
    let newTags = [ 
      ...this.state.tags.slice(0, index),
      ...this.state.tags.slice(index + 1) 
    ]
          
    this.setState({tags: newTags})
  }
  onChange(event) {
    let input = event.target.value

    // grow input field
    this.refs.input.size = input.length + 1

    if(input.slice(-1) == ',') {
      this.createTag(input.slice(0, -1))
    }
    else {
      this.setState({
        input: input 
      });
    }
  }
  onClick(e) {
    this.refs.input.focus()
    this.setState({isFocused: true});
  }
  onKeyDown(event) {
    switch(event.key) {
      case 'Tab':
        if(this.state.input.length > 0) {
          event.preventDefault()
          this.createTag(this.state.input)
        }
        break;
      case 'Backspace':
        if(this.state.input.length <= 0) {
          event.preventDefault()
          this.removeTag(this.state.tags.length-1)
        }
        break;
    }
  }
  onFocus() {
    let isFocused = !this.state.isFocused
    this.setState({ isFocused: isFocused})
  }
  render() {
    let renderedTags = this.state.tags.map((tag, index) => {
      return <Tag value={tag} key={index} index={index} bindClick={this.removeTag}/> 
    })
    return <div className={this.state.isFocused ? 'tag-input tag-input--focused' : 'tag-input'} onClick={this.onClick}>
      {renderedTags}
      <input size="1" className='tag-input__input' type='text' ref="input" value={this.state.input} onChange={this.onChange} onKeyDown={this.onKeyDown} onFocus={this.onFocus} onBlur={this.onFocus}/>
    </div>
  }
}

export default TagInput 
