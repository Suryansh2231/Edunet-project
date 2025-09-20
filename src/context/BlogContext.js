import React , {useContext , createContext} from "react";

 export const BlogContext = createContext({});

export const useBlog = () => {
    return useContext(BlogContext);
}

export const blogProvider = useContext.Provider;