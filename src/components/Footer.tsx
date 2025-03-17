import { IoLogoWechat } from "react-icons/io5";
import { FaTiktok } from "react-icons/fa";
import { MdCall } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="bg-primary text-center text-white">
      <div className="py-6 justify-center space-x-4">
        <h1 className="py-6 text-white text-center text-4xl font-bold">About Zion Company</h1>
        <p className="text-center text-lg">
          Zion Group Sole Ltd. is a leading company in the agricultural sector.
          We provide quality farm products and services to our customers.
          We are committed to providing the best services to our customers.</p>
        <hr className="mx-4 my-4 border-t border-gray-300" />
        <div>
          <p className="text-center text-lg">Contact us:</p>
          <div className="flex items-start justify-center space-y-4 space-x-2">
            <ul className="flex space-x-4 pt-4">
            <li className="relative group">
                <a
                  href="#"
                  aria-label="Instagram"
                  className="block p-2.5 bg-gray-500 text-white rounded-full hover:bg-green-600 transition"
                >
                  <MdCall size={23} />
                </a>
              </li>
              <li className="relative group">
                <a
                  href="#"
                  aria-label="Instagram"
                  className="block p-2.5 bg-gray-500 text-white rounded-full hover:bg-green-600 transition"
                >
                  <IoLogoWechat size={23} />
                </a>

              </li>

              <li className="relative group">
                <a
                  href="#"
                  aria-label="Whatsapp"
                  className="block p-3 bg-gray-500 text-white rounded-full hover:bg-green-600 "
                >
                  <svg
                    xmlSpace="preserve"
                    viewBox="0 0 24 24"
                    className="bi bi-whatsapp relative z-10"
                    fill="currentColor"
                    height="20"
                    width="20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill="currentColor"
                      d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"
                    ></path>
                  </svg>
                </a>
              </li>
              <li className="relative group">
                <a
                  href="#"
                  aria-label="Facebook"
                  className="block p-3 bg-gray-500 text-white rounded-full hover:bg-blue-700 transition"
                >
                  <svg
                    xmlSpace="preserve"
                    viewBox="0 0 24 24"
                    className="bi bi-facbook"
                    fill="currentColor"
                    height="20"
                    width="20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill="currentColor"
                      d="M23.9981 11.9991C23.9981 5.37216 18.626 0 11.9991 0C5.37216 0 0 5.37216 0 11.9991C0 17.9882 4.38789 22.9522 10.1242 23.8524V15.4676H7.07758V11.9991H10.1242V9.35553C10.1242 6.34826 11.9156 4.68714 14.6564 4.68714C15.9692 4.68714 17.3424 4.92149 17.3424 4.92149V7.87439H15.8294C14.3388 7.87439 13.8739 8.79933 13.8739 9.74824V11.9991H17.2018L16.6698 15.4676H13.8739V23.8524C19.6103 22.9522 23.9981 17.9882 23.9981 11.9991Z"
                    ></path>
                  </svg>
                </a>
              </li>
              <li className="relative group">
                <a
                  href="#"
                  aria-label="Instagram"
                  className="block p-2.5 bg-gray-500 text-white rounded-full hover:bg-black transition"
                >
                  <FaTiktok size={23} />
                </a>
              </li>
              
            </ul>
          </div>
        </div>
      </div>
      <div className="py-4 bg-gray-800 text-center text-white">
        <p>© 2025 Zion Group Sole Ltd. All rights reserved.</p>
      </div>
    </footer>
  );
};
export default Footer;
