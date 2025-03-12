"use client";

import { addressFormControls } from "@/config";
import CommonForm from "../common/CommonForm";
import { AddressCard } from "./AddressCard";
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { toast } from "sonner";

const initialAddressFormData = {
  address: "",
  city: "",
  phone: "",
  pincode: "",
  notes: "",
};
const ShopAddress = () => {
  const handleAddressSubmit = (e) => {
    e.preventDefault();
    toast("Updated Successfully!");
    console.log("click");
  };

  const [formData, setFormData] = useState(initialAddressFormData);

  return (
    <Card>
      <div className="mb-5 p-3 grid grid-cols-1 sm:grid-cols-2 gap-2">
        <AddressCard />
        <AddressCard />
      </div>

      <CardHeader>
        <CardTitle>Edit / Add New Address</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        <CommonForm
          formControls={addressFormControls}
          formData={formData}
          setFormData={setFormData}
          buttonText="Edit / Add"
          onSubmit={handleAddressSubmit}
        />
      </CardContent>
    </Card>
  );
};

export default ShopAddress;
