function PageNotFound() {
  return (
    <>
      <div className="container mx-auto flex flex-col items-center justify-center h-full">
        <h1 className="text-4xl font-bold text-gray-800">404 Page Not Found</h1>
        <p className="text-lg font-normal text-gray-600">
          Oops! The page you were looking for doesn't exist.
        </p>
        <a href="/" className="btn btn-primary">
          Go Home
        </a>
      </div>
    </>
  );
}
export default PageNotFound;
