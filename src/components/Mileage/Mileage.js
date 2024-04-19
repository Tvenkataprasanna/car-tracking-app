import React from 'react';
import classes from './Mileage.css';
import Button from '../UI/Button/Button'

const mileage=(props)=>{
    let mil=(
        <div onClick={props.click} className={classes.Mileage}>
            <p> Przebieg samochodu:{props.currentMileage}km</p>
        </div>
    )
    if(props.active){
        //is executed when state isActive=true
        mil=(
            <div className={[classes.above, classes.Mileage].json(' ')}>
                <p>Przebieg samochodu:{props.currentMileage}km</p>
                <Button clicked={props.changeMileageHandler} btnType='Proceed'>WPROWADZ STAN LICZNIKA</Button>
                <Button clicked={props.click} btnType='Cancel'>WROC</Button>
            </div>
        )
    }
    return(
        mil
    )
};
export default mileage;