"use client";

const AboutUs = () => {
  return (
    <section className="py-14 lg:px-40 md:py-24 bg-white text-zinc-900">
      <div className="container px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-8">
          <div className="flex items-center justify-center">
            <h2 className=" text-center lg:text-end text-4xl md:text-6xl leading-tight md:leading-tight font-semibold ">
              About Handicraft Store Nepal
            </h2>
          </div>
          <div className="lg:px-4 my-6 lg:my-0">
            <div
              className="min-h-[300px] md:h-full bg-center bg-cover"
              style={{
                backgroundImage:
                  "url(https://images.pexels.com/photos/4706134/pexels-photo-4706134.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)",
              }}
            ></div>
          </div>
          <div className="pr-7">
            <p className="text-base leading-7 opacity-70 mb-0">
              Created forth two. Behold appear first, kind all i saying fowl man
              itself moved which every open shall moved subdue appear. Saying
              life wherein stars. Give dry, own, male had that us third lesser
              over deep. May every bring in it Whose. Female earth heaven wont
              behold female.
            </p>
            <p className="text-base leading-7 opacity-70 mt-6 mb-0">
              Moved bearing give a two after. Had. Seas. Man theyre. Grass above
              kind saying thing for that void sixth fly His after it.
            </p>
            <p className="text-base leading-7 opacity-70 mt-6 mb-0">
              The set doesnt moved. Deep dont fruit fowl gathering heaven days
              moving creeping under from i air. Set it fifth Meat wasness. every
              bring in it Whose. Female earth heaven wont behold female.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
