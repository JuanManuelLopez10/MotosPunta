import React, { useContext, useEffect, useState } from 'react'
import { doc, setDoc, updateDoc, serverTimestamp, collection, increment, getDoc, getDocs } from "firebase/firestore"
import db from '../data/FirestoreData'
import { CartContext } from '../context/CartContext'
const CrearArticulo = () => {
    const context = useContext(CartContext)
    const [product, setProduct] = useState({}) //benefits[{name, image}]
    const [optionsQuantity, setoptionsQuantity] = useState()

    const ClassOptions = ['motos', 'cascos', 'indumentaria', 'accesorios']
    const BrandOptions = [
        {Tipo:'motos', Options: ['Honda', 'TVS', 'CFMoto', 'Lifan', 'Vital', 'Suzuki'],    Types: ['Naked', 'Scooter', 'Sport', 'Polleritas', 'Enduro', 'Calle', 'Multipropósito', 'Cuatri']
    }, {Tipo:'cascos', Options: ['MT', 'AGV', 'LS2', 'Nenki', 'HJC', 'Hawk', 'X-One'], Types: ['Integrales', 'Rebatibles', 'Custom', 'Cross', 'Multipropósito', 'Jet', 'Trial']}, 
    {Tipo:'indumentaria', Options: ['Seventy', 'Kore', 'LS2', 'Dainese', 'Hevik', 'IXS', 'AGS'], Types: ['Camperas', 'Botas', 'Pantalones', 'Guantes', 'Equipos de lluvia', 'Antiparras', 'Cuellos']}, 
    {Tipo:'accesorios', Options: ['Givi', 'Kappa', 'Midland', 'Luma'], Types: ['Baules', 'Maletas laterales', 'Alforjas', 'Mochilas', 'Bolsos de tanque', 'Intercomunicadores', 'Trancas', 'Otros']}]
    
    const [BrandSelected, setBrandSelected] = useState('Honda')
    const [Model, setModel] = useState('')
    const [Cilind, setCilind] = useState('')
    const [Design, setDesign] = useState('')
    const [Price, setPrice] = useState()
    const [Coin, setCoin] = useState('U$S')
    const [Type, setType] = useState('')
    const [Options, setOptions] = useState([])
    const [Class, setClass] = useState('motos')
    const [ProvisorColor, setProvisorColor] = useState('')
    const [ProvisorImage, setProvisorImage] = useState('')
    const [ProvisorDesign, setProvisorDesign] = useState('')
    const [ProvisorBenefitTitle, setProvisorBenefitTitle] = useState('')
    const [ProvisorBenefitDescription, setProvisorBenefitDescription] = useState('')
    const [ProvisorBenefitImage, setProvisorBenefitImage] = useState('')
    const [Benefits, setBenefits] = useState([])

    const handleProvisorColor = (event) => {
        setProvisorColor(event.target.value);
      };
      const handleProvisorImage = (event) => {
        setProvisorImage(event.target.value);
      };
      const handleProvisorBenefitTitle = (event) => {
        setProvisorBenefitTitle(event.target.value);
      };
      const handleProvisorBenefitDescription = (event) => {
        setProvisorBenefitDescription(event.target.value);
      };
      const handleProvisorBenefitImage = (event) => {
        setProvisorBenefitImage(event.target.value);
      };

      const AddBenefit = () => {
        const Beneficios = Benefits
        const benefit = {
            Title: ProvisorBenefitTitle,
            Description: ProvisorBenefitDescription,
            Image: ProvisorBenefitImage
        }
        Beneficios.push(benefit)
        setBenefits(Beneficios)
        setProvisorBenefitTitle('');
        setProvisorBenefitDescription('');
        setProvisorBenefitImage('');
      }
      const AddOption = () => {
        const Opciones = Options
        const opcion = {
            Color: ProvisorColor,
            Image: ProvisorImage,
            Design: ProvisorDesign
        }
        Opciones.push(opcion)
        setProvisorColor('');
        setProvisorImage('');
        setProvisorDesign('');
        setOptions(Opciones)
    }
    const handleClase = (event) => {
        setClass(event.target.value);
      };
      const handleOptQuant = (event) => {
        setoptionsQuantity(event.target.value);
      };
      const handleBrand = (event) => {
        setBrandSelected(event.target.value);
      };
      const handleModel = (event) => {
        setModel(event.target.value);
      };
      const handleCilind = (event) => {
        setCilind(parseInt(event.target.value));
      };
      const handleDesign = (event) => {
        setProvisorDesign(event.target.value);
      };
      const handleCoin = (event) => {
        setCoin(event.target.value)
        };
        const handlePrice = (event) => {
            setPrice(parseInt(event.target.value))
            };

            const handleType = (event) => {
                setType(event.target.value);
              };


    const AgregarProducto = () => {
        const producto = {
            Brand: BrandSelected,
            Model:Model,
            Cilind: Cilind,
            Price: Price,
            Coin:Coin,
            Type: Type,
            Class: Class,
            Options: Options,
            Benefits: Benefits
        }
        context.PostProductOnFirestore(producto)
        setOptions([])
        setBenefits([])
    }
        return(
            <div style={{marginTop:'50px'}} >
                <select name="Clase" value={Class} onChange={handleClase} id="Clase">
                    {
                        ClassOptions.map(item => <option value={item}>{item}</option>)
                    }
                </select>
                    {
                        BrandOptions.map(Opciones => {
                            if (Class===Opciones.Tipo) {
                                return(
                                    <select name="Brand" value={BrandSelected} onChange={handleBrand} id="Clase">
                                        {
                                            Opciones.Options.map(item => <option value={item}>{item}</option>)
                                        }
                                    </select>
                                )              
                            }
                        })
                    }
                                            <input type="text" value={Model} onChange={handleModel}  placeholder='Modelo'/>
                    {
                        Class==='motos'
                        ?
                    <input type="number" value={Cilind} onChange={handleCilind}  placeholder='125'/>
                        :''
                    }
                    {
                                                Class==='cascos'
                                                ?
                                            <input type="text" value={ProvisorDesign} onChange={handleDesign}  placeholder='Diseño'/>
                                                :''
                                            }
                    <select name="Price" value={Coin} onChange={handleCoin} >
                        <option value="US">U$S</option>
                        <option value="S">$</option>
                    </select>
                    <input type="number" value={Price} onChange={handlePrice}  placeholder='0'/>
                    {
                        BrandOptions.map(Opciones => {
                            if (Class===Opciones.Tipo) {
                                return(
                                    <select name="Type" value={Type} onChange={handleType} id="Type">
                                        {
                                            Opciones.Types.map(item => <option value={item}>{item}</option>)
                                        }
                                    </select>
                                )              
                            }
                        })
                    }
                    <input type="text" value={ProvisorColor} onChange={handleProvisorColor} placeholder='Color' />
                    <input type="text" value={ProvisorImage} onChange={handleProvisorImage} placeholder='Imagen' />
                    <button onClick={()=>{AddOption()}}>Agregar opción</button>
                    <input type="text" value={ProvisorBenefitTitle} onChange={handleProvisorBenefitTitle} placeholder='Titulo beneficio' />
                    <input type="text" value={ProvisorBenefitDescription} onChange={handleProvisorBenefitDescription} placeholder='Descr beneficio' />
                    <input type="text" value={ProvisorBenefitImage} onChange={handleProvisorBenefitImage} placeholder='Imagen benef' />
                    <button onClick={()=>{AddBenefit()}} >Agregar beneficio</button>                    
                    <button onClick={()=>{AgregarProducto()}}>Agregar producto</button>
                    
            </div>

        )
    
}

export default CrearArticulo