import { getDownloadURL, getMetadata, listAll, ref } from "firebase/storage";
import { createContext, useRef, useState } from "react";
import db, { firebaseConfig, st } from "../data/FirestoreData";
import { addDoc, arrayUnion, collection, deleteDoc, doc, getDocs, getFirestore, setDoc, updateDoc } from "firebase/firestore";
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
      } else if ((deltaY < -100)) {
        setSection(b);
        setPresection(actual)
        startY.current = null;
        setPresection(actual)

      }
    }
  };

  const MoveToScreen = (actual, next) => {

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


  const [SelectedMoto, setSelectedMoto] = useState({})
  const selectMoto = (moto) => {
    setSelectedMoto(moto)
  }

  const fontPixel = Width / 20

  const [Datos, setDatos] = useState([])
  const [loaded, setLoaded] = useState(false)


  const addDato = async (a) => {
    if (a.Color === 'Rojo') {
      a.Colour = 'ff0004'
    } else if (a.Color === 'Negro') {
      a.Colour = '3e3e3e'
    } else if (a.Color === 'Azul') {
      a.Colour = '0006ff'
    } else if (a.Color === 'Gris') {
      a.Colour = '9a9a9a'
    } else if (a.Color === 'Naranja') {
      a.Colour = 'ff7e00'
    } else if (a.Color === 'Amarillo') {
      a.Colour = 'fffc00'
    } else if (a.Color === 'Verde') {
      a.Colour = '24ff00'
    } else if (a.Color === 'Blanco') {
      a.Colour = 'efefef'
    } else if (a.Color === 'Violeta') {
      a.Colour = 'ae00ff'
    } else if (a.Color === 'Celeste') {
      a.Colour = '00ccff'
    } else if (a.Color === 'Rosado' || a.Color === 'Rosa') {
      a.Colour = 'e400ff'
    } else if (a.Color === 'Dorado') {
      a.Colour = 'cc9742'
    } else if (a.Color === 'Marrón') {
      a.Colour = 'b77000'
    }

    const newProduct = {
      id: a.id,
      product: {
        Title: a.Title,
        Description: a.Description,
        Price: a.Price,
        Brand: a.Brand,
        id: a.id,
        Class: a.ProductType,
        Pattern: a.Pattern,
        Type: a.Type,
        Options: [
          {
            Color: a.Color,
            Image: a.Image,
            Model: a.Model,
            Colour: a.Colour
          }
        ],
        Wallpaper: a.Wallpaper,
        HotProduct: a.HotProduct
      }
    };
    const ProductosCollection = collection(db, "Productos");
    const motosSnapshot = await getDocs(ProductosCollection);
    const Datos = motosSnapshot.docs.map((doc) => ({id:doc.id, product:doc.data()}))
if (Datos.some(producto => producto.product.Title === a.Title)) {
    // Encontrar el índice del producto que ya existe
    const elProductoIndex = Datos.findIndex(producto => producto.product.Title === a.Title);
    const elProducto = Datos[elProductoIndex]; // Obtener el producto actual

    // Obtener la ID del documento en Firestore
    const laId = elProducto.id;

    // Definir el nuevo objeto que quieres agregar al array Options
    const nuevoObjeto = {
      Color: a.Color,
      Image: a.Image,
      Model: a.Model,
      Colour: a.Colour
    };

    // Actualizar el array 'Options' del producto en Firestore
    const docRef = doc(db, "Productos", laId);
    await updateDoc(docRef, {
        Options: arrayUnion(nuevoObjeto) // Agregar el nuevo objeto al array Options
    });
    }else{
      const docRef = await addDoc(collection(db, "Productos"), {

        Title: a.Title,
        Description: a.Description,
        Price: a.Price,
        Brand: a.Brand,
        id: a.id,
        Class: a.ProductType,
        Pattern: a.Pattern,
        Type: a.Type,
        Options: [
          {
            Color: a.Color,
            Image: a.Image,
            Model: a.Model,
            Colour: a.Colour
          }
        ],
        Wallpaper: a.Wallpaper,
        HotProduct: a.HotProduct
      
    });
    }

  };

  const [BrandFilters, setBrandFilters] = useState(undefined)
  const HandleChangeBrand = (a) => {
    setBrandFilters(a)
  }
  const [CilindFilters, setCilindFilters] = useState(undefined)
  const HandleChangeCilind = (a) => {
    setCilindFilters(a)
  }
  const [Clases, setClases] = useState(null)
  const GetClases = async () => {
    const MotosCollection = collection(db, "Productos");

    const motosSnapshot = await getDocs(MotosCollection);
    const producots = motosSnapshot.docs.map((doc) => ({ id: doc.id, product: doc.data() }))

    const clasess = motosSnapshot.docs.map((doc) => doc.data()).map((doc) => ({ tipo: doc.Type, clase: doc.Class }))
    const clasesMotos = clasess.filter((value, index, self) =>
      index === self.findIndex((t) => (
        t.tipo === value.tipo && t.clase === value.clase
      ))
    )
    setClases(clasesMotos)
  }


  return (
    <CartContext.Provider value={{ SelectedClass, loaded, Clases, addDato, setselectedClass, GetClases, CilindFilters, BrandFilters, HandleChangeBrand, HandleChangeCilind, setDatos, ProductShown, setScreen, setProductShown, setSection, setMenuSelectedClass, MenuSelectedClass, MoveToScreen, setScreen, Screen, PreScreen, Section, setPresection, Presection, handleTouchStart, handleTouchMove, setWidth, setHeigth, Orientation, setOrientation, ImageStorage, setImageStorage, SelectedCategory, changeCategory, currentScreen, changeScreen, selectMoto, SelectedMoto, Width, Heigth, fontPixel, Datos, OpenMenu, handleOpenMenu }}>
      {children}
    </CartContext.Provider>
  )
}
export default CartContextProvider;