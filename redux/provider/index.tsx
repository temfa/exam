"use client";

import { PersistGate } from "redux-persist/integration/react";
import store from "../store/store";
import { Provider } from "react-redux";
import { persistStore } from "redux-persist";
import Load from "@/components/load";

export function Providers({ children }: { children: React.ReactNode }) {
  const persistor = persistStore(store);
  return (
    <Provider store={store}>
      <PersistGate loading={<Load />} persistor={persistor}>
        {children}
      </PersistGate>
    </Provider>
  );
}
