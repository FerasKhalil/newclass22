import React, { PureComponent } from 'react';
import HornedBeast from './hornedBeast';
import HornedJess from './hornedJess.json';


 class Main extends PureComponent
{
    render()
    {
        return (
            <div>
            {
                HornedJess.map(item =>
                {
                    return(

                        <HornedBeast
                        title = {item.title}
                        image_url = {item.image_url}
                        description = {item.description}
                        
                        />
                    )

                }
                
                )
            }
            </div>
        )
    }
}


export default Main;