import React from 'react';
import error from"../assets/Error/error.png";
const ErrorBoundary = ({ children }) => {
  const [hasError, setHasError] = React.useState(false);

  React.useEffect(() => {
    const handleError = (error, errorInfo) => {
      console.error("Error Boundary Caught:", error, errorInfo);
      setHasError(true);
    };

    window.addEventListener('error', handleError);

    return () => {
      window.removeEventListener('error', handleError);
    };
  }, []);

  if (hasError) {
    return (    <img src={error} alt="Something went wrong" />
    )
  }

  return children;
};

export default ErrorBoundary;