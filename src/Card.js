import React from 'react';

// const Card = (props) => {
// const {name, email, id} = props;

const Card = ({name, email, id}) => {
    return(
        <div className='tc bg-light-green dib br3 pa3 ma2 bw2 grow shadow-5'>
        {/* <img alt='robots' src={'https://robohash.org/${props.id}?200x200'}/> */}
            <img alt='robots' src={`https://robohash.org/${id}?200x200`}/>
            <div>
                {/* <h2>{props.name}</h2>
                <p>{props.email}</p> */}
                
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
}

export default Card;