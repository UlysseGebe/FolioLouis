import React from 'react';
import './Details.css'
import Detail from './Detail/Detail'
import detail from "../../data/Detail"

class Details extends React.Component {

    render() {
        return (
            <div className="Details">
                {detail.map((v, i, a) => 
                    <Detail key={i} index={i} type={v.type} caseStudy={v.caseStudy} presentation={v.presentation} image={v.images} color={v.color} />
                )}
            </div>
        )
    }
}

export default Details