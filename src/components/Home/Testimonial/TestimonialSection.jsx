import SectionHeader from "~/components/SectionHeader";
import img1 from "~/assets/images/testimonial/timmy.png";
import img2 from "~/assets/images/testimonial/placeholder.png";

const TestimonialSection = () => {
  const testimonialData = [
    {
      name: "Akapo Oluwatimilehin",
      title: "Product Designer, Jeetar",
      image: img1,
      content:
        "Rahman is a delight to work with. He ensures his deliverables are quality and timely. He jokes around but is very passionate about the integrity of his work. He is an invaluable team player.",
    },
    {
      name: "Abimbola Adegbite",
      title: "Chief Security Officer (CSO) Reyts",
      image: img2,
      content:
        "Rahman understands what it takes to build a product that works and is focused on ensuring every product he works on delivers both for the company and the users.",
    },
    {
      name: "Adekunle Salau",
      title: "CEO Automata Associate",
      image: img2,
      content:
        "Rahman is technically competent in what he does, he is very mindful of quality and delivers his project to quality and time. He also provides invaluable feedback on how to improve the design of the solutions he worked on.",
    },
  ];
  return (
    <section className="bg-white">
      <div className="max-w-[1200px] w-full mx-auto px-4 md:px-8 pt-10 lg:pt-20 lg:px-0 relative">
        <SectionHeader text="Testimonials" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-7 mt-10">
          {testimonialData.map((dat, i) => (
            <SingleTestimonialCard key={i} data={dat} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;

const SingleTestimonialCard = ({ data }) => (
  <div className="bg-[#faf9fb] border border-[#f6f6f9] rounded-[20px] flex justify-center items-start p-5 lg:p-8  gap-y-4 flex-col ">
    <div className="flex items-center justify-start gap-3 ">
      <img src={data?.image} alt="image" className="rounded-full object-contain size-10 lg:size-12" />
      <div>
        <h2 className="text-primary-text text-[18px] lg:text-[20px] font-medium ">{data?.name}</h2>
        <p className="text-[#7B748B] text-sm font-medium">{data?.title}</p>
      </div>
    </div>
    <p className="text-[#5A5566] text-xs lg:text-sm leading-[160%]">{data?.content}</p>
  </div>
);
