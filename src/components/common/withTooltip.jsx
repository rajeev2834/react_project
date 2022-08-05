import React from "react";

function withTooltip(WrappedComponent){
    return class WithTooltip extends React.Component{
        state = {showTooltip: false};

        mouseOver=()=>{
            this.setState({showTooltip: true});
        }

        mouseOut=()=>{
            this.setState({showTooltip: false});
        }

        render(){
            return (
                <div onMouseOver={this.mouseOver} onMouseOut={this.mouseOut}>
                    <WrappedComponent {...this.props} showTooltip={this.state.showTooltip}/>
                </div>
            );
        }
    }
};

export default withTooltip;

