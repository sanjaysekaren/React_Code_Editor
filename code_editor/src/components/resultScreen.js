import React from 'react';
import { Card, CardContent} from '@material-ui/core';

class ResultScreen extends React.Component{
    render(){
        return(
            <div>
                <Card style={{minWidth:20}}>
                    <CardContent>
                    {this.props.output}
                    </CardContent>
                </Card>
            </div>
        )
    }
}

export default ResultScreen;
