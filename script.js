const $btn = document.querySelector('#btn-page-2')

$btn.addEventListener('click', () => {
  state.page++
  products(state.page)
})

const state = {
  page: 1,
}

function products(page){
  fetch(`https://frontend-intern-challenge-api.iurykrieger.now.sh/products?${page}`)
  .then(res => res.json())
  .then(data => buildElement(data.products));
}

products();

function createElement(data){
 const dados = data.map((item) => `
<div class="items__card">
  <figure class="card__figure">
    <img src="${item.image}"/>        
  <figcaption></figcaption>
  </figure>
    <p class="card__name">${item.name}</p>
    <p class="card__description">${item.description}</p>
    <p class="card__old-price">De: R$${item.oldPrice}</p>
    <p class="card__new-price">Por: R$${item.price}</p>
    <p class="card__division">ou ${item.installments.count}x de ${item.installments.value}</p>
    <button class="card__buy">Comprar</button>
</div>`).join('');

return dados;
}

function buildElement(data){
  const $items = document.querySelector('.items');
  $items.innerHTML += createElement(data)
}