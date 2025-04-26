export const SectionTitle = ({ title }: { title: string }) => {
  return (
    <h2 className="w-7/12 mx-auto text-4xl font-bold text-center text-transparent bg-gradient-to-r from-white via-yellow-100 to-white bg-clip-text shimmer-text">
      {title}
    </h2>
  );
};
