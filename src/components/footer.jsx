import { Facebook, Twitter, Instagram, Youtube } from 'lucide-react'


export default function footer() {
    return (
        <footer className="bg-white text-[#0a1929] py-12 px-4">
            <div className="container mx-auto max-w-7xl">
                <div className="bg-white text-black py-12 ">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
                        {/* Logo and App Store Links */}
                        <div className="col-span-2 md:col-span-4 lg:col-span-4 xl:col-span-5 flex flex-col items-start justify-center">
                            <div className="mb-4">
                                <img
                                    src="https://www.ubereats.com/_static/97c43f8974e6c876.svg"
                                    alt="HamroCommerce Logo"
                                    className="w-[146px] h-[24px]"
                                />
                            </div>
                            <p className="mb-4 text-sm">
                                Your one-stop shop for all your needs. Discover a wide range of
                                products, enjoy seamless delivery, and experience the best of online
                                shopping in Nepal.
                            </p>
                            <div className="flex gap-4">
                                <img
                                    src="https://www.ubereats.com/_static/783bb4a82e5be29e.svg"
                                    alt="Google Play Store"
                                    className="w-[134px] h-[40px]"
                                />
                                <img
                                    src="https://www.ubereats.com/_static/163bdc9b0f1e7c9e.png"
                                    alt="Apple App Store"
                                    className="w-[134px] h-[40px]"
                                />
                            </div>
                        </div>

                        {/* Shop */}
                        <div>
                            <h2 className="text-white font-medium mb-4">Shop</h2>
                            <ul className="space-y-2">
                                {["Men's Clothing", "Women's Clothing", "Electronics", "Groceries", "Home & Furniture"].map((item) => (
                                    <li key={item}>
                                        <a href="#" className=" transition-colors">
                                            {item}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Customer Service */}
                        <div>
                            <h2 className="text-white font-medium mb-4">Customer Service</h2>
                            <ul className="space-y-2">
                                {["Help Center", "Track Order", "Returns & Refunds", "Shipping Info", "FAQs"].map((service) => (
                                    <li key={service}>
                                        <a href="#" className=" transition-colors">
                                            {service}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Company Info */}
                        <div>
                            <h2 className="text-white font-medium mb-4">About Us</h2>
                            <ul className="space-y-2">
                                {["Our Story", "Careers", "Privacy Policy", "Terms & Conditions", "Contact Us"].map((info) => (
                                    <li key={info}>
                                        <a href="#" className=" transition-colors">
                                            {info}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Social Media */}
                        <div>
                            <h2 className="text-white font-medium mb-4">Follow Us</h2>
                            <ul className="space-y-2">
                                {["Facebook", "Instagram", "Twitter", "YouTube", "LinkedIn"].map((platform) => (
                                    <li key={platform}>
                                        <a href="#" className=" transition-colors">
                                            {platform}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>


                {/* About Section */}
                <div className="mt-12 border-t border-gray-700 pt-8">
                    <h2 className="text-xl mb-4">Hamro Commerce - Nepal's largest E-commerce Brand</h2>
                    <p className="text-sm mb-8">
                        HamroCommerce is Nepal’s largest e-commerce platform, established to connect local sellers with buyers nationwide. Launched in 2015, we began as an online marketplace offering a wide range of products to simplify shopping for Nepalese customers. Our mission was to bring convenience to consumers while empowering small businesses to expand their reach. Over time, we introduced features like same-day delivery, secure payment options, and exclusive local products to make online shopping seamless and accessible for everyone.
                    </p>

                    {/* Footer Bottom */}
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <div className="flex items-center gap-2">
                            <img src="https://english.hamropatro.com/images/hamropatro.png" alt="Hamro Commerce Logo" className="h-8 w-8" />
                            <span className="text-sm">
                                © Hamro Commerce 2024, All Rights Reserved | <a href="#" className="">Privacy</a> | <a href="#" className="">Terms of Service</a>
                            </span>
                        </div>

                        {/* Social Media Icons */}
                        <div className="flex gap-4">
                            <a href="#" className=" p-2 rounded-full  transition-colors">
                                <Facebook className="h-5 w-5" />
                                <span className="sr-only">Facebook</span>
                            </a>
                            <a href="#" className=" p-2 rounded-full  transition-colors">
                                <Twitter className="h-5 w-5" />
                                <span className="sr-only">Twitter</span>
                            </a>
                            <a href="#" className=" p-2 rounded-full  transition-colors">
                                <Instagram className="h-5 w-5" />
                                <span className="sr-only">Instagram</span>
                            </a>
                            <a href="#" className=" p-2 rounded-full  transition-colors">
                                <Youtube className="h-5 w-5" />
                                <span className="sr-only">YouTube</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}