// import {useState} from 'react';
//
// export default function Form() {
//     const [isSent, setIsSent] = useState(false);
//     const [message, setMessage] = useState('Hi!');
//     if (isSent) {
//         return <h1>Your message is on its way!</h1>
//     }
//     return (
//         <form onSubmit={(e) => {
//             e.preventDefault();
//             setIsSent(true);
//             sendMessage(message);
//         }}>
//       <textarea
//           placeholder="Message"
//           value={message}
//           onChange={e => setMessage(e.target.value)}
//       />
//             <button type="submit">Send</button>
//         </form>
//     );
// }
//
// function sendMessage(message) {
//     // ...
// }

// import {useState} from 'react';
//
// export default function Counter() {
//     const [number, setNumber] = useState(0);
//
//     return (
//         <>
//             <h1>{number}</h1>
//             <button onClick={() => {
//                 setNumber(number + 1);
//                 setNumber(number + 1);
//                 setNumber(number + 1);
//             }}>+3
//             </button>
//         </>
//     )
// }

import {useState} from 'react';

export default function Counter() {
    const [number, setNumber] = useState(0);

    return (
        <>
            <h1>{number}</h1>
            <button onClick={() => {
                setNumber(number + 5);
                setTimeout(() => {
                    alert(number);
                }, 3000);
                //alert(number);
            }}>+5
            </button>
        </>
    )
}
