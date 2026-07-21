const menuItems = [
  {
    category: "Appetizers",
    items: [
      {
        name: "Bruschetta",
        description: "Grilled bread topped with fresh tomatoes, garlic, basil, and olive oil.",
        price: "$12",
      },
      {
        name: "Stuffed Mushrooms",
        description: "Mushroom caps filled with a savory mixture of breadcrumbs, cheese, and herbs.",
        price: "$14",
      },
    ],
  },
  {
    category: "Main Courses",
    items: [
      {
        name: "Grilled Salmon",
        description: "Salmon fillet seasoned and grilled to perfection, served with asparagus.",
        price: "$28",
      },
      {
        name: "Filet Mignon",
        description: "A tender and juicy cut of beef, cooked to your liking, with a side of mashed potatoes.",
        price: "$45",
      },
      {
        name: "Mushroom Risotto",
        description: "Creamy Arborio rice cooked with a variety of wild mushrooms and Parmesan cheese.",
        price: "$24",
      },
    ],
  },
  {
    category: "Desserts",
    items: [
      {
        name: "Tiramisu",
        description: "A classic Italian dessert made with layers of coffee-soaked ladyfingers and mascarpone cheese.",
        price: "$10",
      },
      {
        name: "Chocolate Lava Cake",
        description: "A warm chocolate cake with a gooey, molten center, served with vanilla ice cream.",
        price: "$12",
      },
    ],
  },
];

export default function MenuPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-extrabold tracking-tight text-center text-primary sm:text-5xl md:text-6xl">
        Our Menu
      </h1>
      <div className="mt-10 space-y-12">
        {menuItems.map((section) => (
          <div key={section.category}>
            <h2 className="text-3xl font-bold text-center mb-6">{section.category}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {section.items.map((item) => (
                <div key={item.name} className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-primary">{item.name}</h3>
                    <p className="mt-2 text-gray-600 dark:text-gray-300">{item.description}</p>
                    <p className="mt-4 text-lg font-semibold text-primary">{item.price}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
