import React from "react";
import {ComponentPreview, Previews} from "@react-buddy/ide-toolbox";
import {PaletteTree} from "./palette";
import Books from "../pages/books/Books.tsx";
import PageLayout from "../pages/PageLayout.tsx";

const ComponentPreviews = () => {
    return (
        <Previews palette={<PaletteTree/>}>
            <ComponentPreview path="/Books">
                <Books/>
            </ComponentPreview>
            <ComponentPreview path="/PageLayout">
                <PageLayout/>
            </ComponentPreview>
        </Previews>
    );
};

export default ComponentPreviews;