type Props = {
  heading: string;
  details: string;
};
export default function TextBlock({ heading, details }: Props) {
  return (
    <>
      <section className="text-gray-600 body-font bg-gradient-to-r from-gray-500 to-black-500 gradient-bg">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-12">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
              {heading}
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                {details}
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
