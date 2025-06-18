document.addEventListener('DOMContentLoaded', function () {
  const menuData = {
    manakish: {
      title: 'منقوش',
      items: [
        { name: 'زعتر', sizes: { small: '30,000 ل.ل', large: '40,000 ل.ل' }, image: 'logohaskeh.png' },
        { name: 'زعتر مشروحه ',price: '80,000 ل.ل', image: 'logohaskeh.png' },
        { name: 'جبنه', sizes: { small: '50,000 ل.ل', large: '100,000 ل.ل' }, image: 'logohaskeh.png' },
        { name: 'جبنه مشروحه',price: '200,000 ل.ل', image: 'logohaskeh.png' },
        { name: 'جبنه سجق', price: '150,000 ل.ل', image: 'logohaskeh.png' },
        { name: 'جبنه مرتديلا',  price: '150,000 ل.ل', image: 'logohaskeh.png' },
        { name: 'جبنه دره',  price: '130,000 ل.ل', image: 'logohaskeh.png' },
        { name: 'نص جبنه نص زعتر ', sizes: {small: '50,000 ل.ل', large: '100,000 ل.ل'}, image: 'logohaskeh.png' },
        { name: 'لحمه', sizes: { small: '80,000 ل.ل', large: '100,000 ل.ل'}, image: 'logohaskeh.png' },
        { name: 'لحمه مع جبنه',  price: '100,000 ل.ل', image: 'logohaskeh.png' },
        { name: 'اريشه',  price: '70,000 ل.ل', image: 'logohaskeh.png' },
        { name: 'اريشه مع جبنه قشقوان', price: '100,000 ل.ل', image: 'logohaskeh.png' },
        { name: 'تركيه',  price: '50,000 ل.ل' , image: 'logohaskeh.png' },
        { name: 'تركيه مع جبنه',  price: '100,000 ل.ل' , image: 'logohaskeh.png' },
        { name: 'لبنه و مرتديلا',  price: '150,000 ل.ل', image: 'logohaskeh.png' },
        { name: 'طاووق', sizes: { small: '150,000 ل.ل', large: '200,000 ل.ل'}, image: 'logohaskeh.png' },
        { name: 'فاهيتا',  price: '200,000 ل.ل', image: 'logohaskeh.png' },
      ]
    },

    soiree: {
      title: 'سواريه',
      items: [
        { name: 'كروسان', price: 'جبنة: 40,000 ل.ل | شوكولا: 40,000 ل.ل', image: 'logohaskeh.png' },
        { name: 'لحمه بعجين بزبده', price: '50,000 ل.ل', image: 'logohaskeh.png' },
        { name: 'لحمه بعجين ', price: '70,000 ل.ل', image: 'logohaskeh.png' },
        { name: 'سواريه', price: 'جبنة | بيتزا | فاهيتا: 30,000 ل.ل', image: 'logohaskeh.png' },
        { name: 'دزدينه سواريه  مشكل', price: '350,000 ل.ل' , image: 'logohaskeh.png'},
        { name: 'دزدينه لحمه بعجين ', price: '800,000 ل.ل', image: 'logohaskeh.png' },
      ]
    },

    kaak: {
      title: 'كعك',
      items: [
        { name: 'كعكه', price: '100,000 ل.ل' , image: 'logohaskeh.png'},
        { name: 'كعك دره ', price: '130,000 ل.ل' , image: 'logohaskeh.png'},
        { name: 'كعك فهيتا', price: '150,000 ل.ل' , image: 'logohaskeh.png'},  
        { name: 'كعكه إكستر مع خضره', price: '150,000 ل.ل' , image: 'logohaskeh.png'},
      ]
    },

    pizza: {
      title: 'بيتزا',
      items: [
        { name: 'بيتزا صغيرة', price: '100,000 ل.ل', image: 'logohaskeh.png'},
        { name: 'بيتزا وسط', price: '150,000 ل.ل' , image: 'logohaskeh.png'},
        { name: 'بيتزا كبيرة', price: '300,000 ل.ل, 400,000 ل.ل, 500,000 ل.ل', image: 'logohaskeh.png' }
      ]
    },

    juices: {
      title: 'عصائر',
      items: [
        { name: 'مستر جوسي', price: '20,000 ل.ل', image: 'mrjus.png' },
        { name: 'عيران', price: '50,000 ل.ل', image: 'arann.jpg' },
        { name: 'ماء', price: 'صغيرة: 20,000 ل.ل | كبيرة: ', image: 'water.jpg' },
        { name: 'Pepsi', price: 'قنينة: 60,000 ل.ل | تنك: 70,000 ل.ل', image: 'pepsi.webp' },
        { name: 'Mirinda', price: 'قنينة: 60,000 ل.ل | تنك: 70,000 ل.ل', image: 'mernda.jpg' },
        { name: '7up', price: 'قنينة: 60,000 ل.ل | تنك: 70,000 ل.ل', image: '7up.jpg' },
      ]
    }
  };

  const container = document.getElementById('menu-container');

  Object.entries(menuData).forEach(([key, category]) => {
    const categoryDiv = document.createElement('div');
    categoryDiv.classList.add('menu-category');

    const title = document.createElement('div');
    title.classList.add('category-title');
    title.innerHTML = `${category.title} <span class="toggle-icon">▶</span>`;

    const itemsDiv = document.createElement('div');
    itemsDiv.classList.add('menu-items', 'hidden');

    category.items.forEach((item) => {
      const itemDiv = document.createElement('div');
      itemDiv.classList.add('menu-item');

      if (item.image) {
        const img = document.createElement('img');
        img.src = item.image;
        img.alt = item.name;
        img.classList.add('item-image');
        itemDiv.appendChild(img);
      }

      const textDiv = document.createElement('div');
      textDiv.classList.add('item-text');

      const nameEl = document.createElement('strong');
      nameEl.textContent = item.name;
      textDiv.appendChild(nameEl);

      if (item.sizes) {
        Object.entries(item.sizes).forEach(([size, price]) => {
          const sizeLine = document.createElement('div');
          sizeLine.textContent = `${size === 'small' ? 'صغير' : 'كبير'}: ${price}`;
          textDiv.appendChild(sizeLine);
        });
      } else if (item.price) {
        const priceEl = document.createElement('div');
        priceEl.textContent = item.price;
        textDiv.appendChild(priceEl);
      }

      itemDiv.appendChild(textDiv);
      itemsDiv.appendChild(itemDiv);
    });

    title.addEventListener('click', () => {
      const isOpen = itemsDiv.classList.toggle('open');
      itemsDiv.classList.toggle('hidden', !isOpen);
      const icon = title.querySelector('.toggle-icon');
      icon.style.transform = isOpen ? 'rotate(90deg)' : 'rotate(0deg)';
      itemsDiv.style.maxHeight = isOpen ? itemsDiv.scrollHeight + 'px' : '0px';

      if (isOpen) {
        Array.from(itemsDiv.children).forEach((item, i) => {
          item.style.opacity = 0;
          item.style.transition = `opacity 0.4s ease ${i * 0.1}s`;
          requestAnimationFrame(() => (item.style.opacity = 1));
        });
      }
    });

    categoryDiv.appendChild(title);
    categoryDiv.appendChild(itemsDiv);
    container.appendChild(categoryDiv);
  });
});
