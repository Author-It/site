import React from 'react';

// minified version is also included
// import 'react-toastify/dist/ReactToastify.min.css';

function App() {
    const notify = () => toast("Wow so easy !");

    return (
        <div>
            <button onClick={notify}>Notify !</button>
        </div>
    );
}