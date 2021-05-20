import React from 'react';
import ArrowDownwardRoundedIcon from '@material-ui/icons/ArrowDownwardRounded';
import ArrowUpwardRoundedIcon from '@material-ui/icons/ArrowUpwardRounded';
import OpacityRoundedIcon from '@material-ui/icons/OpacityRounded';
import Avatar from "@material-ui/core/Avatar";


const Item = (props) => {
    console.log('MyProps', props);
    const { name, country, img, feels_like, humidity, temp_max, temp_min, temp, description } = props.myCity;
    return (
        // <div className="List__item">
        //     <h1>{name},{country}</h1>
        //     <h2>{temp}</h2>
        //     <div>
        //         <h2>{description}
        //             <img src={img} alt={name} />
        //         </h2>
        //     </div>
        //     <div>
        //         <h2>Feels like {feels_like} waterDropPic {humitidy}%</h2>
        //     </div>
        //     <div>
        //         <h2>RedupArrow {temp_max} blueDownArrow {temp_min}</h2>

        //     </div>
        // </div>


        <div className="List__item">
            <div className="item">
                <h1 >Bamako, ML</h1>
                <h1 > 84°F </h1>
                <div className="desc__pic">
                    <h2>Sunny</h2> 
                    <Avatar
                        alt="Bamako"
                        src="http://openweathermap.org/img/wn/01d@2x.png"
                        sizes='200'
                        className={img}
                    />

                </div>
                <div >
                    <h2>Feels like 82°F </h2>
                    <h2>Humidity 5%<OpacityRoundedIcon color="primary" /> </h2>
                </div>
                <div >
                    <h2>84°F<ArrowUpwardRoundedIcon color="secondary" />        77°F<ArrowDownwardRoundedIcon color="primary" /> </h2>

                </div>
            </div>
        </div>


    )
}

export default Item
