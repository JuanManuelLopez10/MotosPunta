import { getDownloadURL, getMetadata, listAll, ref } from "firebase/storage";
import { createContext, useRef, useState } from "react";
import db, { firebaseConfig, st } from "../data/FirestoreData";
import { addDoc, collection, deleteDoc, doc, getDocs, getFirestore, updateDoc } from "firebase/firestore";
export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
    const [ImageStorage, setImageStorage] = useState([])
    const [Width, setWidth] = useState(1)
    const [Heigth, setHeigth] = useState(1)
    const [Orientation, setOrientation] = useState('Landscape')
    const [Section, setSection] = useState('Wallpaper')
    const [Presection, setPresection] = useState(undefined)
    const [Screen, setScreen] = useState('Index')
    const [PreScreen, setPreScreen] = useState(undefined)
    const [MenuSelectedClass, setMenuSelectedClass] = useState(undefined)
    const startY = useRef(null);
    const [ProductShown, setProductShown] = useState(undefined)
    const handleTouchStart = (event) => {
      startY.current = event.touches[0].clientY;
    };


    const handleTouchMove = (event, a, b, actual) => {
      if (startY.current !== null) {
        const currentY = event.touches[0].clientY;
        const deltaY = startY.current - currentY;
  
        if (deltaY > 100) {
          setSection(a);
          setPresection(actual)
          startY.current = null;
          setPresection(actual)
        }else if((deltaY < -100)){
          setSection(b);
          setPresection(actual)
          startY.current = null;
          setPresection(actual)

        }
      }
    };

    const MoveToScreen = (actual, next) =>{
        
        setPreScreen(actual)
        setScreen(next)
        setPresection(undefined)
        setSection('Wallpaper')
    }    




    const [OpenMenu, setOperMenu] = useState(false)
    const handleOpenMenu = () => {
      setOperMenu(!OpenMenu)
    }

    const [currentScreen, setCurrentScreen] = useState('Inicio')
    const changeScreen = (screenselected) => {
        if (OpenMenu === true) {
            setOperMenu(false)
        }
        setCurrentScreen(screenselected)
    }

    const [SelectedCategory, setSelectedCategory] = useState()
    const [SelectedClass, setselectedClass] = useState(null)
    const changeCategory = (category) => {
        setSelectedCategory(category.tipo)
        setselectedClass(category.clase)
    }
    const changeClase = (a) => {
      setselectedClass(a)
    }

    const [SelectedMoto, setSelectedMoto] = useState({})
    const selectMoto = (moto) => {
        setSelectedMoto(moto)
    }

    const fontPixel = Width/20
    
    const [Datos, setDatos] = useState([])
    const [loaded, setLoaded] = useState(false)

    
    const addDato = (a) => {
      const Benefits = [{Title: a.Benefit1title, Description: a.Benefit1Description, Image:a.Benefit1Img},{Title: a.Benefit2title, Description: a.Benefit2Description, Image:a.Benefit2Img},{Title: a.Benefit3title, Description: a.Benefit3Description, Image:a.Benefit3Img}]
      
      setDatos((prevDatos) => {
        if (prevDatos.findIndex(prod => prod.product === a) === -1) {
          const newProduct = {
            id:a.id,
            product:{
                Title: a.Title,
                Description: a.Description,
                Price: a.Price,
                Brand: a.Brand,
                id: a.id,
                Class: a.ProductType,
                Pattern: a.Pattern,
                Type: a.Type,
                Benefits:Benefits,
                Options:[
                  {
                    Color: a.Color,
                    Image: a.Image,
                    Model: a.Model,
                }
                ],
                Wallpaper:a.Wallpaper,
                HotProduct:a.HotProduct
              }
          };
          return [...prevDatos, newProduct];
        } else {
          // handleDatos(); // Si el producto ya existe, actualiza datos
          return prevDatos;
        }
      });
    };

    const [BrandFilters, setBrandFilters] = useState(undefined)
    const HandleChangeBrand = (a) =>{
      setBrandFilters(a)
    }
    const [CilindFilters, setCilindFilters] = useState(undefined)
    const HandleChangeCilind = (a) =>{
      setCilindFilters(a)
    }
    const [Clases, setClases] = useState(null)
    const GetClases = async () => {
      const MotosCollection = collection(db, "Motos");
      const CascosCollection = collection(db, "Cascos");
      const IndumCollection = collection(db, "Indumentaria");

      const motosSnapshot = await getDocs(MotosCollection);
      const clasess = motosSnapshot.docs.map((doc)=> doc.data().product).map((doc)=>({tipo: doc.Type, clase: doc.Class}))
      const clasesMotos = clasess.filter((value, index, self) =>
        index === self.findIndex((t) => (
          t.tipo === value.tipo && t.clase === value.clase
        ))
      ) 
      const cascosSnapshot = await getDocs(CascosCollection);
      const cascosclasess = cascosSnapshot.docs.map((doc)=> doc.data().product).map((doc)=>({tipo: doc.Type, clase: doc.Class}))
      const cascosclases = cascosclasess.filter((value, index, self) =>
        index === self.findIndex((t) => (
          t.tipo === value.tipo && t.clase === value.clase
        ))
      )      
      const indumSnapshot = await getDocs(IndumCollection);
      const indumclasess = indumSnapshot.docs.map((doc)=> doc.data().product).map((doc)=>({tipo: doc.Type, clase: doc.Class}))
      const indumclases = indumclasess.filter((value, index, self) =>
        index === self.findIndex((t) => (
          t.tipo === value.tipo && t.clase === value.clase
        ))
      )
      const Clases = [...indumclases, ...cascosclases, ...clasesMotos]
      console.log(Clases);
      setClases(Clases);
    }


    return (
        <CartContext.Provider value={{SelectedClass, loaded, Clases, addDato, setselectedClass, GetClases, CilindFilters, BrandFilters, HandleChangeBrand, HandleChangeCilind, setDatos, ProductShown, setScreen, setProductShown, setSection, setMenuSelectedClass, MenuSelectedClass, MoveToScreen, setScreen, Screen, PreScreen, Section, setPresection, Presection, handleTouchStart, handleTouchMove, setWidth, setHeigth, Orientation, setOrientation, ImageStorage, setImageStorage, SelectedCategory, changeCategory, currentScreen, changeScreen, selectMoto, SelectedMoto, Width, Heigth, fontPixel, Datos, OpenMenu, handleOpenMenu }}>
            {children}
        </CartContext.Provider>
    )
}
export default CartContextProvider;