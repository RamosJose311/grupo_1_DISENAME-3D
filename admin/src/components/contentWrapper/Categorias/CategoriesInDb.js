import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import WarapperCategories from './WarapperCategories';


function CategoriesInDb() {

      const [products, setproducts] = useState({
        data:[]
    })

    useEffect( () =>  {
       const ApiCall = async (url) => {
                const resp = await fetch(url)
                const data = await resp.json()
                {
                    if(data.data.productos.length === 0){
                        setproducts({
                            ...products,
                            data: data.data.productos
                        })
                    } else {
                        setproducts({
                            ...products,
                            data: data.data.productos
                        })
                    }
                  }
            }
    
        ApiCall ("http://localhost:4000/api/products/")

    }, [])

    const [categories, setCategories] = useState({
        data:[]
    })

    useEffect( () =>  {
        let cat = []
        let aux = []
        {
            products.data.map((elem,index)=>{
                if(!cat.includes(elem.categories.name)){
                    cat.push(elem.categories.name)
                    aux.push(elem.categories)
                }
                
            })

        setCategories({
            ...categories,
            data : [...aux]
        })
        }
        
    },[products])

   

    
  return (
    <React.Fragment>

        {categories.data.length === 0 && <p>Cargando....</p>}

        {
           categories.data.map((elem,index)=>{
            console.log("que mostras: ",elem);
            return <WarapperCategories {...elem} key = {index} />
        })
        }
   </React.Fragment>
  )
}

export default CategoriesInDb



