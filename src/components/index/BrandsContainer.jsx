import React from 'react'
import BrandRow from './BrandRow'

const BrandsContainer = () => {
  const MotoBrands = ['Motos', 'Honda', 'CFMoto', 'TVS', 'Suzuki', 'Lifan']
  const HelmetsBrands = ['Cascos', 'MT', 'AGV', 'LS2', 'HJC', 'Nolan', 'Nenki', 'Hawk', 'X-One', 'IXS']
  const IndumBrands = ['Indumentaria', 'Seventy', 'Kore', 'LS2', 'Givi', 'IXS', 'Hevik']
  const AccesoriosBrands = ['Accesorios', 'Givi', 'Kappa', 'Luma', 'LS2', 'Midland', 'Twiins']
  const options = [MotoBrands, HelmetsBrands, IndumBrands, AccesoriosBrands]

  return (
    <section>
        {
          options.map(element => (
            <BrandRow data={element} />
          ))
        }
    </section>
  )
}

export default BrandsContainer