import React, { PureComponent } from 'react';

class HornedBeasts extends PureComponent
{
    render()
    {
        return (
            <div className="beasts">
                <h2>{this.props.title}</h2>
                <img src={this.props.image_url} alt={this.props.title} title={this.props.title}/>
            </div>
        )
    }
}
export default HornedBeasts;