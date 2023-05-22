import React, { useEffect, useState } from 'react'
import { doc, setDoc, updateDoc, serverTimestamp, collection, increment, getDoc, getDocs } from "firebase/firestore"
import db from '../data/FirestoreData'
const CrearArticulo = () => {
    const [product, setProduct] = useState({}) //benefits[{name, image}]
    const [optionsQuantity, setoptionsQuantity] = useState()
    const ClassOptions = ['Motos', 'Cascos', 'Indumentaria', 'Accesorios']
    const [BrandOptions, setBrandsOptions] = useState([])
    const [CategoryOptions, setCategoryOptions] = useState([])




    const createOrder = () => {
        const generarorder = async () => {
            const newOrderRef = doc(collection(db, "products"))
            await setDoc(newOrderRef, product);
            return newOrderRef
        }
        generarorder()
            .then(result => console.log(product))
            .catch(err => console.log(err))
    }


    const getProducts = async () => {
        const productsCollection = collection(db, 'products');
      
        try {
          const querySnapshot = await getDocs(productsCollection);
          querySnapshot.forEach((doc) => {
            console.log(doc.id, '=>', doc.data());
          });
        } catch (error) {
          console.error('Error al obtener los productos:', error);
        }
      };
      
    
    getProducts()






    const seBrandsOptions = () => {
        if (product.Clase === 'Cascos') {
            setBrandsOptions(['AGV', 'MT', 'LS2', 'HJC', 'NOLAN', 'NENKI', 'HAWK', 'IXS'])
            setCategoryOptions(['Integrales', 'Rebatibles', 'Abiertos', 'Off-Road', 'Accesorios'])
        } else if (product.Clase === 'Indumentaria') {
            setCategoryOptions(['Calzado', 'Camperas', 'Pantalones', 'Guantes', 'Antiparras', 'Cuellos/Balaclavas'])
            setBrandsOptions(['Seventy', 'LS2', 'KORE', 'HEVIK', 'IXS', 'AGS', 'GIVI', 'TAICHI'])
        } else if (product.Clase === 'Accesorios') {
            setCategoryOptions(['Baules', 'Baules laterales/Alforjas', 'Mochilas', 'Bolsos de tanque', 'Protectores de tanque', 'Soportes para celular', 'Intercomunicadores', 'Trancas', 'Otros'])
            setBrandsOptions(['GIVI', 'KAPA', 'MIDLAND', 'LUMA', 'TWIIN'])
        } else {
            setCategoryOptions(['Polleritas', 'Scooters', 'Calle', 'Naked', 'Enduro', 'Multipropósito', 'Deportiva', 'Cuatriciclos'])
            setBrandsOptions(['HONDA', 'TVS', 'CFMOTO', 'SUZUKI', 'LIFAN', 'VITAL'])
        }
    }

    return (
        <div style={{ width: '100vw', height: '100vh', display: 'flex', marginTop: '30%', flexDirection: 'column', alignItems: 'center' }}>
            <select onChange={(e) => {
                let NewProduct = product
                NewProduct.Clase = e.target.value
                const Hoy = new Date
                NewProduct.id = Hoy.getDate().toString() + Hoy.getDay().toString() + Hoy.getMilliseconds().toString() + Hoy.getMonth().toString() + Hoy.getFullYear().toString()
                console.log(NewProduct.id);
                setProduct(NewProduct)
                seBrandsOptions()

                
            }}>
                {
                    ClassOptions.map(item => <option value={item}>{item}</option>)
                }
            </select>
            <select name="" id="" onChange={(e) => {
                let NewProduct = product
                NewProduct.brand = e.target.value
                setProduct(NewProduct)
            }}>
                {
                    BrandOptions.map(item => <option value={item}>{item}</option>)
                }
            </select>
            <select name="" id="" onChange={(e) => {
                let NewProduct = product
                NewProduct.category = e.target.value
                setProduct(NewProduct)
            }} >
                {
                    CategoryOptions.map(item => <option value={item}>{item}</option>)
                }
            </select>
            <select onChange={(e) => {
                let NewProduct = product
                NewProduct.money = e.target.value
                setProduct(NewProduct)
            }}>
                <option value="USD">USD</option>
                <option value="$">$</option>
            </select>
            
            <input type="text" placeholder='Precio' onChange={(e) => {
                let NewProduct = product
                NewProduct.price = e.target.value
                setProduct(NewProduct)
            }} />
            <input type="text" placeholder='Modelo (Ej: Stinger)' onChange={(e) => {
                let NewProduct = product
                NewProduct.model = e.target.value
                setProduct(NewProduct)
            }} />
            <input type="text" placeholder='InstaPost' onChange={(e) => {
                let NewProduct = product
                NewProduct.instapost = e.target.value
                setProduct(NewProduct)
            }} />
            <input type="text" placeholder='Descripción' onChange={(e) => {
                let NewProduct = product
                NewProduct.description = e.target.value
                setProduct(NewProduct)
            }} />
            <input type="text" placeholder='Imagen para wallpaper' onChange={(e) => {
                let NewProduct = product
                NewProduct.WallpaperImage = e.target.value
                setProduct(NewProduct)
            }} />
            <input type="text" placeholder='Característica 1' onChange={(e) => {
                let NewProduct = product
                NewProduct.Benefits
                ? NewProduct.Benefits[0]
                    ?NewProduct.Benefits[0].Name = e.target.value
                    :NewProduct.Benefits[0] = {Name : e.target.value}
                : NewProduct.Benefits = [{Name : e.target.value}]
                setProduct(NewProduct)
            }} />
            <input type="text" placeholder='Característica 1 Foto' onChange={(e) => {
                let NewProduct = product
                NewProduct.Benefits
                ? NewProduct.Benefits[0]
                    ?NewProduct.Benefits[0].Image = e.target.value
                    :NewProduct.Benefits[0] = {Image : e.target.value}
                : NewProduct.Benefits = [{Image : e.target.value}]
                setProduct(NewProduct)
            }} />
            <input type="text" placeholder='Característica 2' onChange={(e) => {
                let NewProduct = product
                NewProduct.Benefits
                ? NewProduct.Benefits[1]
                    ?NewProduct.Benefits[1].Name = e.target.value
                    :NewProduct.Benefits[1] = {Name : e.target.value}
                : NewProduct.Benefits = [{Name : e.target.value}]
                setProduct(NewProduct)
            }} />
            <input type="text" placeholder='Característica 2 Foto' onChange={(e) => {
                let NewProduct = product
                NewProduct.Benefits
                ? NewProduct.Benefits[1]
                    ?NewProduct.Benefits[1].Image = e.target.value
                    :NewProduct.Benefits[1] = {Image : e.target.value}
                : NewProduct.Benefits = [{Image : e.target.value}]
                setProduct(NewProduct)
            }} />
                        <input type="text" placeholder='Característica 3' onChange={(e) => {
                let NewProduct = product
                NewProduct.Benefits
                ? NewProduct.Benefits[2]
                    ?NewProduct.Benefits[2].Name = e.target.value
                    :NewProduct.Benefits[2] = {Name : e.target.value}
                : NewProduct.Benefits = [{Name : e.target.value}]
                setProduct(NewProduct)
            }} />
            <input type="text" placeholder='Característica 3 Foto' onChange={(e) => {
                let NewProduct = product
                NewProduct.Benefits
                ? NewProduct.Benefits[2]
                    ?NewProduct.Benefits[2].Image = e.target.value
                    :NewProduct.Benefits[2] = {Image : e.target.value}
                : NewProduct.Benefits = [{Image : e.target.value}]
                setProduct(NewProduct)
            }} />

            <input type="number" placeholder='Cantidad de opciones' onChange={(e) => {
                setoptionsQuantity(e.target.value)
            }} />
            
            {Array.from({ length: optionsQuantity }, (_, index) => (
                <>
                    <p>Option {index}</p>
                    {
                        product.Clase==='Cascos'
                        ?
                        <input type="text" placeholder='Diseño' onChange={(e) => {
                        let NewProduct = product
                        NewProduct.options
                            ?
                            NewProduct.options[index]
                                ? NewProduct.options[index].design = e.target.value
                                : NewProduct.options[index] = { design: e.target.value }

                            : NewProduct.options = [{ design: e.target.value }]


                        setProduct(NewProduct)
                        console.log(product);
                    }} />
                    : ''
                    }

                    <input type="color" placeholder='Color' onChange={(e) => {
                        let NewProduct = product
                        NewProduct.options
                            ?
                            NewProduct.options[index]
                                ? NewProduct.options[index].color = e.target.value
                                : NewProduct.options[index] = { color: e.target.value }

                            : NewProduct.options = [{ color: e.target.value }]


                        setProduct(NewProduct)
                        console.log(product);
                    }} />
                    <input type="color" placeholder='Segundo Color' onChange={(e) => {
                        let NewProduct = product
                        NewProduct.options
                            ?
                            NewProduct.options[index]
                                ? NewProduct.options[index].secondaryColor = e.target.value
                                : NewProduct.options[index] = { secondaryColor: e.target.value }

                            : NewProduct.options = [{ secondaryColor: e.target.value }]


                        setProduct(NewProduct)
                        console.log(product);
                    }} />
                    <input type="color" placeholder='Tercer Color' onChange={(e) => {
                        let NewProduct = product
                        NewProduct.options
                            ?
                            NewProduct.options[index]
                                ? NewProduct.options[index].thirdcolor = e.target.value
                                : NewProduct.options[index] = { thirdcolor: e.target.value }

                            : NewProduct.options = [{ thirdcolor: e.target.value }]


                        setProduct(NewProduct)
                        console.log(product);
                    }} />
                    <input type="text" placeholder='colorName' onChange={(e) => {
                        let NewProduct = product
                        NewProduct.options
                            ?
                            NewProduct.options[index]
                                ? NewProduct.options[index].colorName = e.target.value
                                : NewProduct.options[index] = { colorName: e.target.value }

                            : NewProduct.options = [{ colorName: e.target.value }]


                        setProduct(NewProduct)
                        console.log(product);
                    }} />
                    <input type="text" placeholder='Image' onChange={(e) => {
                        let NewProduct = product
                        NewProduct.options
                            ?
                            NewProduct.options[index]
                                ? NewProduct.options[index].image = e.target.value
                                : NewProduct.options[index] = { image: e.target.value }

                            : NewProduct.options = [{ image: e.target.value }]


                        setProduct(NewProduct)
                        console.log(product);
                    }} />
                    {
                        product.Clase === 'Cascos' || product.Clase === 'Indumentaria'
                            ? <>
                                <label htmlFor="XS"></label>
                                <input type="number" id='XS' placeholder='XS' onChange={(e) => {
                                    let NewProduct = product
                                    NewProduct.options
                                        ?
                                        NewProduct.options[index]
                                            ? NewProduct.options[index].XS = e.target.value
                                            : NewProduct.options[index] = { XS: e.target.value }

                                        : NewProduct.options = [{ XS: e.target.value }]


                                    setProduct(NewProduct)
                                    console.log(product);
                                }
                                } />
                                <input type="number" id='S' placeholder='S' onChange={(e) => {
                                    let NewProduct = product
                                    NewProduct.options
                                        ?
                                        NewProduct.options[index]
                                            ? NewProduct.options[index].S = e.target.value
                                            : NewProduct.options[index] = { S: e.target.value }

                                        : NewProduct.options = [{ S: e.target.value }]


                                    setProduct(NewProduct)
                                    console.log(product);
                                }
                                } />
                                <input type="number" id='M' placeholder='M' onChange={(e) => {
                                    let NewProduct = product
                                    NewProduct.options
                                        ?
                                        NewProduct.options[index]
                                            ? NewProduct.options[index].M = e.target.value
                                            : NewProduct.options[index] = { M: e.target.value }

                                        : NewProduct.options = [{ M: e.target.value }]


                                    setProduct(NewProduct)
                                    console.log(product);
                                }
                                } />
                                <input type="number" id='S' placeholder='L' onChange={(e) => {
                                    let NewProduct = product
                                    NewProduct.options
                                        ?
                                        NewProduct.options[index]
                                            ? NewProduct.options[index].L = e.target.value
                                            : NewProduct.options[index] = { L: e.target.value }

                                        : NewProduct.options = [{ L: e.target.value }]


                                    setProduct(NewProduct)
                                    console.log(product);
                                }
                                } />
                                <input type="number" id='XL' placeholder='XL' onChange={(e) => {
                                    let NewProduct = product
                                    NewProduct.options
                                        ?
                                        NewProduct.options[index]
                                            ? NewProduct.options[index].XL = e.target.value
                                            : NewProduct.options[index] = { XL: e.target.value }

                                        : NewProduct.options = [{ XL: e.target.value }]


                                    setProduct(NewProduct)
                                    console.log(product);
                                }
                                } />
                                <input type="number" id='XXL' placeholder='XXL' onChange={(e) => {
                                    let NewProduct = product
                                    NewProduct.options
                                        ?
                                        NewProduct.options[index]
                                            ? NewProduct.options[index].XXL = e.target.value
                                            : NewProduct.options[index] = { XXL: e.target.value }

                                        : NewProduct.options = [{ XXL: e.target.value }]


                                    setProduct(NewProduct)
                                    console.log(product);
                                }
                                } />
                                <input type="number" id='3XL' placeholder='3XL' onChange={(e) => {
                                    let NewProduct = product
                                    NewProduct.options
                                        ?
                                        NewProduct.options[index]
                                            ? NewProduct.options[index].XXXL = e.target.value
                                            : NewProduct.options[index] = { XXXL: e.target.value }

                                        : NewProduct.options = [{ XXXL: e.target.value }]


                                    setProduct(NewProduct)
                                    console.log(product);
                                }
                                } />


                            </>
                            : <>
                                <input type="number" placeholder='Stock' onChange={(e) => {
                                    let NewProduct = product
                                    NewProduct.options
                                        ?
                                        NewProduct.options[index]
                                            ? NewProduct.options[index].stock = e.target.value
                                            : NewProduct.options[index] = { stock: e.target.value }

                                        : NewProduct.options = [{ stock: e.target.value }]
                                    setProduct(NewProduct)
                                    console.log(product);
                                }} />
                            </>
                    }
                </>
            ))}
            <button onClick={()=>{createOrder()}}>AA</button>
        </div>
    )
}

export default CrearArticulo