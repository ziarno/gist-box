import React from 'react'
import _ from 'underscore'

const propTypes = {
  fileName: React.PropTypes.string,
  content: React.PropTypes.string,
  onChange: React.PropTypes.func
}

class FileEdit extends React.Component {

  constructor({fileName, content}) {
    super()
    this.state = {fileName, content}
    this.setField = this.setField.bind(this)
    this.setFileName = this.setFileName.bind(this)
    this.setContent = this.setContent.bind(this)
  }

  setField(fieldName, value) {
    this.setState(
      {
        [fieldName]: value
      },
      () => {
        this.props.onChange(this.state)
      }
    )
  }

  setFileName(e) {
    this.setField('fileName', e.target.value)
  }

  setContent(e) {
    this.setField('content', e.target.value)
  }

  render() {
    return (
      <div className="file-edit">
        <input
          className="file-edit--fileName"
          placeholder="Filename"
          value={this.state.fileName}
          onChange={this.setFileName}
        />
        <textarea
          className="file-edit--content"
          placeholder="Content"
          value={this.state.content}
          onChange={this.setContent}
        />
      </div>
    )
  }

}

FileEdit.propTypes = propTypes

export default FileEdit