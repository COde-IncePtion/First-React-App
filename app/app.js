var React = require("react");
var ReactDOM = require("react-dom");
var sampleData = require("./sample-data");

var App = React.createClass({

    getInitialState: function(){
        return {
            "humans":{},
        }
    },

    loadSampleData:function () {
        this.setState(sampleData);
    },
    render: function () {
        console.log(this.state.humans)
        return (

            <div>
                <br/><br/>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col">
                            <InboxPanel humans={this.state.humans} />
                        </div>

                        <div className="col">
                            <InboxPanel humans={this.state.humans} />
                        </div>

                        <div className="col">
                            <InboxPanel humans={this.state.humans} />
                        </div>
                    </div>
                    <br/>
                    <div className="row">
                        <div className="col">
                            <button className="btn btn-primary" onClick={this.loadSampleData} >Load Data</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
});


class InboxPanel extends React.Component{
    renderInboxItem(human){
        return <InboxItem key={human} index={human} details={this.props.humans[human]} />
    }
    render() {
        console.log("InboxPanel");
        console.log(this.props.humans);
        return (
            <div id="inbox-pane">
                <h1>INBOX</h1>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Time</th>
                            <th>Name</th>
                            <th>Order Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Object.keys(this.props.humans).map(this.renderInboxItem, this)}
                    </tbody>
                </table>
            </div>
        )
    }
}


var InboxItem = React.createClass({

   render: function(){
       return (
           <tr>
               <td>5 pm</td>
               <td>{this.props.index}</td>
               <td>Confirmed</td>
           </tr>
       )
   }
});

var AppCounter = React.createClass({

    getInitialState: function () {
        return {
            "counter":0
        }
    },
    increaseCounter: function(){
        this.setState({"counter":this.state.counter+1})
    },
    render: function(){
        console.log(this.props.counterValue);
        return (
            <div className="container">
                <div className="row">
                    <h1>Counter</h1>
                </div>
                <div className="row">
                    <div className="col">
                        <h1>{this.state.counter}</h1>
                    </div>
                    <div className="col">
                        <button className="btn btn-primary" onClick={this.increaseCounter} >Increase Counter</button>
                    </div>
                </div>
            </div>
        )
    }
});

ReactDOM.render(<App/>, document.getElementById("main"));
ReactDOM.render(<AppCounter/>, document.getElementById("test"));