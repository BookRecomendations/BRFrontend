import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Books from "./pages/books/Books.tsx";
import { DevSupport } from "@react-buddy/ide-toolbox";
import { ComponentPreviews, useInitial } from "./dev";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import PageLayout from "./pages/PageLayout.tsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <PageLayout />,
        children: [
            {
                path: "/",
                element: <Books />,
            },
        ],
    },
]);
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <QueryClientProvider client={queryClient}>
            <DevSupport
                ComponentPreviews={ComponentPreviews}
                useInitialHook={useInitial}
            >
                <RouterProvider router={router} />
            </DevSupport>
            <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
    </React.StrictMode>
);
