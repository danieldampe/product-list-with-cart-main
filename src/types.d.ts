export interface Product {
  id: number
  image: Image
  name: string
  category: string
  price: number
}

export interface ProductInCart extends Product {
  quantity: number
}

export interface Image {
  thumbnail: string
  mobile: string
  tablet: string
  desktop: string
}

export type Cart = ProductInCart[]
