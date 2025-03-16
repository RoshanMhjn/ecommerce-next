export const registerFormControls = [
  {
    name: "email",
    label: "Email",
    placeholder: "Enter your email",
    componentType: "input",
    type: "email",
  },
  {
    name: "userName",
    label: "User Name",
    placeholder: "Enter your username",
    componentType: "input",
    type: "text",
  },
  {
    name: "password",
    label: "Password",
    placeholder: "Enter your password",
    componentType: "input",
    type: "password",
  },
];
export const loginFormControls = [
  {
    name: "email",
    label: "Email",
    placeholder: "Enter your email",
    componentType: "input",
    type: "email",
  },
  {
    name: "password",
    label: "Password",
    placeholder: "Enter your password",
    componentType: "input",
    type: "password",
  },
];

export const AccountFormControls = [
  {
    label: "Username",
    name: "username",
    componentType: "input",
    type: "text",
    placeholder: "Enter Username",
  },
  {
    label: "Email",
    name: "email",
    componentType: "input",
    type: "email",
    placeholder: "Enter Email",
  },
  {
    label: "New Password",
    name: "password",
    componentType: "password",
    type: "password",
    placeholder: "Enter New Password",
  },
  {
    label: "Confirm Password",
    name: "confirmpassword",
    componentType: "password",
    type: "password",
    placeholder: "Confirm New Password",
  },
];

export const faqs = [
  {
    question: "What payment methods do you accept?",
    answer: "We accept Visa, MasterCard, PayPal, and bank transfers.",
  },
  {
    question: "How long does shipping take?",
    answer:
      "Shipping times vary by location but usually take 3-7 business days.",
  },
  {
    question: "Can I return a product?",
    answer:
      "Yes, we have a 30-day return policy. Please check our return policy for details.",
  },
  {
    question: "Do you offer international shipping?",
    answer:
      "Yes, we ship worldwide. Shipping fees may apply based on the destination.",
  },
];

export const addressFormControls = [
  {
    label: "Address",
    name: "address",
    componentType: "input",
    type: "text",
    placeholder: "Enter your address",
  },
  {
    label: "City",
    name: "city",
    componentType: "input",
    type: "text",
    placeholder: "Enter your city",
  },
  {
    label: "Pincode",
    name: "pincode",
    componentType: "input",
    type: "text",
    placeholder: "Enter your pincode",
  },
  {
    label: "Phone",
    name: "phone",
    componentType: "input",
    type: "text",
    placeholder: "Enter your phone number",
  },
  {
    label: "Notes (Put N/A if none)",
    name: "notes",
    componentType: "textarea",
    placeholder: "Enter any additional notes",
  },
];

export const filterOptions = {
  price: [
    { id: "0-50", label: "$0 - $50" },
    { id: "50.01-100", label: "$50 - $100" },
    { id: "100.01-200", label: "$100 - $200" },
    { id: "200.01-500", label: "$200 - $500" },
    { id: "500.01-10000", label: "$500+" },
  ],

  Category: [
    { id: "men's clothing", label: "Category 1" },
    { id: "jewelery", label: "Category 2" },
    { id: "category3", label: "Category 3" },
    { id: "category4", label: "Category 4" },
    { id: "category5", label: "Category 5" },
  ],
  Material: [
    { id: "material1", label: "Material 1" },
    { id: "material2", label: "Material 2" },
    { id: "material3", label: "Material 3" },
  ],
  Tags: [
    { id: "tag1", label: "Tag 1" },
    { id: "tag2", label: "Tag 2" },
    { id: "tag3", label: "Tag 3" },
  ],
};

export const sortOptions = [
  { id: "price-lowtohigh", label: "Price: Low to High" },
  { id: "price-hightolow", label: "Price: High to Low" },
  { id: "title-atoz", label: "Title: A to Z" },
  { id: "title-ztoa", label: "Title: Z to A" },
];

export const blogs = [
  {
    title: "Not Your Regular Home Decoration?",
    description:
      "Assumenda non repellendus distinctio nihil dicta sapiente, quibusdam maiores.",
    author: " John Leo",
    date: "21 Jun, 2022",
    image: "https://cdn.easyfrontend.com/pictures/blog/blog_1.jpg",
  },
  {
    title: "Long lasting fall scent for women sale offer",
    description: "It’s no secret that the digital industry is booming. ",
    author: " Abraham Frin",
    date: "21 Jun, 2022",
    image: "https://cdn.easyfrontend.com/pictures/blog/blog_2.jpg",
  },
  {
    title: "How I’m Styling Everyday Black Outfits",
    description:
      "Viverra tellus in hac habitasse platea dictumst. Sollicitudin tempor id eu nisl.",
    author: " Finn Alen",
    date: "21 Jun, 2022",
    image: "https://cdn.easyfrontend.com/pictures/blog/blog_3.jpg",
  },
  {
    title: "Fashion Essentials All Men Should Know",
    description:
      "Sed ut in perspiciatis unde omnis iste natus error sit tatem doloremque laudantium.",
    author: " Warner Mac",
    date: "21 Jun, 2022",
    image: "https://cdn.easyfrontend.com/pictures/blog/blog_4.jpg",
  },
  {
    title: "Dolor sit amet, consectetur adiplscing eliyt sed",
    description:
      "More off this less hello salamander lied porpoise much over tightly circa horse taped.",
    author: " Maxy Paulo",
    date: "21 Jun, 2022",
    image: "https://cdn.easyfrontend.com/pictures/blog/blog_13_3.jpg",
  },
  {
    title: "Not Your Regular Home Decoration?",
    description:
      "Urna molestie at eleme ntum eu facilisis sed odio Male suada fames .",
    author: " Sarah Taylor",
    date: "21 Jun, 2022",
    image: "https://cdn.easyfrontend.com/pictures/blog/blog_13_1.jpg",
  },
];

export const productTabs = [];

export const deliveryOptions = {
  freeShippingThreshold: 35,
  returnPolicy: {
    caption: "You have 60 days to return the product(s)",
    options: [
      {
        type: "Standard Shipping",
        duration: "5-7 Business Days",
        cost: "Free (on orders over $35)",
      },
      {
        type: "Express Shipping",
        duration: "2-3 Business Days",
        cost: "$5.99",
      },
      {
        type: "Next-Day Delivery",
        duration: "1 Business Day",
        cost: "$15.99",
      },
    ],
  },
};
