import React, { useEffect, useState } from 'react';

const NotificationModal = ({ message, type, onClose }) => {
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        // Automatically hide the modal after 10 seconds
        const timer = setTimeout(() => {
            setVisible(false);
            onClose(); // Call onClose to clean up
        }, 100000);

        return () => clearTimeout(timer);
    }, [onClose]);

    if (!visible) {
        return null;
    }

    return (
        <div
            className={`modal fixed top-4 right-4 p-4 rounded shadow-lg text-white ${
                type === 'success' ? 'bg-green-500' : 'bg-red-500'
            }`}
        >
            <p>{message}</p>
            <button
                onClick={() => {
                    setVisible(false);
                    onClose();
                }}
                className="mt-2 text-sm underline"
            >
                Close
            </button>
        </div>
    );
};

export default NotificationModal;
