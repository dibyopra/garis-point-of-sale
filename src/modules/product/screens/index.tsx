import React from "react";
import { createStackNavigator, CardStyleInterpolators } from "@react-navigation/stack";
import { ProductRoutes } from "@core/interfaces";

import { ProductScreen } from "./product_screen/product_screen";
import { SearchScreen } from "./search_screen/search_screen";

const Stack = createStackNavigator<ProductRoutes>()

export const ProductStack = (): JSX.Element => {
    return (
        <Stack.Navigator
        screenOptions={{
          headerShown: false,
          cardStyleInterpolator: CardStyleInterpolators.forVerticalIOS,
        }}>
            <Stack.Screen component={ProductScreen} name="Product" />
            <Stack.Screen component={SearchScreen} name="Search" />
        </Stack.Navigator>
    )
};