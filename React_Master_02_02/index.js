import { createRoot } from 'react-dom/client';

function NavigationBar() {
    // TODO: Actually implement a navigation bar
    return <h1>Hello from React!</h1>;
}

// Render your React component instead
const domNode = document.getElementById('navigation');
const root = createRoot(domNode);
root.render(<NavigationBar />);