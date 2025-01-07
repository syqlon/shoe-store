import React from 'react'
import { Outlet } from 'react-router-dom'

export const Products = () => {

    const Shoe = ({ name, price, description, features, image, imageLink }) => {
        return (
          <div className="shoe-card">
            <img src={image} alt={name} className="shoe-image" />
            <h2>{name}</h2>
            <p><strong>Price:</strong> ${price}</p>
            <p><strong>Description:</strong> {description}</p>
            <h3>Features:</h3>
            <ul>
              {features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
            <a href={imageLink} target="_blank" rel="noopener noreferrer">View Image</a>
          </div>
        );
      };
      
        const shoesData = [
          {
            name: 'Nike Air Max 270',
            price: 150,
            description:
              'The Nike Air Max 270 features a futuristic design with the largest Air Max unit in the heel, providing unparalleled comfort.',
            features: [
              'Mesh upper for breathability',
              'Large Air Max heel unit for superior cushioning',
              'Flexible rubber outsole for durability',
              'Available in multiple colors',
            ],
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Nike_Air_Max_270_Flyknit.jpg/1280px-Nike_Air_Max_270_Flyknit.jpg',
            imageLink: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Nike_Air_Max_270_Flyknit.jpg/1280px-Nike_Air_Max_270_Flyknit.jpg',
          },
          {
            name: 'Adidas Ultraboost 22',
            price: 180,
            description:
              'The Adidas Ultraboost 22 is known for its ultra-soft Boost cushioning and sleek, modern design. Engineered for maximum comfort.',
            features: [
              'Boost midsole for responsive cushioning',
              'Primeknit upper that adapts to your foot',
              'Stretchweb outsole with Continental™ Rubber for superior grip',
              'Lightweight and breathable design',
            ],
            image: 'https://upload.wikimedia.org/wikipedia/commons/1/18/Adidas_UltraBoost_22_%28FY9054%29.jpg',
            imageLink: 'https://upload.wikimedia.org/wikipedia/commons/1/18/Adidas_UltraBoost_22_%28FY9054%29.jpg',
          },
          {
            name: 'Converse Chuck Taylor All Star',
            price: 60,
            description:
              'The Converse Chuck Taylor All Star is a timeless classic with a high-top silhouette. Featuring a canvas upper and rubber sole.',
            features: [
              'Durable canvas upper',
              'Rubber sole with Converse’s signature toe cap',
              'Available in a variety of colors and patterns',
              'Versatile for casual and streetwear looks',
            ],
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/ConverseChuckTaylorAllStarBlackHighTop.jpg/1280px-ConverseChuckTaylorAllStarBlackHighTop.jpg',
            imageLink: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/ConverseChuckTaylorAllStarBlackHighTop.jpg/1280px-ConverseChuckTaylorAllStarBlackHighTop.jpg',
          },
        ];

  return (
    <div>
        <h3>Products</h3>
        <div className="shoe-list">
      {shoesData.map((shoe, index) => (
        <Shoe
          key={index}
          name={shoe.name}
          price={shoe.price}
          description={shoe.description}
          features={shoe.features}
          image={shoe.image}
          imageLink={shoe.imageLink}
        />
      ))}
    </div>
    </div>
  )
}
