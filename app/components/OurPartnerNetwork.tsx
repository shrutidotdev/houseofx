import Image from 'next/image';

const categories = [
  {
    title: 'Manufacturing',
    image: '/Manufacturing.webp',
    count: '2,500+'
  },
  {
    title: 'Technology',
    image: '/Technology.webp',
    count: '3,800+'
  },
  {
    title: 'Logistics',
    image: '/Manufacturing.webp',
    count: '1,900+'
  }
];

function JoinedPartners() {
  return (
    <section id="partners" className="py-20 w-full  rounded-3xl">
       
      <div className="container mx-auto px-6">

        <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold mb-4 text-transparent bg-gradient-to-b from-[#19ff4b] via-[#7fff29] to-[#030303] bg-clip-text text-center">
                Our Partner Network
                </h2>
                <h3 className="text-lg md:text-xl text-gray-400">
                Join thousands of businesses already benefiting from our global network.
                </h3>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <div
              key={index}
              className="relative group overflow-hidden rounded-xl"
            >
              <div className="aspect-auto">
                <Image
                  src={category.image}
                  alt={category.title}
                  width={800}
                  height={300}
                  className="object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6">
                <h3 className="text-2xl font-bold mb-2">{category.title}</h3>
                <p className="text-green-500">{category.count} partners</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default JoinedPartners;