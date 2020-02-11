import React from 'react';
import './Details.css'
import Detail from './Detail/Detail'
import detail from "../../data/Detail"
import NoMatch from '../NoMatch/NoMatch'

class Details extends React.Component {
    constructor(props) {
        super(props);
    
        const array = [];
        let id = parseInt(this.props.match.params.id)

        for (let i = 1; i < detail.length; i++) {
            if (id === i) {
                array.push({
                    detail: detail[i]
                });
            }
        }
    
        this.state = { 
            array
        };
    }
    render() {
        let id = parseInt(this.props.match.params.id)
        if (id === 0 || id >= detail.length) {
            return (
                <NoMatch />
            )
        } else {
            return (
                <div className="Details">
                    {this.state.array.map((v, i, a) =>
                        <Detail key={i} index={i} type={v.detail.type} caseStudy={v.detail.caseStudy} presentation={v.detail.presentation} theImages={v.detail.images} primcolor={v.detail.primColor} scndcolor={v.detail.scndColor} thrdcolor={v.detail.thrdColor} />
                    )}
                </div>
            )
        }

    }
}

export default Details