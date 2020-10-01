import React from "react";
import { createStackNavigator, CardStyleInterpolators } from "@react-navigation/stack";
import { ProductRoutes } from "@core/interfaces";

import { ProductScreen } from "./product_screen/product_screen";

const Stack = createStackNavigator<ProductRoutes>()

export const ProductStack = (): JSX.Element => {
    return (
        <Stack.Navigator
        screenOptions={{
          headerShown: false,
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}>
            <Stack.Screen component={ProductScreen} name="Product" />
        </Stack.Navigator>
    )
};