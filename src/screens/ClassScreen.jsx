import { collection, getDocs, query, where } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import db from '../data/FirestoreData';
import CategoryRow from '../components/categories/categoryRow';

const ClassScreen = () => {
  const { idClase } = useParams();
  const [datos, setDatos] = useState([])
  const [brands, setBrands] = useState([])
  const [categories, setCategories] = useState([])
  const [SelectedCategory, setSelectedCategory] = useState('')

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

  return (
    <>
    <div>
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
    </div>
    </>
  )
}

export default ClassScreen