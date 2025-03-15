import MainLayout from "../layouts/MainLayout";
import BannerImage from "../assets/images/contactus.avif";
import VectorsImage from '../assets/images/vectors.png'
import { EnvelopeIcon, PhoneArrowUpRightIcon, GlobeAsiaAustraliaIcon } from "@heroicons/react/24/outline";

const Contact = () => {
  return (
    <MainLayout>
      <section
        className="relative"
        style={{
          backgroundImage: `url(${BannerImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "60vh",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute top-40 left-48">
          <h1 className="text-5xl font-bold text-white">Contact Us</h1>
          <p className="mt-4 text-3xl text-white">We’d love to talk to you</p>
        </div>
      </section>
      <div className="relative -mt-12 grid gap-6 md:grid-cols-3 max-w-5xl mx-auto">
        {/* Call Us */}
        <div className="relative group/btn bg-white p-6 rounded-lg shadow-md text-center">
          <div className="flex justify-center text-indigo-600 text-4xl">
            <PhoneArrowUpRightIcon className="w-8 h-8" />
          </div>
          <h4 className="text-lg font-semibold mt-4">Hotline</h4>
          <p className="text-blue-600 mt-1">+856 20 97771567</p>
          <BottomGradient />
        </div>

        {/* Email Us */}
        <div className="relative group/btn bg-white p-6 rounded-lg shadow-md text-center">
          <div className="flex justify-center text-indigo-600 text-4xl">
            <EnvelopeIcon className="w-8 h-8" />
          </div>
          <h4 className="text-lg font-semibold mt-4">Email Us</h4>
          <a href="" className="text-blue-600 mt-1">ziongroupsole@gmail.com</a>
          <BottomGradient />
        </div>

        {/* Headquarters */}
        <div className="relative group/btn bg-white p-6 rounded-lg shadow-md text-center">
          <div className="flex justify-center text-indigo-600 text-4xl">
            <GlobeAsiaAustraliaIcon className="w-8 h-8" />
          </div>
          <h4 className="text-lg font-semibold mt-4">Contact via Internet</h4>
          <div className="flex justify-center space-x-2">
                <a href="" className="text-blue-600 mt-1">Facebook</a>
                <a href="" className="text-blue-600 mt-1">Whatsapp</a>
                <a href="" className="text-blue-600 mt-1">Wechat</a>
              </div>
          <BottomGradient />
        </div>
      </div>
      <div className="container mx-auto py-6 grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
        <div className="border border-gray-300 rounded-lg p-10 bg-gray-50">
          <h1 className="font-bold text-3xl underline text-[#333]">Contact Infomation</h1>
          <div className="py-6 flex gap-2">
            <div className="relative group/btn bg-white p-6 rounded-lg shadow-md text-center">
              <div className="flex justify-center text-indigo-600 text-4xl">
                <GlobeAsiaAustraliaIcon className="w-8 h-8" />
              </div>
              <h4 className="text-lg font-semibold mt-4">Contact via Internet</h4>
              <div className="flex">
                <a href="">Facebook</a>
                <p className="text-gray-600 mt-1">
                  Facebook, Whatsapp, Wechat
                </p>
              </div>
              <BottomGradient />
            </div>
            <div className="relative group/btn bg-white p-6 rounded-lg shadow-md text-center">
              <div className="flex justify-center text-indigo-600 text-4xl">
                <GlobeAsiaAustraliaIcon className="w-8 h-8" />
              </div>
              <h4 className="text-lg font-semibold mt-4">Contact via Internet</h4>
              <p className="text-gray-600 mt-1">
                Facebook, Whatsapp, Wechat
              </p>
              <BottomGradient />
            </div>
          </div>
        </div>
        <div className="rounded-lg p-10 shadow-lg">
          <h1 className="font-bold text-3xl text-[#333] pb-2">Get In Touch</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, nesciunt atque architecto id similique natus ab, itaque eveniet quo assumenda laudantium debitis distinctio ipsam ullam necessitatibus iste quod eligendi. Velit.</p>
          <form className="mt-6 space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                <input type="text" id="name" name="name" className="h-10 w-full border border-gray-300 rounded px-3" />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number</label>
                <div className="flex items-center border border-gray-300 rounded h-10">
                  <span className="px-3 text-gray-700">+856</span>
                  <input
                    type="number"
                    id="phone"
                    name="phone"
                    className="flex-1 h-full border-none focus:outline-none"
                    placeholder="20"
                  />
                </div>
              </div>
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <input type="email" id="email" name="email" className="h-10 w-full border border-gray-300 rounded px-3" />
            </div>
            <div>
              <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
              <textarea id="description" name="description" rows={4} className="mt-1 border p-2 border-input bg-transparent w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"></textarea>
            </div>
            <div>
              <button type="submit" className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                Submit
              </button>
            </div>
          </form>
        </div>

      </div>
      <div className="container mx-auto py-4">
        <iframe className="location-map w-full h-80"
          src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d948.783658138597!2d102.5789444!3d17.9724722!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTfCsDU4JzIwLjkiTiAxMDLCsDM0JzQ0LjIiRQ!5e0!3m2!1sen!2sla!4v1702266280334!5m2!1sen!2sla" loading="lazy"
          allowFullScreen></iframe>
      </div>
      <div className="flex justify-end">
        <img src={VectorsImage} alt="image" className="w-75" />
      </div>
    </MainLayout>
  );
};

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

export default Contact;