# react-input-tags

This is a component for an input that holds multiple inputs and displays them as tags. It is useful for
example for entering multiple email addresses. 


# How to use

`<TagInput ref='my_tags'/>`
- Call the component with a ref. Tags are stored in state, so you can get the tags with `this.refs.my_tags.state.tags`. 

'<TagInput ref='my_tags_with_max' maxTags="3" maxExceeded="this.validation" />'
- maxTags: the maximum amount of tags the input can hold
- maxExceeded: callback function that fires when maxTags is exceeded

