export default function ThankYou() {
  return (
    <div className="h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center bg-white p-10 rounded-xl shadow-lg">
        <h1 className="text-3xl font-bold text-green-600">
          🎉 Thank You!
        </h1>

        <p className="mt-3 text-gray-600">
          Your enquiry has been submitted successfully.
        </p>
      </div>
    </div>
  );
}