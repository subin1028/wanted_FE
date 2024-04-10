import React from "react";
import {useSelector,useDispatch} from "react-redux";
// import { addCat } from "./redux/modules/cat";
import { addDog } from "./redux/slices/dog";
import { addCat, removeCat } from "./redux/modules/cat";

//고양이
/*const Cat = () => {
    const cat_arr = useSelector((state) => state.cat.cat_arr);
    console.log(cat_arr);
    return (
        <div>
            <h1>고양이</h1>
            {cat_arr.map((cat, index) =>  {
                return <div key={index}>{cat}</div>;
            })}
        </div>
    )
}*/
const Cat = () => {
    const cat_arr = useSelector((state) => state.cat.cat_arr);
    return(
        <div>
            <h1>고양이</h1>
            {cat_arr.map((cat, index) => {
                return <div key={index}>{cat}</div>
            })}
        </div>
    )
}

//강아지
const Dog = () => {
    const dog = useSelector((state) => state.dog.dog_arr);
    console.log(dog);
    return (
        <div>
            <h1>강아이</h1>
            {dog.map((dog, index) =>  {
                return <div key={index}>{dog}</div>;
            })}
        </div>
    )
}


//홈
const Home = () => {
    //const cat = useSelector((state) => state.cat.cat_arr);
    const dispatch = useDispatch();

    return (
        <div>
            {/* <button onClick={() => {
                dispatch(addCat("home"));
                cat.map((val, index) => {
                    return <div key={index}>{val}</div>
                })
            }}>고양이 추가할래</button> */}
            <button onClick={() => {
                dispatch(addCat("야옹"));
            }}>고양이 추가요</button>
            <button onClick={() => {
                dispatch(removeCat());
            }}>고양이 데려가요</button>
            <button onClick={() => {
                dispatch(addDog("해피"));
            }}>강아지 추가하기</button>
            <h1>Home</h1>
        </div>
    )
}

export { Cat, Dog, Home,};