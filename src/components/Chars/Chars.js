import React, {Component} from 'react';

class Char extends Component {

    addBlock = (index) => {
        let style = {
            padding: "3px",
            width: "40px"
        };
        return <input type="text" 
                      key={index}
                      style={style} 
                      onChange={(event) => this.changeHandler(event, index) }/>
    } 
    state = {
        blocks: 
            [{block: this.addBlock(0), index: 0}]
        };

    changeHandler = (event, index) => {
       const blockLength = this.state.blocks.length;
       const textLength = event.target.value.length;
       const blockElementIndex = this.state.blocks.findIndex(i => i.index === index);
       if(textLength === 0){
            const blocks = this.state.blocks;
           blocks.splice(blockElementIndex, 1);
           this.setState({blocks: blocks});
           
       }
       if((blockElementIndex === (blockLength - 1)) && (textLength === 1)){
           const key = this.state.blocks.slice(-1)[0].index + 1;
           const blocks = [...this.state.blocks, {block: this.addBlock(key), index: key}];
           this.setState({blocks: blocks});
       }

    }
    render() {
        return this.state.blocks.map(i => i.block);
    }
}
export default Char;