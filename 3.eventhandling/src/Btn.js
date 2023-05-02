// function Btn(){
//     const clickHandler=
//     ()=> console.log('clicked')

//     return(
//     <button onClick={clickHandler}>
//         click me
//     </button>
// );
    
// }

// export default Btn;

// function Btn(){
//     const clickHandler=
//     ()=> console.log('mouse over')

//     return (
//     <button onMouseOver={clickHandler}>
//         click me
//     </button>
// );
    
// }

// export default Btn;



//ES6 event handling
// function Btn(){
//     const clickHandler=
//     ()=> console.log('clicked')

//     return (
//     <button onClick={() => console.log('second example')}>
//         An inline anonymous ES6 function event handler
//     </button>
// );
    
// }

// export default Btn;


// ES5 event handling
function Btn(){
    // const clickHandler = 
    // () => console.log('click')

    return(
    <button onClick={function() {console.log('first example')}}>
    An inline anonymous ES5 function event handler
    </button>
    );
}
export default Btn;