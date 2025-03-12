"use client";

import { AccountFormControls } from "@/config";
import CommonForm from "@/components/common/CommonForm";
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

const initialProfileEditFormData = {
  username: "",
  email: "",
  password: "",
  confirmpassword: "",
};

const ProfileEdit = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const [formData, setFormData] = useState(initialProfileEditFormData);
  return (
    <Card>
      <CardHeader>
        <CardTitle>Edit Profile</CardTitle>
      </CardHeader>

      <CardContent className="space-y-3">
        <CommonForm
          formControls={AccountFormControls}
          formData={formData}
          setFormData={setFormData}
          buttonText="Update Profile"
          onSubmit={handleSubmit}
        />
      </CardContent>
    </Card>
  );
};

export default ProfileEdit;
