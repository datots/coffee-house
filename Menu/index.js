function showTab(tabId) {
  // Hide all containers
  var containers = document.querySelectorAll(".container");
  containers.forEach(function (container) {
    container.classList.remove("active");
  });
  // Show the selected container
  var selectedContainer = document.getElementById(tabId + "-container");
  if (selectedContainer) {
    selectedContainer.classList.add("active");
  }
}

// DATA
const serverData = [
  {
    // image: "https://i.ibb.co/5TDLVwB/irish-coffee.png",
    
    name: "Irish coffee",
    url: "./assets/irish-coffee.png",
    description:
      "Fragrant black coffee with Jameson Irish whiskey and whipped milk",
    price: "7.00",
    category: "coffee",
    sizes: {
      s: {
        size: "200 ml",
        "add-price": "0.00",
      },
      m: {
        size: "300 ml",
        "add-price": "0.50",
      },
      l: {
        size: "400 ml",
        "add-price": "1.00",
      },
    },
    additives: [
      {
        name: "Sugar",
        "add-price": "0.50",
      },
      {
        name: "Cinnamon",
        "add-price": "0.50",
      },
      {
        name: "Syrup",
        "add-price": "0.50",
      },
    ],
  },

  {
    image: "https://i.ibb.co/RBR242c/kahlua-coffee.png",
    name: "Kahlua coffee",
    description:
      "Classic coffee with milk and Kahlua liqueur under a cap of frothed milk",
    price: "7.00",
    category: "coffee",
    sizes: {
      s: {
        size: "200 ml",
        "add-price": "0.00",
      },
      m: {
        size: "300 ml",
        "add-price": "0.50",
      },
      l: {
        size: "400 ml",
        "add-price": "1.00",
      },
    },
    additives: [
      {
        name: "Sugar",
        "add-price": "0.50",
      },
      {
        name: "Cinnamon",
        "add-price": "0.50",
      },
      {
        name: "Syrup",
        "add-price": "0.50",
      },
    ],
  },

  {
    image: "https://i.ibb.co/KyqGy3V/honey-raf.png",
    name: "Honey raf",
    description: "Espresso with frothed milk, cream and aromatic honey",
    price: "5.50",
    category: "coffee",
    sizes: {
      s: {
        size: "200 ml",
        "add-price": "0.00",
      },
      m: {
        size: "300 ml",
        "add-price": "0.50",
      },
      l: {
        size: "400 ml",
        "add-price": "1.00",
      },
    },
    additives: [
      {
        name: "Sugar",
        "add-price": "0.50",
      },
      {
        name: "Cinnamon",
        "add-price": "0.50",
      },
      {
        name: "Syrup",
        "add-price": "0.50",
      },
    ],
  },

  {
    image: "https://i.ibb.co/r7cHt52/ice-cappuccino.png",
    name: "Ice cappuccino",
    description: "Cappuccino with soft thick foam in summer version with ice",
    price: "5.00",
    category: "coffee",
    sizes: {
      s: {
        size: "200 ml",
        "add-price": "0.00",
      },
      m: {
        size: "300 ml",
        "add-price": "0.50",
      },
      l: {
        size: "400 ml",
        "add-price": "1.00",
      },
    },
    additives: [
      {
        name: "Sugar",
        "add-price": "0.50",
      },
      {
        name: "Cinnamon",
        "add-price": "0.50",
      },
      {
        name: "Syrup",
        "add-price": "0.50",
      },
    ],
  },

  {
    image: "https://i.ibb.co/vmjGyTL/espresso.png",
    name: "Espresso",
    description: "Classic black coffee",
    price: "4.50",
    category: "coffee",
    sizes: {
      s: {
        size: "200 ml",
        "add-price": "0.00",
      },
      m: {
        size: "300 ml",
        "add-price": "0.50",
      },
      l: {
        size: "400 ml",
        "add-price": "1.00",
      },
    },
    additives: [
      {
        name: "Sugar",
        "add-price": "0.50",
      },
      {
        name: "Cinnamon",
        "add-price": "0.50",
      },
      {
        name: "Syrup",
        "add-price": "0.50",
      },
    ],
  },

  {
    image: "https://i.ibb.co/qYxT27S/latte.png",
    name: "Latte",
    description:
      "Espresso coffee with the addition of steamed milk and dense milk foam",
    price: "5.50",
    category: "coffee",
    sizes: {
      s: {
        size: "200 ml",
        "add-price": "0.00",
      },
      m: {
        size: "300 ml",
        "add-price": "0.50",
      },
      l: {
        size: "400 ml",
        "add-price": "1.00",
      },
    },
    additives: [
      {
        name: "Sugar",
        "add-price": "0.50",
      },
      {
        name: "Cinnamon",
        "add-price": "0.50",
      },
      {
        name: "Syrup",
        "add-price": "0.50",
      },
    ],
  },

  {
    image: "https://i.ibb.co/4WmfqNz/latte-macchiato.png",
    name: "Latte macchiato",
    description: "Espresso with frothed milk and chocolate",
    price: "5.50",
    category: "coffee",
    sizes: {
      s: {
        size: "200 ml",
        "add-price": "0.00",
      },
      m: {
        size: "300 ml",
        "add-price": "0.50",
      },
      l: {
        size: "400 ml",
        "add-price": "1.00",
      },
    },
    additives: [
      {
        name: "Sugar",
        "add-price": "0.50",
      },
      {
        name: "Cinnamon",
        "add-price": "0.50",
      },
      {
        name: "Syrup",
        "add-price": "0.50",
      },
    ],
  },

  {
    image: "https://i.ibb.co/s64qh00/coffeewithcognac.png",
    name: "Coffee with cognac",
    description: "Fragrant black coffee with cognac and whipped cream",
    price: "6.50",
    category: "coffee",
    sizes: {
      s: {
        size: "200 ml",
        "add-price": "0.00",
      },
      m: {
        size: "300 ml",
        "add-price": "0.50",
      },
      l: {
        size: "400 ml",
        "add-price": "1.00",
      },
    },
    additives: [
      {
        name: "Sugar",
        "add-price": "0.50",
      },
      {
        name: "Cinnamon",
        "add-price": "0.50",
      },
      {
        name: "Syrup",
        "add-price": "0.50",
      },
    ],
  },

  {
    image: "https://i.ibb.co/s5Ycjqn/tea-1-moroccan.png",
    name: "Moroccan",
    description:
      "Fragrant black tea with the addition of tangerine, cinnamon, honey, lemon and mint",
    price: "4.50",
    category: "tea",
    sizes: {
      s: {
        size: "200 ml",
        "add-price": "0.00",
      },
      m: {
        size: "300 ml",
        "add-price": "0.50",
      },
      l: {
        size: "400 ml",
        "add-price": "1.00",
      },
    },
    additives: [
      {
        name: "Sugar",
        "add-price": "0.50",
      },
      {
        name: "Lemon",
        "add-price": "0.50",
      },
      {
        name: "Syrup",
        "add-price": "0.50",
      },
    ],
  },

  {
    image: "https://i.ibb.co/Lt2t6tH/tea-2-ginger.png",
    name: "Ginger",
    description: "Original black tea with fresh ginger, lemon and honey",
    price: "5.00",
    category: "tea",
    sizes: {
      s: {
        size: "200 ml",
        "add-price": "0.00",
      },
      m: {
        size: "300 ml",
        "add-price": "0.50",
      },
      l: {
        size: "400 ml",
        "add-price": "1.00",
      },
    },
    additives: [
      {
        name: "Sugar",
        "add-price": "0.50",
      },
      {
        name: "Lemon",
        "add-price": "0.50",
      },
      {
        name: "Syrup",
        "add-price": "0.50",
      },
    ],
  },

  {
    image: "https://i.ibb.co/3hJ8BKg/tea-3-cranberry.png",
    name: "Cranberry",
    description: "Invigorating black tea with cranberry and honey",
    price: "5.00",
    category: "tea",
    sizes: {
      s: {
        size: "200 ml",
        "add-price": "0.00",
      },
      m: {
        size: "300 ml",
        "add-price": "0.50",
      },
      l: {
        size: "400 ml",
        "add-price": "1.00",
      },
    },
    additives: [
      {
        name: "Sugar",
        "add-price": "0.50",
      },
      {
        name: "Lemon",
        "add-price": "0.50",
      },
      {
        name: "Syrup",
        "add-price": "0.50",
      },
    ],
  },

  {
    image: "https://i.ibb.co/WVZrX6R/tea-4-sea-buckthorn.png",
    name: "Sea buckthorn",
    description:
      "Toning sweet black tea with sea buckthorn, fresh thyme and cinnamon",
    price: "5.50",
    category: "tea",
    sizes: {
      s: {
        size: "200 ml",
        "add-price": "0.00",
      },
      m: {
        size: "300 ml",
        "add-price": "0.50",
      },
      l: {
        size: "400 ml",
        "add-price": "1.00",
      },
    },
    additives: [
      {
        name: "Sugar",
        "add-price": "0.50",
      },
      {
        name: "Lemon",
        "add-price": "0.50",
      },
      {
        name: "Syrup",
        "add-price": "0.50",
      },
    ],
  },

  {
    image: "https://i.ibb.co/KLJgsWz/dessert-1-marble-cheesecake.png",
    name: "Marble cheesecake",
    description:
      "Philadelphia cheese with lemon zest on a light sponge cake and red currant jam",
    price: "3.50",
    category: "dessert",
    sizes: {
      s: {
        size: "50 g",
        "add-price": "0.00",
      },
      m: {
        size: "100 g",
        "add-price": "0.50",
      },
      l: {
        size: "200 g",
        "add-price": "1.00",
      },
    },
    additives: [
      {
        name: "Berries",
        "add-price": "0.50",
      },
      {
        name: "Nuts",
        "add-price": "0.50",
      },
      {
        name: "Jam",
        "add-price": "0.50",
      },
    ],
  },

  {
    image: "https://i.ibb.co/s540wR5/dessert-2-red-velvet.png",
    name: "Red velvet",
    description: "Layer cake with cream cheese frosting",
    price: "4.00",
    category: "dessert",
    sizes: {
      s: {
        size: "50 g",
        "add-price": "0.00",
      },
      m: {
        size: "100 g",
        "add-price": "0.50",
      },
      l: {
        size: "200 g",
        "add-price": "1.00",
      },
    },
    additives: [
      {
        name: "Berries",
        "add-price": "0.50",
      },
      {
        name: "Nuts",
        "add-price": "0.50",
      },
      {
        name: "Jam",
        "add-price": "0.50",
      },
    ],
  },

  {
    image: "https://i.ibb.co/3sgt74m/dessert-3-cheesecakes.png",
    name: "Cheesecakes",
    description:
      "Soft cottage cheese pancakes with sour cream and fresh berries and sprinkled with powdered sugar",
    price: "4.50",
    category: "dessert",
    sizes: {
      s: {
        size: "50 g",
        "add-price": "0.00",
      },
      m: {
        size: "100 g",
        "add-price": "0.50",
      },
      l: {
        size: "200 g",
        "add-price": "1.00",
      },
    },
    additives: [
      {
        name: "Berries",
        "add-price": "0.50",
      },
      {
        name: "Nuts",
        "add-price": "0.50",
      },
      {
        name: "Jam",
        "add-price": "0.50",
      },
    ],
  },

  {
    image: "https://i.ibb.co/1bGPCJ4/dessert-4-creme-brulee.png",
    name: "Creme brulee",
    description:
      "Delicate creamy dessert in a caramel basket with wild berries",
    price: "4.00",
    category: "dessert",
    sizes: {
      s: {
        size: "50 g",
        "add-price": "0.00",
      },
      m: {
        size: "100 g",
        "add-price": "0.50",
      },
      l: {
        size: "200 g",
        "add-price": "1.00",
      },
    },
    additives: [
      {
        name: "Berries",
        "add-price": "0.50",
      },
      {
        name: "Nuts",
        "add-price": "0.50",
      },
      {
        name: "Jam",
        "add-price": "0.50",
      },
    ],
  },

  {
    image: "https://i.ibb.co/rv80c4z/dessert-5-pancakes.png",
    name: "Pancakes",
    description: "Tender pancakes with strawberry jam and fresh strawberries",
    price: "4.50",
    category: "dessert",
    sizes: {
      s: {
        size: "50 g",
        "add-price": "0.00",
      },
      m: {
        size: "100 g",
        "add-price": "0.50",
      },
      l: {
        size: "200 g",
        "add-price": "1.00",
      },
    },
    additives: [
      {
        name: "Berries",
        "add-price": "0.50",
      },
      {
        name: "Nuts",
        "add-price": "0.50",
      },
      {
        name: "Jam",
        "add-price": "0.50",
      },
    ],
  },

  {
    image: "https://i.ibb.co/JktFQxC/dessert-6-honey-cake.png",
    name: "Honey cake",
    description: "Classic honey cake with delicate custard",
    price: "4.50",
    category: "dessert",
    sizes: {
      s: {
        size: "50 g",
        "add-price": "0.00",
      },
      m: {
        size: "100 g",
        "add-price": "0.50",
      },
      l: {
        size: "200 g",
        "add-price": "1.00",
      },
    },
    additives: [
      {
        name: "Berries",
        "add-price": "0.50",
      },
      {
        name: "Nuts",
        "add-price": "0.50",
      },
      {
        name: "Jam",
        "add-price": "0.50",
      },
    ],
  },

  {
    image: "https://i.ibb.co/CVfTfBh/dessert-7-chocolate-cake.png",
    name: "Chocolate cake",
    description: "Cake with hot chocolate filling and nuts with dried apricots",
    price: "5.50",
    category: "dessert",
    sizes: {
      s: {
        size: "50 g",
        "add-price": "0.00",
      },
      m: {
        size: "100 g",
        "add-price": "0.50",
      },
      l: {
        size: "200 g",
        "add-price": "1.00",
      },
    },
    additives: [
      {
        name: "Berries",
        "add-price": "0.50",
      },
      {
        name: "Nuts",
        "add-price": "0.50",
      },
      {
        name: "Jam",
        "add-price": "0.50",
      },
    ],
  },

  {
    image: "https://i.ibb.co/P58qjcw/dessert-8-black-forest.png",
    name: "Black forest",
    description:
      "A combination of thin sponge cake with cherry jam and light chocolate mousse",
    price: "6.50",
    category: "dessert",
    sizes: {
      s: {
        size: "50 g",
        "add-price": "0.00",
      },
      m: {
        size: "100 g",
        "add-price": "0.50",
      },
      l: {
        size: "200 g",
        "add-price": "1.00",
      },
    },
    additives: [
      {
        name: "Berries",
        "add-price": "0.50",
      },
      {
        name: "Nuts",
        "add-price": "0.50",
      },
      {
        name: "Jam",
        "add-price": "0.50",
      },
    ],
  },
];

// Function to open the modal

// function openModal(event) {
//   var modal = document.getElementById('myModal');
//   modal.style.display = 'block';

//   // Fetch data from the server and update modal content
//   console.log(event);
//   document.getElementById('modalTitle').innerHTML = serverData[0].name;
//   document.getElementById('modalDescription').innerHTML = serverData[0].description;
//   document.getElementById('modalPrice').innerHTML = 'Price: $' + serverData[0].price;
//   document.getElementById('size').innerHTML = serverData[0].sizes;
//   document.getElementById('additive').innerHTML = serverData[0].additives;
// }

// Function to close the modal
function closeModal() {
  var modal = document.getElementById("myModal");
  modal.style.display = "none";
}

// Close the modal if the user clicks outside of it
window.onclick = function (event) {
  var modal = document.getElementById("myModal");
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

const cards = document.querySelectorAll(".preview-card");

const card = document.getElementById("coffee-container");
console.log(cards, card);
cards.forEach((item) => {
  item.addEventListener("click", (e) => {
    console.log(e.currentTarget.id);
    const id = e.currentTarget.id;
    const modal = document.getElementById("myModal");
    modal.style.display = "block";

    // Fetch data from the server and update modal content
    document.getElementById("modalTitle").innerHTML = serverData[id].name;
    document.getElementById("modalDescription").innerHTML =
      serverData[id].description;
    document.getElementById("modalPrice").innerHTML =
      "Price: $" + serverData[id].price;
    document.getElementById("size-1").innerHTML = serverData[id].sizes.s.size;
    document.getElementById("size-2").innerHTML = serverData[id].sizes.m.size;
    document.getElementById("size-3").innerHTML = serverData[id].sizes.l.size;
    document.getElementById("additive-1").innerHTML =
      serverData[id].additives[0].name;
    document.getElementById("additive-2").innerHTML =
      serverData[id].additives[1].name;
    document.getElementById("additive-3").innerHTML =
      serverData[id].additives[2].name;

    const modalImg = document.getElementById(".modal-img");
    modalImg.src = serverData[id].url;
  });
});
