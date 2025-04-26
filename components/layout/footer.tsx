import { BookDemo } from "@/components/shared/buttons/BookDemo";
import { TryFree } from "@/components/shared/buttons/TryFree";

export const FooterBanner = () => {
  return (
    <section className="relative z-10 flex flex-col w-full max-w-screen-xl mx-auto -mt-32 -mb-40 text-white">
      <div className="relative w-max">
        <img
          src="/assets/footer-banner/content.svg"
          alt="Section 04 Content"
          className="w-full"
        />

        <div className="absolute inset-y-0 flex items-center justify-start inset-x-20">
          <h2 className="flex flex-col items-center justify-start w-7/12 text-6xl font-bold text-transparent sm:flex-row bg-gradient-to-r from-white via-yellow-100 to-white bg-clip-text shimmer-text">
            Ready to Secure Your Code with Krait?
          </h2>
        </div>

        <div className="absolute inset-y-0 flex items-center justify-end inset-x-20">
          <div className="flex flex-col items-center gap-4 sm:flex-row">
            <BookDemo />
            <TryFree />
          </div>
        </div>
      </div>
    </section>
  );
};
