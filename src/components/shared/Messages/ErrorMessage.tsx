function ErrorMessage({ errorMessage }: { errorMessage: string }) {
  return (
    <p className="text-sm text-red-700" role="alert">
      {errorMessage}
    </p>
  );
}

export default ErrorMessage;
