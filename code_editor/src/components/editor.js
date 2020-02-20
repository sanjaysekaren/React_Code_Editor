import React from 'react';
import ReactAceEditor from 'react-ace';
import { Button, Grid } from '@material-ui/core';

import { postCodeUrl } from '../services/services.js';
import ResultScreen from './resultScreen';

import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-terminal";

class Editor extends React.Component {
  constructor(props) {
    super(props)
    this.state = { value: '', output: 'Loading' }
  }
  onChange = (newValue) => {
    this.setState({ value: newValue })
  }

  buttonClicked = async () => {
    var result = await postCodeUrl(this.state.value)
    // console.log(result)
    this.setState({ output: result })
    // console.log('b'+this.state.value)

  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          React Code Editor
              </header>
              <div flexGrow={1}>
        <Grid container spacing={3}>
          <Grid item xs>
            <div style={{ flexGrow: 1 }} className="row">
              <ReactAceEditor
                mode="javascript"
                theme="terminal"
                onChange={this.onChange}
                name="UNIQUE_ID_OF_DIV"
                editorProps={{ $blockScrolling: true }}
                value={this.state.value}
              />
              <Button
                variant="contained"
                color="default"
                onClick={this.buttonClicked}>
                Execute
                </Button>

            </div>
          </Grid>
          <Grid item xs>
            <div style={{ padding: 20, border: '10', borderColor: 'blue' }}>
              <ResultScreen output={this.state.output} />
            </div>
          </Grid>
        </Grid>
        </div>
      </div>
    );
  }
}

export default Editor;