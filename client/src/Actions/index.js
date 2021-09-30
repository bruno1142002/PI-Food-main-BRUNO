import axios from axios

export const getRecipes = ()=> async (dispatch) => {
    try{
        const res = await axios.get('http://localhost:3001/recipes');
        dispatch({type: 'GET_RECIPES', payload:res.data});
        }catch (err){
            console.log(err);
    }
};

export const getRecipesDetail = (id) => async (dispatch) => {
    try{
        const res = await axios.get('http://localhost:3001/recipes/${id}');
        console.log(res)
        dispatch({type: 'GET_RECIPES_DETAIL', payload:res.data});
        }catch (err){
            console.log(err);
            dispatch({type: 'GET_RECIPES_DETAIL', payload: 'No hay data'});
    }
};

export const getRecipesTitle = (name) => async (dispatch) => {
    try{
        const res = await axios.get('http://localhost:3001/recipes?name=${name}');
        dispatch({type: 'GET_RECIPES_TITLE', payload:res.data});
        }catch (err){
            console.log(err);
            dispatch({type: 'GET_RECIPES_TITLE', payload: []});
    }
};

export const getRecipesDiets = (datos) => async (dispatch) => {
    try{
        const res = await axios.post('http://localhost:3001/recipes/',datos);
        dispatch({type: 'CREATE_RECIPE', payload:res.data});
        }catch (err){
            console.log(err);
            dispatch({type: 'CREATE_RECIPE', payload: 'No hay data'});
    }
};

export const cleanDetail = () => (dispatch) => {
    dispatch({type: 'CLEAN_DETAIL', payload: {}});
};

export const cleanRecipes = () => (dispatch) => {
    dispatch({type: 'CLEAN_RECIPES', payload: []});
};
export const dietsFilter = () => (dispatch) => {
    dispatch({type: 'DIETS_FILTER', payload: array});
};

export const orderAz = (array) => async (dispatch) => {
    dispatch({
        type: "ORDER_AZ", 
        payload: array.sort((a,b)=>{
            if (a.title> b.title){
                return 1
            }
            if (a.title<b.title){
                return -1;
        }
        return 0;
}),
    });
};

export const orderZa = (array) => async (dispatch) => {
    dispatch({
        type: "ORDER_ZA", 
        payload: array.sort((a,b)=>{
            if (a.title> b.title){
                return -1
            }
            if (a.title<b.title){
                return 1;
        }
        return 0;
}),
    });
};

export const orderBetter = (array) => async (dispatch) => {
    dispatch({
        type: "ORDER_BETTER",
        payload: array.sort((a, b) => {
            if (a.spoonacularScore > b.spoonacularScore) {
                return -1;
            }
            if (a.spoonacularScore < b.spoonacularScore) {
                return 1;
            }
            return 0;
        }),
    });
}


export const orderWorst = (array) => async (dispatch) => {
    dispatch({
        type: "ORDER_WORST",
        payload: array.sort((a, b) => {
            if (a.spoonacularScore > b.spoonacularScore) {
                return 1;
            }
            if (a.spoonacularScore < b.spoonacularScore) {
                return -1;
            }
            return 0;
        }),
    });
}

