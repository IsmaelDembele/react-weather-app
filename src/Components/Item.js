import React from 'react';
import ArrowDownwardRoundedIcon from '@material-ui/icons/ArrowDownwardRounded';
import ArrowUpwardRoundedIcon from '@material-ui/icons/ArrowUpwardRounded';
import OpacityRoundedIcon from '@material-ui/icons/OpacityRounded';
import Avatar from "@material-ui/core/Avatar";


const Item = (props) => {

    const { name, country, img, feels_like, humidity, temp_max, temp_min, temp, description } = props.myCity;

    return (

        <div className="List__item">
            <div className="item">
                <h1 >{name},{country}</h1>
                <h1 > {Math.round(temp)}°F </h1>
                <div className="desc__pic">
                    <h2>{description}</h2>
                    <Avatar
                        alt={name}
                        src={img}
                        sizes='200'
                        className="my__img"
                    />

                </div>
                <div >
                    <h2>Feels like {Math.round(feels_like)}°F </h2>
                    <h2>Humidity {Math.round(humidity)}%<OpacityRoundedIcon color="primary" /> </h2>
                </div>
                <div >
                    <h2>{Math.round(temp_max)}°F<ArrowUpwardRoundedIcon color="secondary" />
                        {Math.round(temp_min)}°F<ArrowDownwardRoundedIcon color="primary" />
                    </h2>

                </div>
            </div>
        </div>


    )
}

export default Item
