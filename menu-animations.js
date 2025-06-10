document.addEventListener('DOMContentLoaded', function () {
  const menuData = {
    manakish: {
      title: 'منقوش',
      items: [
        { name: 'زعتر', sizes: { small: '30,000 ل.ل', large: '40,000 ل.ل' }, image: 'https://placehold.co/400' },
        { name: 'جبنه', sizes: { small: '50,000 ل.ل', large: '100,000 ل.ل' }, image: 'https://placehold.co/400' },
        { name: 'جبنه سجق', price: '150,000 ل.ل', image: 'https://placehold.co/400' },
        { name: 'جبنه مرتديلا',  price: '150,000 ل.ل', image: 'https://placehold.co/400' },
        { name: 'نص جبنه نص زعتر ', sizes: {small: '50,000 ل.ل', large: '100,000 ل.ل'}, image: 'https://placehold.co/400' },
        { name: 'لحمه', sizes: { small: '80,000 ل.ل', large: '100,000 ل.ل'}, image: 'https://placehold.co/400' },
        { name: 'لحمه مع جبنه',  price: '100,000 ل.ل', image: 'https://placehold.co/400' },
        { name: 'اريشه',  price: '70,000 ل.ل', image: 'https://placehold.co/400' },
        { name: 'اريشه مع جبنه قشقوان', price: '100,000 ل.ل', image: 'https://placehold.co/400' },
        { name: 'تركيه',  price: '50,000 ل.ل' , image: 'https://placehold.co/400' },
        { name: 'تركيه مع جبنه',  price: '100,000 ل.ل' , image: 'https://placehold.co/400' },
        { name: 'لبنه و مرتديلا',  price: '150,000 ل.ل', image: 'https://placehold.co/400' },
        { name: 'طاووق', sizes: { small: '150,000 ل.ل', large: '200,000 ل.ل'}, image: 'https://placehold.co/400' },
        { name: 'فاهيتا',  price: '200,000 ل.ل', image: 'https://placehold.co/400' },


      ]
    },



    soiree: {
      title: 'سواريه',
      items: [
        { name: 'كروسان', price: 'جبنة: 40,000 ل.ل | شوكولا: 40,000 ل.ل', image: 'https://placehold.co/400' },

        { name: 'لحمه بعجين بزبده', price: '50,000 ل.ل', image: 'https://placehold.co/400' },
        { name: 'لحمه بعجين ', price: '70,000 ل.ل', image: 'https://placehold.co/400' },

        { name: 'سواريه', price: 'جبنة | بيتزا | فاهيتا: 30,000 ل.ل', image: 'https://placehold.co/400' },
        { name: 'دزدينه سواريه  مشكل', price: '350,000 ل.ل' , image: 'https://placehold.co/400'},
        { name: 'دزدينه لحمه بعجين ', price: '800,000 ل.ل', image: 'https://placehold.co/400' },
        
      ]
    },
    kaak: {
      title: 'كعك',
      items: [
        { name: 'كعكه', price: '100,000 ل.ل' , image: 'https://placehold.co/400'},
        { name: 'كعكه إكستر مع خضره', price: '150,000 ل.ل' , image: 'https://placehold.co/400'},
        

      ]
    },
    pizza: {
      title: 'بيتزا',
      items: [
        { name: 'ييتزا صغيرة', price: '100,000 ل.ل', image: 'https://placehold.co/400'},
        { name: 'ييتزا وسط', price: '150,000 ل.ل' , image: 'https://placehold.co/400'},
        { name: 'بيتزا كبيرة', price: '300,000 ل.ل, 400,000 ل.ل, 500,000 ل.ل', image: 'https://placehold.co/400' }


      ]
    },
    juices: {
      title: 'عصائر',
      items: [
    { name: 'مستر جوسي', price: '20,000 ل.ل', image: 'https://placehold.co/400' },
    { name: 'عيران', price: '50,000 ل.ل', image: 'https://placehold.co/400' },

    { name: 'ماء', price: 'صغيرة: 20,000 ل.ل | كبيرة: ', image: 'https://placehold.co/400' }
,

    { name: 'Pepsi', price: 'قنينة: 60,000 ل.ل | تنك: 70,000 ل.ل', image: 'https://placehold.co/400' },

    { name: 'Mirinda', price: 'قنينة: 60,000 ل.ل | تنك: 70,000 ل.ل', image: 'https://placehold.co/400' },

    { name: '7up', price: 'قنينة: 60,000 ل.ل | تنك: 70,000 ل.ل', image: 'https://placehold.co/400' },

    
   
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