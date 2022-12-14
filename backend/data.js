
import bcrypt from 'bcryptjs';

const data = {

    users: [
        {
            name: 'Admin',
            email: 'admin@example.com',
            password: bcrypt.hashSync('123456',9),
            isAdmin: true,
        },
        {
            name: 'John',
            email: 'user@axample.com',
            password: bcrypt.hashSync('1234567',9),
            isAdmin: false,
        },
        {
            name: 'Jelena',
            email: 'jelena@example.com',
            password: bcrypt.hashSync('123456789',9),
            isAdmin: false,
        }


    ],

    products: [
        {
            // _id: '1',
            name: 'Nike Slim shirt',
            slug: 'nike-slim-shirt',
            category: 'Shirts',
            image: '/images/p1.jpg', // 679px × 829px
            price: 120,
            countInStock: 3,
            brand: 'Nike',
            rating: 3,
            numReviews: 8,
            description: 'high quality shirt',
        },
        {
            // _id: '2',
            name: 'Adidas Fit Shirt',
            slug: 'adidas-fit-shirt',
            category: 'Shirts',
            image: '/images/p2.jpg',
            price: 250,
            countInStock: 0,
            brand: 'Adidas',
            rating: 5,
            numReviews: 10,
            description: 'high quality product',
        },
        {
            // _id: '3',
            name: 'Nike Slim Pant',
            slug: 'nike-slim-pant',
            category: 'Pant',
            image: '/images/p3.jpg',
            price: 25,
            countInStock: 3,
            brand: 'Nike',
            rating: 2.5,
            numReviews: 14,
            description: 'high quality product',
        },
        {
            // _id: '4',
            name: 'Adidas Fit Pant',
            slug: 'adidas-fit-pant',
            category: 'Pant',
            image: '/images/p4.jpg',
            price: 65,
            countInStock: 5,
            brand: 'Puma',
            rating: 3,
            numReviews: 10,
            description: 'high quality product',
        },

    ]

};

export default data;