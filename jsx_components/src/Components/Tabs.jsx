import React from 'react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@radix-ui/react-tabs';

const MyTabs = () => {
  return (
    <Tabs defaultValue="tab1">
      <TabsList>
        <TabsTrigger value="tab1">Tab 1</TabsTrigger>
        <TabsTrigger value="tab2">Tab 2</TabsTrigger>
      </TabsList>
      <TabsContent value="tab1">
        <p>Innehåll för Tab 1</p>
      </TabsContent>
      <TabsContent value="tab2">
        <p>Innehåll för Tab 2</p>
      </TabsContent>
    </Tabs>
  );
};

export default MyTabs;
