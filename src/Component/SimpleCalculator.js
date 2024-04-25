const { useReducer } = require("react")

const InitialState = {
    num1:0,
    num2:0,
    result:'no result yet'
}
function reducer (state, action){
    if(action.type==='SET_NUM_ONE') return {...state, num1:action.number}
    if(action.type==='SET_NUM_TWO') return {...state, num2:action.number}
    if(action.type==='ADD') return {...state, result: state.num1 + state.num2}
    if(action.type==='SUBTRACT') return {...state, result: state.num1 - state.num2}
    if (action.type === 'CLEAR') return InitialState
}

function SimpleCalculator (){
    const[state, dispatch] = useReducer(reducer, InitialState)
    const numbers =[0,1, 2, 3, 4, 5, 6, 7, 8, 9]

    return(
        
        <div className="flex flex-col justify-center items-center my-10"> 
            <div>
                <h2 className="font-bold text-xl text-gray-500"> Set 1</h2>
                {numbers.map(number=>(<button className=" bg-gray-100 p-2 m-2 text-gray-700" key={number} onClick={()=> dispatch({type:'SET_NUM_ONE',number})}>{number}</button>))} 
            </div>
            <div>
                <h2 className="font-bold text-xl text-gray-500"> Set 2</h2>
                {numbers.map(number=>(<button className=" bg-gray-100 p-2 m-2 text-gray-700"  key={number} onClick={()=> dispatch({type:'SET_NUM_TWO',number})}>{number}</button>))} 
            </div>
            <div>
                <h2 className="font-bold text-l text-gray-500">Action</h2>
                <button className=" bg-gray-100 p-2 m-2 text-gray-700"onClick={()=> dispatch({type: 'ADD'})}>+</button>
                <button className=" bg-gray-100 p-2 m-2 text-gray-700"onClick={()=> dispatch({type: 'SUBTRACT'})}>-</button>
                <button className=" bg-gray-100 p-2 m-2 text-gray-700" onClick={()=> dispatch({type: 'CLEAR'})}>clear</button>
            </div>
            <div><h2 className="font-bold text-xl text-gray-500">Result:{state.result}</h2></div>
        </div>
    )

}
export default SimpleCalculator;