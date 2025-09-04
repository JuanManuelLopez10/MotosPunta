import React, { useContext, useEffect, useMemo, useState } from 'react';

import { useLocation } from 'react-router-dom';

const ServicesScreen = (props) => {
      const productId = useLocation().pathname.split('/services/')[1];
      const [producto, setproducto] = useState(undefined)

      if (productId) {
        console.log(productId);
        
      }
    }



export default ServicesScreen;