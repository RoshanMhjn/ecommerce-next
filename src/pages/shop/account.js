"use client";

import { Navbar } from "@/components/shop/Navbar";
import ProfileEdit from "@/components/shop/ProfileEdit";
import ShopAddress from "@/components/shop/ShopAddress";
import ShopOrders from "@/components/shop/ShopOrders";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Account = () => {
  return (
    <div>
      <Navbar className="mb-4" />
      <div className="lg:px-40 px-6 mt-25 lg:mt-30">
        <Tabs defaultValue="orders">
          <TabsList>
            <TabsTrigger value="orders">Orders</TabsTrigger>
            <TabsTrigger value="address">Address</TabsTrigger>
            <TabsTrigger value="profile">Profile</TabsTrigger>
          </TabsList>

          <TabsContent value="orders">
            <ShopOrders />
          </TabsContent>
          <TabsContent value="address">
            <ShopAddress />
          </TabsContent>
          <TabsContent value="profile">
            <ProfileEdit />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Account;
