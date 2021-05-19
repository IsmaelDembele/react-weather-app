import React from 'react';
import ArrowDownwardRoundedIcon from '@material-ui/icons/ArrowDownwardRounded';
import ArrowUpwardRoundedIcon from '@material-ui/icons/ArrowUpwardRounded';
import OpacityRoundedIcon from '@material-ui/icons/OpacityRounded';
import Icon from '@material-ui/core/Icon';

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
            <h1 className="item">Bamako,ml</h1>
            <h1 className="item">  :punch: 84 </h1>
            <div className="item desc__pic">
                <h2>Sunny
                     <img src="http://openweathermap.org/img/wn/01d@2x.png" alt="Bamako" />
                </h2>
            </div>
            <div className="item">
                <h2>Feels like 82 | 5%<OpacityRoundedIcon color="primary" /> </h2>
            </div>
            <div className="item">
                <h2>84<ArrowUpwardRoundedIcon color="secondary" />        77<ArrowDownwardRoundedIcon color="primary" /> </h2>

            </div>
        </div>
    )
}

export default Item
