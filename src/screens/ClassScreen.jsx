import { collection, getDocs, query, where } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import db from '../data/FirestoreData';
import CategoryRow from '../components/categories/categoryRow';

const ClassScreen = () => {
  const { idClase } = useParams();
  const [datos, setDatos] = useState([])
  const [categories, setCategories] = useState([])
  console.log(idClase);

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
          let categorias = []
        result.map(item=>{
          const CategoryExist = categorias.includes(item.category)
          if (CategoryExist===false){
            categorias.push(item.category)
          }
        })
        setCategories(categorias)
      })
        .catch(err => console.log(err))

      }, [idClase]);

  return (
    <>
    <div>
    <h1>{idClase}</h1>
      {
        categories.map(item=>(
        <CategoryRow title={item} datos={datos} />
        ))
      }
    </div>
    </>
  )
}

export default ClassScreen