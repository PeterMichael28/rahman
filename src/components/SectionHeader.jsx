const SectionHeader = ({ text }) => {
  return (
    <h2
      className="text-primary-text font-medium lg:text-[40px] text-[24px] leading-normal"
      data-aos="fade-up"
      data-aos-offset="60"
    >
      {text}
    </h2>
  );
};

export default SectionHeader;
