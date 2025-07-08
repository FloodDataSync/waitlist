
import { FramerCarousel } from './HeroCarousel';
import { TestimonialCarousel } from './TestimonialCarousel';

const Testimonials = () => {

  return (
    <section className="max-w-screen-xl mx-auto mt-24 px-6 md:px-20 text-white text-center select-none py-20">
      <h1 className="text-4xl font-bold mb-2">What Gamers Are Saying</h1>
      <p className="text-gray-300 mb-2 text-sm md:text-base">
        Why Gamers Keep Coming Back
      </p>
      <TestimonialCarousel />
    </section>
  );
}

export default Testimonials