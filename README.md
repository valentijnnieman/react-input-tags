# react-input-tags

This is a component for an input that holds multiple inputs and displays them as tags. It can be used for entering multiple email addresses for example. Live example here: https://valentijnnieman.github.io/react-input-tags/

# How to install
- `npm install git://github.com/valentijnnieman/react-input-tags.git`
- In your app, `import TagInput from 'react-input-tags'` if you're using ES6, or `var TagInput = require('react-input-tags')` if you're not


# How to use

`<TagInput ref='my_tags'/>`
- Call the component with a ref. Tags are stored in state, so you can get the tags with `this.refs.my_tags.state.tags`

`<TagInput ref='my_tags_with_max' maxTags="3" maxExceeded="this.validation" />`
- maxTags: the maximum amount of tags the input can hold
- maxExceeded: callback function that fires when maxTags is exceeded

The tags can be entered with a tab or a comma, and can be deleted by backspace or by clicking on the 'x' of the tag itself.
