import { ComponentPreview, Previews } from "@react-buddy/ide-toolbox";
import { PaletteTree } from "./palette";
import Books from "../pages/books/Books.tsx";

const ComponentPreviews = () => {
    return (
        <Previews palette={<PaletteTree />}>
            <ComponentPreview path="/Books">
                <Books />
            </ComponentPreview>
        </Previews>
    );
};

export default ComponentPreviews;
