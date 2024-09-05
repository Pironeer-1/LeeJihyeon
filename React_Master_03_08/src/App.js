// function Recipe({drinkers}) {
//     return (
//         <ol>
//             <li>Boil {drinkers} cups of water.</li>
//             <li>Add {drinkers} spoons of tea and {0.5 * drinkers} spoons of spice.</li>
//             <li>Add {0.5 * drinkers} cups of milk to boil and sugar to taste.</li>
//         </ol>
//     );
// }
//
// export default function App() {
//     return (
//         <section>
//             <h1>Spiced Chai Recipe</h1>
//             <h2>For two</h2>
//             <Recipe drinkers={2}/>
//             <h2>For a gathering</h2>
//             <Recipe drinkers={4}/>
//         </section>
//     );
// }

let guest = 0;

function Cup() {
    guest = guest + 1;
    return <h2>Tea cup for guest #{guest}</h2>;
}

export default function TeaSet() {
    return (
        <>
            <Cup />
            <Cup />
            <Cup />
        </>
    );
}