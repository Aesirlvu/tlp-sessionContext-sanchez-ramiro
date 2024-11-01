import Navbar from "../components/Navbar";
import WelcomeCard from "../components/WelcomeCard";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-12">
          <div className="flex justify-center items-center">
            <WelcomeCard username="" />
          </div>
        </div>
      </main>
    </div>
  );
}
