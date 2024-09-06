// import {useState} from 'react';
//
// export default function MovingDot() {
//     const [position, setPosition] = useState({
//         x: 0,
//         y: 0
//     });
//     return (
//         <div
//             onPointerMove={e => {
//                 setPosition({
//                     x: e.clientX,
//                     y: e.clientY
//                 });
//             }}
//             style={{
//                 position: 'relative',
//                 width: '100vw',
//                 height: '100vh',
//             }}>
//             <div style={{
//                 position: 'absolute',
//                 backgroundColor: 'red',
//                 borderRadius: '50%',
//                 transform: `translate(${position.x}px, ${position.y}px)`,
//                 left: -10,
//                 top: -10,
//                 width: 20,
//                 height: 20,
//             }}/>
//         </div>
//     );
// }

// import {useState} from 'react';
//
// export default function Form() {
//     const [person, setPerson] = useState({
//         firstName: 'Barbara',
//         lastName: 'Hepworth',
//         email: 'bhepworth@sculpture.com'
//     });

// function handleFirstNameChange(e) {
//     setPerson({
//         ...person,
//         firstName: e.target.value
//     });
// }
//
// function handleLastNameChange(e) {
//     setPerson({
//         ...person,
//         lastName: e.target.value
//     });
// }
//
// function handleEmailChange(e) {
//     setPerson({
//         ...person,
//         email: e.target.value
//     });
// }

//     function handleChange(e) {
//         setPerson({
//             ...person,
//             [e.target.name]: e.target.value
//         });
//     }
//
//     return (
//         <>
//             <label>
//                 First name:
//                 <input
//                     name="firstName"
//                     value={person.firstName}
//                     onChange={handleChange}
//                 />
//             </label>
//             <label>
//                 Last name:
//                 <input
//                     name="lastName"
//                     value={person.lastName}
//                     onChange={handleChange}
//                 />
//             </label>
//             <label>
//                 Email:
//                 <input
//                     name="email"
//                     value={person.email}
//                     onChange={handleChange}
//                 />
//             </label>
//             <p>
//                 {person.firstName}{' '}
//                 {person.lastName}{' '}
//                 ({person.email})
//             </p>
//         </>
//     );
// }

import { useImmer } from 'use-immer';

export default function Form() {
    const [person, updatePerson] = useImmer({
        name: 'Niki de Saint Phalle',
        artwork: {
            title: 'Blue Nana',
            city: 'Hamburg',
            image: 'https://i.imgur.com/Sd1AgUOm.jpg',
        }
    });

    function handleNameChange(e) {
        updatePerson({
            ...person,
            name: e.target.value
        });
    }

    function handleTitleChange(e) {
        updatePerson({
            ...person,
            artwork: {
                ...person.artwork,
                title: e.target.value
            }
        });
    }

    function handleCityChange(e) {
        updatePerson({
            ...person,
            artwork: {
                ...person.artwork,
                city: e.target.value
            }
        });
    }

    function handleImageChange(e) {
        updatePerson({
            ...person,
            artwork: {
                ...person.artwork,
                image: e.target.value
            }
        });
    }

    return (
        <>
            <label>
                Name:
                <input
                    value={person.name}
                    onChange={handleNameChange}
                />
            </label>
            <label>
                Title:
                <input
                    value={person.artwork.title}
                    onChange={handleTitleChange}
                />
            </label>
            <label>
                City:
                <input
                    value={person.artwork.city}
                    onChange={handleCityChange}
                />
            </label>
            <label>
                Image:
                <input
                    value={person.artwork.image}
                    onChange={handleImageChange}
                />
            </label>
            <p>
                <i>{person.artwork.title}</i>
                {' by '}
                {person.name}
                <br/>
                (located in {person.artwork.city})
            </p>
            <img
                src={person.artwork.image}
                alt={person.artwork.title}
            />
        </>
    );
}
