import React, { PureComponent } from 'react';
import HornedBeast from './hornedBeast';
import CardColumns from 'react-bootstrap/CardColumns';
import FormInfo from './form';


class Main extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            changedArr: this.props.beastInfo
        }
    }


    updateMain = (value) => {
        let filteredArr = [];
        if (value != 'all') {
            filteredArr = this.props.beastInfo.filter((item) => {
                if (item.horns == value) {
                    return item;
                }
            })
        }
        else {
            filteredArr = this.props.beastInfo;
        }
        this.state({
            changedArr: filteredArr,
        })
    }
    render() {
        return (

            <div>

                <FormInfo
                    updateStateInsideMain={this.updateStateInsideMain}
                />
                <CardColumns>
                    {this.state.changedArr.map((item, index) => {
                        return (
                            <HornedBeast
                                title={item.title}
                                imageUrl={item.image_url}
                                description={item.description}
                                key={item}
                                showStuffFromMain={this.props.showStuffFromApp}
                            />
            

                    )} )}


                </CardColumns>
            </div>
          <div>
            <CardColumns>
            

            {this.props.passingData.map((item) => {
                return (
                    <HornedBeast
                        title={item.title}
                        imgUrl={item.image_url}
                        description={item.description}
                    />
                )
            }

            )}
             
             </CardColumns>
             </div>
        )
    }
        
}
    
//     )

//     }
    
// }}
// }

// //constructor(props)
//     {
//         super(props);
//         this.state={
//             changedArr:this.props.beastInfo
//         }
//     }

// updateStateInsideMain = (value) => {
//     let filteredArr = [];
//     if (value!='all')
//     {
//         result = this.props.beastInfo.filter((item) => {
//             if(item.horns == value)
//             {
//                 return item;
//             }
//         })
//     }
//     else
//     {
//         result = this.props.beastInfo;
//     }
//     this.state({
//         changedArr : result,
//     })
// }

//     render()
//     {
//         return (
// <div>

//     <FormInfo
//     updateStateInsideMain={this.updateStateInsideMain}
//     />
//     <CardColumns>
//     {this.state.changedArr.map((item,index) => {
//         return 
//         <HornedBeast
//         title = {item.title}
//         image_url = {item.image_url}
//         description = {item.description}
//         key={item}
//         showStuffFromMain={this.props.showStuffFromApp}
//         />
//     }


//     )}


//     </CardColumns>


// </div>
//         )
//     }
export default Main;