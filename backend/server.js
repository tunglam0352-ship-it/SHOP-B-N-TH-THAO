const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

const products = [
    {
        id: 1,
        name: 'Giày Nike Air',
        type: 'Giày',
        price: '2.500.000đ',
        image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff',
        desc: 'Giày Nike Air chính hãng dành cho chạy bộ và tập gym'
    },

    {
        id: 2,
        name: 'Áo Adidas',
        type: 'Áo',
        price: '450.000đ',
        image: 'https://sneakerdaily.vn/wp-content/uploads/2024/04/Ao-adidas-Tiro-Tee-Black-IP3779.jpg',
        desc: 'Áo Adidas thể thao thoáng mát'
    },

    {
        id: 3,
        name: 'Áo Nike Training',
        type: 'Áo',
        price: '550.000đ',
        image: 'https://sneakerdaily.vn/wp-content/uploads/2024/07/Ao-Nike-Dry-Fit-Mens-Fleece-Full-Zip-Fitness-Hoodie-FB8576-010.jpg',
        desc: 'Áo tập gym Nike co giãn tốt'
    },

    {
        id: 4,
        name: 'Bóng Adidas World Cup 2022',
        type: 'Phụ kiện',
        price: '800.000đ',
        image: 'https://dothethao.net.vn/wp-content/uploads/2021/12/qua-bong-da-wolrd-cup-2022-quatar-mau-1-trang.jpg',
        desc: 'Bóng đá Adidas World Cup 2022'
    },

    {
        id: 5,
        name: 'Găng Tay Gym Nike',
        type: 'Phụ kiện',
        price: '300.000đ',
        image: 'https://down-vn.img.susercontent.com/file/vn-11134207-7ra0g-m9rglbdhtkpm50',
        desc: 'Găng tay gym chống trơn trượt'
    }
];

app.get('/products', (req, res) => {
    res.json(products);
});

app.listen(3000, () => {
    console.log('Server đang chạy tại http://localhost:3000');
});