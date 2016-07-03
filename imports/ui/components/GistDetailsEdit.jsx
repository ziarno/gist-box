import React from 'react'
import _ from 'underscore'
import FileEdit from './FileEdit'

const propTypes = {
  gist: React.PropTypes.object,
  createNew: React.PropTypes.bool,
  onSave: React.PropTypes.func,
  onCancel: React.PropTypes.func,
  onRemove: React.PropTypes.func
}

class GistDetailsEdit extends React.Component {

  constructor({createNew, gist}) {
    super()
    this.state = {
      description: createNew ? '' : gist.description,
      public: createNew ? true : gist.public,
      files: createNew ? [{
        fileName: '',
        content: ''
      }] : _.map(gist.files, ({content}, fileName) => ({
        fileName,
        content
      }))
    }
    this.setFile = this.setFile.bind(this)
    this.addEmptyFile = this.addEmptyFile.bind(this)
    this.save = this.save.bind(this)
    this.setPublic = this.setPublic.bind(this)
  }

  setFile(index, file) {
    this.setState({
      files: [
        ...this.state.files.slice(0, index),
        file,
        ...this.state.files.slice(index + 1)
      ]
    })
  }

  addEmptyFile() {
    this.setState({
      files: [
        ...this.state.files,
        {
          fileName: '',
          content: ''
        }
      ]
    })
  }

  save() {
    const files = _.reduce(
      this.state.files,
      (memo, {fileName, content}) => {
        if (fileName) {
          memo[fileName] = {content}
        }
        return memo
      },
      {}
    )

    this.props.onSave({
      ...this.state,
      files
    })
  }

  setPublic(e) {
    this.setState({
      public: e.target.value === 'public'
    })
  }

  render() {
    const {onCancel, onRemove, createNew} = this.props

    return (
      <div className="gist-details--edit">
        <div className="gist-details--edit-buttons">
          <button
            className="gist-details--cancel-button"
            onClick={onCancel}
          >
            Cancel
          </button>
          <button
            className="gist-details--save-button"
            onClick={this.save}
          >
            Save
          </button>
          <button
            className="gist-details--remove-button"
            onClick={onRemove}
          >
            Remove
          </button>
        </div>
        {createNew ? (
          <div className="gist-details--edit-public">
            <input
              id="public"
              type="radio"
              checked={this.state.public}
              value="public"
              onChange={this.setPublic}
            />
            <label htmlFor="public">
              Public
            </label>
            <input
              id="private"
              type="radio"
              checked={!this.state.public}
              value="private"
              onChange={this.setPublic}
            />
            <label htmlFor="private">
              Private
            </label>
          </div>
        ) : null}
        <textarea
          className="gist-details--edit-description"
          placeholder="Description"
          value={this.state.description}
          onChange={(e) => this.setState({
            description: e.target.value
          })}
        />
        {_.map(this.state.files, ({fileName, content}, index) => (
          <FileEdit
            key={index}
            fileName={fileName}
            content={content}
            onChange={this.setFile.bind(this, index)}
          />
        ))}
        <button
          className="gist-details--add-file"
          onClick={this.addEmptyFile}>
          Add File
        </button>
      </div>
    )
  }

}

GistDetailsEdit.propTypes = propTypes

export default GistDetailsEdit