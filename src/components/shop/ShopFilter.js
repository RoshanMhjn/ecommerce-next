"use client";

import { filterOptions } from "@/config";
import { Fragment, useState, useEffect } from "react";
import { Label } from "../ui/label";
import { Checkbox } from "../ui/checkbox";
import { SelectSeparator } from "../ui/select";
import * as Slider from "@radix-ui/react-slider";
import { Input } from "../ui/input";

const ShopFilter = ({ filters, handleFilter, priceRange, setPriceRange }) => {
  const [localPrice, setLocalPrice] = useState(priceRange);

  useEffect(() => {
    setPriceRange(localPrice);
  }, [localPrice]);

  const handleInputChange = (index, value) => {
    const newPrice = [...localPrice];
    newPrice[index] = Number(value);
    setLocalPrice(newPrice);
  };

  return (
    <div className="bg-background rounded-lg shadow-sm">
      <div className="p-4 border-b">
        <h2 className="text-lg font-extrabold">Filters</h2>
      </div>

      <div className="p-4 space-y-4">
        {Object.keys(filterOptions).map((keyItem) => {
          if (keyItem === "price") {
            return (
              <Fragment key="price">
                <div>
                  <h3 className="text-base font-bold">Price</h3>
                  <div className="relative mt-4">
                    <Slider.Root
                      className="relative flex items-center select-none touch-none w-full h-3"
                      min={0}
                      max={1000}
                      step={1}
                      value={localPrice}
                      onValueChange={setLocalPrice}
                    >
                      <Slider.Track className="bg-muted-foreground relative grow rounded-full h-1">
                        <Slider.Range className="absolute bg-primary rounded-full h-full" />
                      </Slider.Track>

                      <Slider.Thumb className="block w-4 h-4 bg-primary border border-gray-300 rounded-full hover:bg-primary/80 focus:outline-none focus:ring-2 focus:ring-primary" />
                      <Slider.Thumb className="block w-4 h-4 bg-primary border border-gray-300 rounded-full hover:bg-primary/80 focus:outline-none focus:ring-2 focus:ring-primary" />
                    </Slider.Root>

                    {/* Price Labels and Inputs */}
                    <div className="flex justify-between items-center mt-4 gap-6 ">
                      <div className="flex flex-col w-1/2">
                        <label className="text-sm font-medium">Min Price</label>
                        <Input
                          type="number"
                          value={localPrice[0]}
                          onChange={(e) => handleInputChange(0, e.target.value)}
                          min={0}
                          max={localPrice[1]}
                        />
                      </div>

                      <div className="flex flex-col w-1/2">
                        <label className="text-sm font-medium">Max Price</label>
                        <Input
                          type="number"
                          value={localPrice[1]}
                          onChange={(e) => handleInputChange(1, e.target.value)}
                          min={localPrice[0]}
                          max={1000}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <SelectSeparator />
              </Fragment>
            );
          }

          return (
            <Fragment key={keyItem}>
              <div>
                <h3 className="text-base font-bold">{keyItem}</h3>
                <div className="grid gap-2 mt-2">
                  {filterOptions[keyItem].map((option, index) => (
                    <Label
                      key={option.value || `${keyItem}-${index}`}
                      className="flex items-center gap-2 font-medium"
                    >
                      <Checkbox
                        checked={
                          filters && filters[keyItem]?.includes(option.id)
                        }
                        onCheckedChange={() => handleFilter(keyItem, option.id)}
                      />
                      {option.label}
                    </Label>
                  ))}
                </div>
              </div>
              <SelectSeparator />
            </Fragment>
          );
        })}
      </div>
    </div>
  );
};

export default ShopFilter;
