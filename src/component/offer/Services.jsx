import React from 'react';

/*   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   */

const Services = ({ title, elems }) => {
    
    const allElems = elems.map((elem, index) => <li key={index} className='animEaseIn'>{elem}<span>{`0${index + 1}`}</span></li>)

    /*   *   *   *   *   *   *   *   *   *   */

    return(
    <section className='services'>

        <h3 className='title'>{title}</h3>

        <ul className='list'>
            {allElems}
        </ul>

    </section>
)};

/*   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   */

export default Services;