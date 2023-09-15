import { useAppApolloClient } from "service";
import "./App.css";
import { ApolloProvider } from "@apollo/client";
import { Suspense } from "react";
import RootLayout from "routes/rootLayout";

function App() {
  const client = useAppApolloClient();
  return (
    <ApolloProvider client={client}>
      <Suspense fallback={"Loading"}>
        <RootLayout />
      </Suspense>
    </ApolloProvider>
  );
}

export default App;
