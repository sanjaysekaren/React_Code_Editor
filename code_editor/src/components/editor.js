import React from 'react';
import ReactAceEditor from 'react-ace';
import { Button, Grid, Select, FormControl, InputLabel, MenuItem } from '@material-ui/core';
import { connect } from 'react-redux';

import ResultScreen from './resultScreen';
import * as Actions from '../actions';
import { EDITOR_MODE } from '../util';

import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-terminal";

class Editor extends React.Component {
  constructor(props) {
    super(props)
    this.state = { value: '', selectValue: 'JavaScript' }
  }
  onChange = (newValue) => {
    this.setState({ value: newValue })
  }

  onDDChange = (event) => {
    this.setState({ selectValue: event.target.value })
  }

  render() {
    return (
      <div className="App">
        <div flexgrow={1}>
          <Grid container spacing={4}>
            <Grid item xs >
              <header className="App-header" style={{fontWeight:1000,fontSize:'500%'}}>
                Code Editor
              </header>
            </Grid>
            <Grid item xs >
              <div >
                <FormControl >
                  <InputLabel id="demo-simple-select-label">Select LANGUAGE</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    style={{ width: 200 }}
                    value={this.state.selectValue}
                    onChange={this.onDDChange}
                  >
                    {Object.entries(EDITOR_MODE).map((value) =>
                      <MenuItem value={value[1]} key={value[1]}>{value[0]}</MenuItem>
                    )}
                  </Select>
                </FormControl>
              </div>
            </Grid>
          </Grid>
        </div>
        <div flexgrow={1}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <div style={{ flexGrow: 1 }} className="row">
                <ReactAceEditor
                  mode={this.state.selectValue}
                  theme="terminal"
                  style={{ width: '90%' }}
                  onChange={this.onChange}
                  name="UNIQUE_ID_OF_DIV"
                  editorProps={{ $blockScrolling: true }}
                  value={this.state.value}
                />
                <div style={{padding:'5%'}}>
                <Button
                  variant="contained"
                  color="default"
                  onClick={() => this.props.buttonClicked(this.state.value, this.state.selectValue)}>
                  Execute
                </Button>
                </div>
              </div>
            </Grid>
            <Grid item xs={12} sm={6}>
              <div style={{ padding: '5%', marginLeft: 5, border: '10', backgroundColor: 'grey',width:'90%' }}>
                <ResultScreen output={this.props.componentState.executeReducer.output} />
              </div>
            </Grid>
          </Grid>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state)
  return {
    componentState: state
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    buttonClicked: (value, selectLang) => dispatch(Actions.ExecuteAction(value, selectLang))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Editor);