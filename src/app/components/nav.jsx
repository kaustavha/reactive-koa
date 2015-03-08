var React = require('react');
var Nav = React.createClass({
  render: function() {
    return (
      <ul>
        <li><a href="#/author">#/author</a></li>
        <li><a href="#/books">#/books</a></li>
        <li><a href="#/books/view/1">#/books/view/1</a></li>
      </ul>
    )
  }
});
module.exports = Nav;
