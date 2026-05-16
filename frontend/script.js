let allProducts = [];

        productDiv.innerHTML += `

            <div class="product">

                <img src="${product.image}">

                <div class="product-info">

                    <h3>${product.name}</h3>

                    <p><b>Loại:</b> ${product.type}</p>

                    <p class="price">${product.price}</p>

                    <button class="btn"

                        onclick="showDetail(
                            '${product.name}',
                            '${product.type}',
                            '${product.price}',
                            '${product.desc}',
                            '${product.image}'
                        )">

                        Xem chi tiết

                    </button>

                </div>

            </div>
        `;
    });
}

function filterProducts(type){

    if(type === 'all'){
        showProducts(allProducts);
    }
    else{

        const filtered = allProducts.filter(product => product.type === type);

        showProducts(filtered);
    }
}

function showDetail(name, type, price, desc, img){

    document.getElementById('modal').style.display = 'flex';

    document.getElementById('modal-name').innerText = name;

    document.getElementById('modal-type').innerText = 'Loại: ' + type;

    document.getElementById('modal-price').innerText = price;

    document.getElementById('modal-desc').innerText = desc;

    document.getElementById('modal-img').src = img;
}

function closeModal(){

    document.getElementById('modal').style.display = 'none';
}

loadProducts();