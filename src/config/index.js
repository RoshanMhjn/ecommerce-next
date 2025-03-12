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
  category: [
    { id: "category1", label: "Category 1" },
    { id: "category2", label: "Category 2" },
    { id: "category3", label: "Category 3" },
    { id: "category4", label: "Category 4" },
    { id: "category5", label: "Category 5" },
  ],
  material: [
    { id: "material1", label: "Material 1" },
    { id: "material2", label: "Material 2" },
    { id: "material3", label: "Material 3" },
  ],
};

export const sortOptions = [
  { id: "price-lowtohigh", label: "Price: Low to High" },
  { id: "price-hightolow", label: "Price: High to Low" },
  { id: "title-atoz", label: "Title: A to Z" },
  { id: "title-ztoa", label: "Title: Z to A" },
];
