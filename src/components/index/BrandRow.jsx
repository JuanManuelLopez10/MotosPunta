import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext';

const BrandRow = (props) => {
    const context = useContext(CartContext)
    const clase = `carouselExampleIndicators${props.data[0]}`
    return (
        <div className='BrandRow'>
            <h3>{props.data[0]}</h3>
            {
                context.Orientation === 'Landscape'
                    ?
                    <div id={clase} className="carousel slide" data-ride="carousel">


                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <div>
                                {
                                    props.data.map(item => {
                                        if (item !== props.data[0] && props.data.indexOf(item)<=5) {
                                            return (
                                                <img className='logoIndex' src={`./assets/logos/${item}.png`} alt="" />
                                            )
                                        }
                                    })
                                }
                                </div>
                            </div>
                            {
                                props.data.length>6
                                ?
                                <div className="carousel-item">
                                <div>
                                {
                                    props.data.map(item => {
                                        if (item !== props.data[0] && props.data.indexOf(item)>5 && props.data.indexOf(item)<10) {
                                            return (
                                                <img className='logoIndex' src={`./assets/logos/${item}.png`} alt="" />
                                            )
                                        }
                                    })
                                }
                                </div>
                                </div>
                                :''
                            }

                            {
                                props.data.length>11
                                ?
                                <div className="carousel-item">
                                <div>
                                {
                                    props.data.map(item => {
                                        if (item !== props.data[0] && props.data.indexOf(item)>10 && props.data.indexOf(item)<15) {
                                            return (
                                                <img className='logoIndex' src={`./assets/logos/${item}.png`} alt="" />
                                            )
                                        }
                                    })
                                }
                                </div>
                                </div>
                                :''
                            }


                        </div>
                        {
                                props.data.length>6
                                ?<>
                                <a className="carousel-control-prev" href={`#${clase}`}role="button" data-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="sr-only">Previous</span>
                            </a>
                            <a className="carousel-control-next" href={`#${clase}`} role="button" data-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="sr-only">Next</span>
                            </a>
                            </>
                                :''

                        }

                    </div>
                    :
                    <div className='containerBrands' id={props.data[0]}>
                        {
                            props.data.map(item => {
                                if (item !== props.data[0]) {
                                    return (
                                        <img className='logoIndex' src={`./assets/logos/${item}.png`} alt="" />
                                    )
                                }
                            })
                        }

                    </div>

            }

        </div>
    )
}

export default BrandRow