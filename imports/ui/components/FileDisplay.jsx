import React from 'react'
import hljs from 'highlight.js'

const propTypes = {
  fileName: React.PropTypes.string,
  content: React.PropTypes.string
}

class FileDisplay extends React.Component {

  componentDidMount() {
    hljs.highlightBlock(this.refs.content)
  }

  render() {
    const {fileName, content} = this.props

    return (
      <div className="file">
        <p className="file--fileName">
          {fileName}
        </p>
        <pre>
          <code
            className="file--content"
            ref="content">
            {content}
          </code>
        </pre>
      </div>
    )
  }

}

FileDisplay.propTypes = propTypes

export default FileDisplay