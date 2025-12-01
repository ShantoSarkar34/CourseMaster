import CourseCard from "../components/CourseCard";
import HeroSection from "../components/Hero";
import { courses } from "../data/fakeCourses";


const Home = () => {
  return (
    <div>
    <HeroSection/>

    <div className="bg-gray-200 w-full py-10">
      <div className="container mx-auto px-4">
      <h1 className="text-3xl font-bold mb-6">Popular Courses</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {courses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>

      </div>
    </div>
    </div>
  );
};

export default Home;