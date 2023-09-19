import { collection, getDocs, query, where } from 'firebase/firestore';
import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import db from '../data/FirestoreData';
import ClassCategories from '../components/ClassScreen/ClassCategories';
import ClassMainCategory from '../components/ClassScreen/ClassMainCategory';
import ClassStore from '../components/ClassScreen/ClassStore';
import { CartContext } from '../context/CartContext';
// import CategoryRow from '../components/categories/categoryRow';

const ClassScreen = () => {
  const { idClase } = useParams();
  const [datos, setDatos] = useState([])
  const [brands, setBrands] = useState([])
  const [categories, setCategories] = useState([])
  const context = useContext(CartContext)


  useEffect(() => {
    const fetchFirestore = async() => {
        let q;
        if(idClase){
            q = query(collection(db, "products"), where('Clase','==', idClase))
        }else{
            q = query(collection(db, "products"))
        }
        const querySnapshot = await getDocs(q);
        const datosdeFirestore = querySnapshot.docs.map(item => ({
            id: item.id,
            ...item.data()
        }))
        return datosdeFirestore;
    }
    fetchFirestore()
        .then(result => {
          setDatos(result)
          let brands = []
          let categories = []
        result.map(item=>{
          const BrandExists = brands.includes(item.brand)
          const CategoryExists = categories.includes(item.category)
          if (BrandExists===false){
            brands.push(item.brand)
          }
          if (CategoryExists===false){
            categories.push(item.category)
          }
        })
        setBrands(brands)
        setCategories(categories)
      })
        .catch(err => console.log(err))

      }, [idClase]);
      
      // context.changeScreen(idClase)

      let Categorias = []
      datos.map(item=>{
        const ClassReady = Categorias.includes(item.category)
        if (ClassReady==false) {
          Categorias.push(item.category)
        }
      })

      if (context.SelectedCategory===null || Categorias.includes(context.SelectedCategory)===false){
        if (context.Orientation==='Portrait') {
          context.changeCategory(Categorias[0])                  
        }else{
          context.changeCategory(false)
        }
      }
      
      return (
    <>
    <div id='Clase'>
      <ClassCategories Categorias={Categorias} datos={datos} />
      <ClassMainCategory datos={datos}/>
      <ClassStore datos={datos}/>
    </div>

    {/* <div>
    <div className='categoryContainer'>
      {
        categories.map(item=>{
          return((
            <button onClick={()=>{setSelectedCategory(item)}} className='categoryButton' >{item}</button>
          ))
        })
      }
    </div>
      {
        brands.map(item=>{
          return(
          <CategoryRow SelectedCategory={SelectedCategory} title={item} datos={datos} />
        )})
      }
    </div> */}
    </>
  )
}

export default ClassScreen