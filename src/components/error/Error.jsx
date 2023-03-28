import { useRouteError } from "react-router-dom";

export default function Error() {
  const { message, statusText, status } = useRouteError();
  return (
    <>
      <h1>Error: {message}</h1>
      <pre>
        {status} - {statusText}
      </pre>
    </>
  );
}
