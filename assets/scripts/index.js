// Event listeners for rendering catalog page
document.querySelector('.catalogLink').addEventListener('click', emptyMain);
document.querySelector('.catalogLink').addEventListener('click', renderCatalog);

// Event Listeners for rendering about page
document.querySelector('.aboutLink').addEventListener('click', emptyMain);
document.querySelector('.aboutLink').addEventListener('click', renderAbout);

function renderAbout() {
  const container = document.createElement('div');
  container.classList.add('about-container');

  const about = document.createElement('article');
  about.classList.add('about');

  const title = document.createElement('h2');
  title.innerText = 'About';
  about.appendChild(title);

  const aboutText = document.createElement('p');
  aboutText.innerText =
    'This page was made as an assignment to an online class at dicoding.com. ' +
    'Any items displayed are not real purchasable items. ' +
    'Photos used are credited to their original creators. ' +
    'Thank you for viewing this little project. ';
  about.appendChild(aboutText);

  container.appendChild(about);
  document.querySelector('main').appendChild(container);
}

function renderCatalog() {
  const container = catalogContainer();

  const catalog = createCatalog();

  const title = createTitle();
  catalog.appendChild(title);

  // Hard-coded items from items.js
  items.forEach((item) => {
    const displayedItem = createItem(item);
    catalog.appendChild(displayedItem);
  });

  container.appendChild(catalog);
  document.querySelector('main').appendChild(container);
}

function createItem(item) {
  const shopItem = document.createElement('div');
  shopItem.classList.add('item');

  const itemImage = document.createElement('img');
  itemImage.setAttribute('src', 'assets/images/' + item.image);
  itemImage.setAttribute('alt', item.name);

  const itemName = document.createElement('span');
  itemName.innerText = item.name;

  const itemPrice = document.createElement('span');
  itemPrice.innerText = item.price;

  const itemCredit = document.createElement('cite');
  itemCredit.innerText = item.credit;

  const itemDetails = [itemImage, itemName, itemPrice, itemCredit];

  itemDetails.forEach((itemDetail) => {
    shopItem.appendChild(itemDetail);
  });

  return shopItem;
}

function catalogContainer() {
  const container = document.createElement('div');
  container.classList.add('catalog-container');

  return container;
}

function createCatalog() {
  const catalog = document.createElement('div');
  catalog.classList.add('catalog');

  return catalog;
}

function createTitle() {
  const title = document.createElement('h2');
  title.innerText = 'Catalog';

  return title;
}

function emptyMain() {
  document.querySelector('main').innerHTML = '';
}
