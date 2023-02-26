
import React, { useState } from "react"
import CartItem from "./CartItem"


interface Props {
    // children: ReactNode,
    getTotalPrice?: any
}
const CartItemList: React.FC<Props> = ({getTotalPrice}) => {
    const data = [
        {
          "id": 1,
          "name": "貓咪罐罐",
          "image": "https://picsum.photos/300/300?text=1",
          "price": 100,
          "quantity": 2
        },
        {
          "id": 2,
          "name": "貓咪干干",
          "image": "https://picsum.photos/300/300?text=2",
          "price": 200,
          "quantity": 1
        }
    ]
   

    return <>
        {
            data.map( (item) => {
                const {
                    id,
                    name,
                    image,
                    price,
                } = item
                return (
                    <CartItem
                        image={image}
                        name={name}
                        price={price}
                        key={id}
                        getTotalPrice={getTotalPrice}
                    />
                )
            })
        }
      </>
        
      
}

// type props = {
//     price: number
// }
const Cart: React.FC = () => { 
    const [totalPrice, setTotalPrice] = useState(300)
    const getTotalPrice:any = (price:number) => {
        setTotalPrice( totalPrice + price )
    }
    return (
        <div className="flex flex-col justify-starts  px-[24px] py-[32px] gap-[32px] border rounded-[8px] mt-[226px]">
            <h1>購物籃</h1>
            <CartItemList getTotalPrice={getTotalPrice}/>
            <hr />
            <div className="flex flex-row justify-between">
                <h1>運費</h1>
                <h1>免費</h1>
            </div>
            <hr />
            <div className="flex flex-row justify-between">
                <h1>小計</h1>
                <h1>{totalPrice}</h1>
            </div>
        </div>
    )
}

export default Cart