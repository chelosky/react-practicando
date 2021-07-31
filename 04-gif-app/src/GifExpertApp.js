import React, {useState} from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Dragon Ball Z'])

    // const handleAdd = () => {
    //     // setCategories([...categories, 'Hunter x Hunter']);
    //     setCategories( item => [...item, 'Hunter x Hunter']);
    // };
    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={ setCategories }  />
            <hr />
             
            <ol>
                {
                    categories.map((category) => {
                        return <GifGrid
                                    key={ category }
                                    category={category}
                                />;
                    })
                }
            </ol>
        </>
    );
}

export default GifExpertApp;