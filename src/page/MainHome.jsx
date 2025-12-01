import CourseCard from "../components/CourseCard";
import HeroSection from "../components/Hero";

const fakeCourses = [
  {
    _id: "1",
    title: "React Mastery 2025",
    description: "Learn modern React with hooks, context, Redux Toolkit, and advanced patterns.",
    instructor: "John Doe",
    price: 29,
    thumbnail: "https://i.ibb.co/Bz9m2b0/react-course.jpg"
  },
  {
    _id: "2",
    title: "Node.js & Express Bootcamp",
    description: "Master backend development, REST APIs, authentication, and deployment.",
    instructor: "Sarah Miller",
    price: 35,
    thumbnail: "https://i.ibb.co/Nr8DjLz/nodejs-course.jpg"
  },
  {
    _id: "3",
    title: "Complete MongoDB Guide",
    description: "MongoDB fundamentals, aggregation, indexing, and real-world schema design.",
    instructor: "Mark Henry",
    price: 25,
    thumbnail: "https://i.ibb.co/cC0V7dw/mongo-course.jpg"
  }
];

const Home = () => {
  return (
    <div>
    <HeroSection/>

    <div>
      <h1 className="text-3xl font-bold mb-6">Popular Courses</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {fakeCourses.map((course) => (
          <CourseCard key={course._id} course={course} />
        ))}
      </div>
    </div>
    </div>
  );
};

export default Home;