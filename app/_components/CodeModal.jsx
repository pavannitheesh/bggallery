// components/CodeModal.js
export default function CodeModal({ code, onClose }) {
    const copyToClipboard = () => {
      navigator.clipboard.writeText(code);
      alert('Code copied to clipboard!');
    };
  
    return (
      <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl max-w-4xl w-full max-h-[80vh] overflow-hidden flex flex-col">
          <div className="flex justify-between items-center p-4 border-b dark:border-gray-700">
            <h3 className="text-lg font-medium">Background Code</h3>
            <div className="flex space-x-2">
              <button 
                onClick={copyToClipboard}
                className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 text-sm"
              >
                Copy Code
              </button>
              <button 
                onClick={onClose}
                className="px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded hover:bg-gray-300 dark:hover:bg-gray-600 text-sm"
              >
                Close
              </button>
            </div>
          </div>
          <div className="overflow-auto p-4 flex-grow">
            <pre className="text-sm bg-gray-100 dark:bg-gray-900 p-4 rounded whitespace-pre-wrap overflow-x-auto">
              {code}
            </pre>
          </div>
        </div>
      </div>
    );
  }