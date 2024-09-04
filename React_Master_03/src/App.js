// export default function TodoList() {
//     return (
//         // This doesn't quite work!
//         <h1>Hedy Lamarr's Todos</h1>
//     <img
//         src="https://i.imgur.com/yXOvdOSs.jpg"
//         alt="Hedy Lamarr"
//         class="photo"
//     >
//         <ul>
//             <li>Invent new traffic lights
//                 <li>Rehearse a movie scene
//                     <li>Improve spectrum technology
//         </ul>
//         );
//         }


// export default function TodoList() {
//     return (
//         <>
//             <h1>Hedy Lamarr's Todos</h1>
//             <img
//                 src="https://i.imgur.com/yXOvdOSs.jpg"
//                 alt="Hedy Lamarr"
//                 className="photo"
//             />
//             <ul>
//                 <li>Invent new traffic lights</li>
//                 <li>Rehearse a movie scene</li>
//                 <li>Improve spectrum technology</li>
//             </ul>
//         </>
//     );
// }


// const person = {
//     name: 'Gregorio Y. Zara',
//     theme: {
//         backgroundColor: 'black',
//         color: 'pink'
//     }
// };
//
// export default function TodoList() {
//     return (
//         <div style={person.theme}>
//             <h1>{person.name}'s Todos</h1>
//             <img
//                 className="avatar"
//                 src="https://i.imgur.com/7vQD0fPs.jpg"
//                 alt="Gregorio Y. Zara"
//             />
//             <ul>
//                 <li>Improve the videophone</li>
//                 <li>Prepare aeronautics lectures</li>
//                 <li>Work on the alcohol-fuelled engine</li>
//             </ul>
//         </div>
//     );
// }


// function Item({ name, isPacked }) {
//     return (
//         <li className="item">
//             {name} {isPacked && '✔'}
//         </li>
//     );
// }
//
// export default function PackingList() {
//     return (
//         <section>
//             <h1>Sally Ride's Packing List</h1>
//             <ul>
//                 <Item
//                     isPacked={true}
//                     name="Space suit"
//                 />
//                 <Item
//                     isPacked={true}
//                     name="Helmet with a golden leaf"
//                 />
//                 <Item
//                     isPacked={false}
//                     name="Photo of Tam"
//                 />
//             </ul>
//         </section>
//     );
// }


// let guest = 0;
//
// function Cup() {
//     // Bad: changing a preexisting variable!
//     guest = guest + 1;
//     return <h2>Tea cup for guest #{guest}</h2>;
// }
//
// export default function TeaSet() {
//     return (
//         <>
//             <Cup />
//             <Cup />
//             <Cup />
//         </>
//     );
// }


function Cup({ guest }) {
    return <h2>Tea cup for guest #{guest}</h2>;
}

export default function TeaSet() {
    return (
        <>
            <Cup guest={1} />
            <Cup guest={2} />
            <Cup guest={3} />
        </>
    );
}
