"use client";

import { Button } from "../ui/button";
import { Card, CardContent, CardFooter } from "../ui/card";
import { Checkbox } from "../ui/checkbox";

export const AddressCard = () => {
  return (
    <Card className="cursor-pointer border-black">
      <CardContent className="grid gap-4">
        <div className="pt-4">
          <p>
            <span className="font-semibold">Address:</span>
            Address data
          </p>
          <p>
            <span className="font-semibold">City:</span>
            city data
          </p>
          <p>
            <span className="font-semibold">Pincode:</span>
            12345
          </p>
          <p>
            <span className="font-semibold">Phone:</span>
            9761771222
          </p>
          <p>
            <span className="font-semibold">Notes:</span>
            Additional Notes
          </p>
        </div>
        <Checkbox />
      </CardContent>

      <CardFooter className="flex gap-2">
        <Button>Edit</Button>
        <Button>Delete</Button>
      </CardFooter>
    </Card>
  );
};
