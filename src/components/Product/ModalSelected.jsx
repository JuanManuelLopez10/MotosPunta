import React from 'react'

const ModalSelected = (props) => {
  return (
    <div id='ModalBack'>
        <div id='Modal'>
            <div id='ModalHeader'>
            <h2>{props.producto.Brand} {props.producto.Model} {props.producto.Cilind} {props.SelectedOption.Design} {props.producto.Design} {props.SelectedOption.Color}</h2>

                <button onClick={()=>{props.setSelectedOption(undefined)}}>X</button>
            </div>
            <div id='ModalBody'>
                <div className='d-flex'>
                    <img src={props.SelectedOption.Image} alt="" />
                    <div id='Information'>
                        <p id='Information-Price' >{props.producto.Coin==='S' ? '$' : props.producto.Coin} {props.producto.Price}</p>
                        <p id='Information-Type'>Estilo: {props.producto.Type}</p>
                        <div id='Information-Opinions'>
                            <button>
                                {
                                    props.producto.Opinion.Number>0.75
                                    ?<i class="bi bi-star-fill"></i>
                                    :<i class={props.producto.Opinion.Number>0.25 && props.producto.Opinion.Number<0.75 ?"bi bi-star-half" : "bi bi-star"}></i>
                                }
                            </button>
                            <button>
                                {
                                    props.producto.Opinion.Number>1.75
                                    ?<i class="bi bi-star-fill"></i>
                                    :<i class={props.producto.Opinion.Number>1.25 && props.producto.Opinion.Number<1.75 ?"bi bi-star-half" : "bi bi-star"}></i>
                                }
                            </button>
                            <button>
                                {
                                    props.producto.Opinion.Number>2.75
                                    ?<i class="bi bi-star-fill"></i>
                                    :<i class={props.producto.Opinion.Number>2.25 && props.producto.Opinion.Number<2.75 ?"bi bi-star-half" : "bi bi-star"}></i>
                                }
                            </button>
                            <button>
                                {
                                    props.producto.Opinion.Number>3.75
                                    ?<i class="bi bi-star-fill"></i>
                                    :<i class={props.producto.Opinion.Number>3.25 && props.producto.Opinion.Number<3.75 ?"bi bi-star-half" : "bi bi-star"}></i>
                                }
                            </button>
                            <button>
                                {
                                    props.producto.Opinion.Number>4.75
                                    ?<i class="bi bi-star-fill"></i>
                                    :<i class={props.producto.Opinion.Number>4.25 && props.producto.Opinion.Number<4.75 ?"bi bi-star-half" : "bi bi-star"}></i>
                                }
                            </button>
                            <p id='Information-OpinionsCount'>{'('+props.producto.Opinion.Count+' opiniones)'}</p>
                        </div>
                        {

                        }
                        <button id='AddToCartButton'>Agregar al carrito</button>
                        <p id='Information-ASK'>Consultá tu crédito <a target='_blank' href="https://wa.me/59899673830">aqui</a></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ModalSelected