/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { 
  Phone, 
  Globe, 
  Menu, 
  X, 
  Bug, 
  Rat, 
  ShieldAlert, 
  Bed, 
  Star, 
  Clock, 
  ShieldCheck, 
  MapPin, 
  Mail, 
  Facebook, 
  MessageCircle,
  CheckCircle2
} from 'lucide-react';

const servicesData = [
  {
    id: 'termite',
    title: 'Termite Control',
    icon: ShieldAlert,
    shortDesc: 'Complete eradication of termites protecting your wooden furniture and structure.',
    fullDesc: 'Our comprehensive termite control program includes a thorough inspection, targeted treatments using advanced termiticides, and preventative measures to ensure long-lasting protection for your home\'s foundation and wooden structures.',
    pricing: 'Starting from ₹1,500 (Depends on area size)',
    features: ['Free Inspection', 'Odorless Treatment', 'Long-term Warranty', 'Safe for Pets & Children']
  },
  {
    id: 'rodent',
    title: 'Rodent Control',
    icon: Rat,
    shortDesc: 'Safe and effective trapping and removal of rats and mice from your premises.',
    fullDesc: 'We use a combination of baiting, trapping, and exclusion techniques to eliminate rodent infestations. Our methods are designed to be highly effective while minimizing risks to your family and pets.',
    pricing: 'Starting from ₹800',
    features: ['Baiting & Trapping', 'Entry Point Sealing', 'Carcass Removal', 'Sanitization']
  },
  {
    id: 'cockroach',
    title: 'Cockroach Control',
    icon: Bug,
    shortDesc: 'Advanced gel treatments to eliminate cockroaches from kitchens and bathrooms.',
    fullDesc: 'Our cockroach control utilizes advanced gel baits and targeted sprays that are highly effective against all cockroach species. The treatment is odorless and doesn\'t require you to empty your kitchen cabinets.',
    pricing: 'Starting from ₹999',
    features: ['Gel Baiting System', 'No Need to Empty Kitchen', 'Odorless Chemicals', 'Instant Results']
  },
  {
    id: 'bedbugs',
    title: 'Bed Bugs Control',
    icon: Bed,
    shortDesc: 'Thorough inspection and treatment to ensure a peaceful, bite-free sleep.',
    fullDesc: 'Bed bugs require a meticulous approach. We conduct a detailed inspection of your mattresses, furniture, and crevices, followed by a specialized chemical treatment to eradicate bed bugs at all life stages.',
    pricing: 'Starting from ₹1,200',
    features: ['Deep Inspection', 'Multi-stage Treatment', 'Mattress Safe', 'Follow-up Visit Included']
  }
];

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<typeof servicesData[0] | null>(null);

  return (
    <div className="min-h-screen font-sans text-gray-800 bg-white selection:bg-blue-200">
      {/* Top Bar */}
      <div className="bg-gray-50 py-2 px-4 text-sm border-b border-gray-200 hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2 text-gray-600 hover:text-blue-900 transition-colors">
              <Phone size={16} className="text-blue-900" />
              <span>+91 80993 27682</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-600 hover:text-blue-900 transition-colors">
              <Phone size={16} className="text-blue-900" />
              <span>+91 88261 67996</span>
            </div>
          </div>
          <div className="flex items-center space-x-2 text-gray-600">
            <Globe size={16} className="text-blue-900" />
            <span>northeastpcontrol.in</span>
          </div>
        </div>
      </div>

      {/* Navigation Bar */}
      <nav className="bg-white sticky top-0 z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            {/* Logo */}
            <div className="flex items-center space-x-3 cursor-pointer">
              <img 
                src="https://i.ibb.co/5gTKS3yG/slazzer-preview-hmbyk.png" 
                alt="Northeast Pest Control Logo" 
                className="h-12 w-auto object-contain"
              />
              <div className="flex flex-col">
                <span className="font-bold text-xl text-blue-900 leading-tight">Northeast</span>
                <span className="text-sm font-semibold text-green-600 leading-tight">Pest Control</span>
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#" className="text-gray-700 hover:text-blue-900 font-medium transition-colors">Home</a>
              <a href="#services" className="text-gray-700 hover:text-blue-900 font-medium transition-colors">Services</a>
              <a href="#gallery" className="text-gray-700 hover:text-blue-900 font-medium transition-colors">Gallery</a>
              <a href="#testimonials" className="text-gray-700 hover:text-blue-900 font-medium transition-colors">Mentions</a>
              <a href="#about" className="text-gray-700 hover:text-blue-900 font-medium transition-colors">About Us</a>
            </div>

            {/* CTA Button */}
            <div className="hidden md:flex">
              <button className="bg-blue-900 hover:bg-blue-800 text-white px-6 py-2.5 rounded-full font-medium transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                Book an Inspection
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-blue-900 focus:outline-none"
              >
                {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 absolute w-full shadow-lg animate-fade-in">
            <div className="px-4 pt-2 pb-6 space-y-2">
              <a href="#" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-900 hover:bg-gray-50 rounded-md">Home</a>
              <a href="#services" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-900 hover:bg-gray-50 rounded-md">Services</a>
              <a href="#gallery" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-900 hover:bg-gray-50 rounded-md">Gallery</a>
              <a href="#testimonials" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-900 hover:bg-gray-50 rounded-md">Mentions</a>
              <a href="#about" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-900 hover:bg-gray-50 rounded-md">About Us</a>
              <button className="w-full mt-4 bg-blue-900 text-white px-6 py-3 rounded-md font-medium">
                Book an Inspection
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative w-full bg-gray-50 flex flex-col md:block md:min-h-[550px] md:aspect-[21/10] lg:max-h-[800px] overflow-hidden">
        {/* Mobile Image (Visible only on small screens) */}
        <div className="w-full h-64 sm:h-80 md:hidden relative">
          <img 
            src="https://i.ibb.co/yjFZ1xC/1774023056890-2.jpg" 
            alt="Pest Control Family" 
            className="w-full h-full object-cover object-center" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-50 via-transparent to-transparent"></div>
        </div>

        {/* Desktop Background Image */}
        <div className="hidden md:flex absolute inset-0 z-0 items-center justify-center">
          <img 
            src="https://i.ibb.co/yjFZ1xC/1774023056890-2.jpg" 
            alt="Pest Control Family" 
            className="w-full h-full object-contain object-center" 
          />
        </div>
        
        {/* Overlay (Desktop only) */}
        <div className="hidden md:block absolute inset-0 bg-black/5 z-0"></div>
        
        {/* Bottom Gradient Transition (Desktop only) */}
        <div className="hidden md:block absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-gray-50 to-transparent z-10 pointer-events-none"></div>

        {/* Content */}
        <div className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center pb-12 pt-0 md:py-16 md:absolute md:inset-0 md:h-full">
          {/* Text Container */}
          <div className="bg-white md:bg-white/85 md:backdrop-blur-md p-6 sm:p-8 md:p-10 rounded-3xl shadow-xl md:shadow-2xl border border-gray-100 md:border-white/50 text-center animate-slide-up w-full max-w-4xl mx-auto -mt-12 md:mt-8 relative z-30">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-blue-900 tracking-tight mb-4 leading-tight drop-shadow-sm">
              GUARANTEED <span className="text-red-600">PEST-FREE</span> HOME FOR YOUR FAMILY
            </h1>
            <p className="text-base md:text-lg text-gray-900 max-w-2xl mx-auto mb-6 md:mb-8 font-semibold">
              Protecting Guwahati Homes with Professional, Safe, and Fast Solutions. 24/7 Support.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-3 sm:space-y-0 sm:space-x-6">
              <button className="w-full sm:w-auto bg-blue-900 hover:bg-blue-800 text-white px-6 md:px-8 py-3 md:py-4 rounded-full font-bold text-base transition-all duration-300 hover:-translate-y-1 hover:shadow-xl animate-bounce-slow shadow-lg">
                GET A FREE QUOTE
              </button>
              <a 
                href="https://wa.me/918099327682" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full sm:w-auto bg-green-600 hover:bg-green-500 text-white px-6 md:px-8 py-3 md:py-4 rounded-full font-bold text-base transition-all duration-300 hover:-translate-y-1 hover:shadow-xl flex items-center justify-center space-x-2 shadow-lg"
              >
                <Phone size={20} />
                <span>WHATSAPP US</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Middle Layout: Services & Testimonials */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Left Side - Our Services */}
            <div className="animate-slide-up" style={{ animationDelay: '0.1s' }}>
              <div className="mb-10">
                <h2 className="text-3xl font-bold text-blue-900 mb-4">Our Services</h2>
                <div className="w-20 h-1.5 bg-green-600 rounded-full"></div>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {servicesData.map((service) => (
                  <div 
                    key={service.id}
                    onClick={() => setSelectedService(service)}
                    className="bg-white p-6 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 hover:scale-105 border border-gray-100 group cursor-pointer"
                  >
                    <div className="w-14 h-14 bg-blue-50 rounded-full flex items-center justify-center mb-4 group-hover:bg-blue-900 transition-colors">
                      <service.icon size={28} className="text-blue-900 group-hover:text-white transition-colors" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                    <p className="text-gray-600 text-sm mb-4">{service.shortDesc}</p>
                    <div className="text-blue-600 font-semibold text-sm flex items-center group-hover:text-blue-800">
                      View Pricing & Details <span className="ml-1 group-hover:translate-x-1 transition-transform">→</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Side - Testimonials */}
            <div id="testimonials" className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <div className="mb-10">
                <h2 className="text-3xl font-bold text-blue-900 mb-4">Customer Mentions</h2>
                <div className="w-20 h-1.5 bg-green-600 rounded-full"></div>
              </div>

              <div className="flex flex-col space-y-6">
                {/* Testimonial 1 */}
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 relative">
                  <div className="flex text-yellow-400 mb-3">
                    <Star fill="currentColor" size={18} />
                    <Star fill="currentColor" size={18} />
                    <Star fill="currentColor" size={18} />
                    <Star fill="currentColor" size={18} />
                    <Star fill="currentColor" size={18} />
                  </div>
                  <p className="text-gray-700 italic mb-4">"Northeast Pest Control did an amazing job at my home in Ahom Gaon. The termite issue was resolved completely within days. Highly professional team!"</p>
                  <div className="font-bold text-blue-900">- Rahul Sharma</div>
                </div>

                {/* Testimonial 2 */}
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 relative">
                  <div className="flex text-yellow-400 mb-3">
                    <Star fill="currentColor" size={18} />
                    <Star fill="currentColor" size={18} />
                    <Star fill="currentColor" size={18} />
                    <Star fill="currentColor" size={18} />
                    <Star fill="currentColor" size={18} />
                  </div>
                  <p className="text-gray-700 italic mb-4">"Very prompt service. I called them at night for a severe cockroach problem, and they were here the next morning. Safe chemicals used, no smell."</p>
                  <div className="font-bold text-blue-900">- Priya Das</div>
                </div>

                {/* Testimonial 3 */}
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 relative">
                  <div className="flex text-yellow-400 mb-3">
                    <Star fill="currentColor" size={18} />
                    <Star fill="currentColor" size={18} />
                    <Star fill="currentColor" size={18} />
                    <Star fill="currentColor" size={18} />
                    <Star fill="currentColor" size={18} />
                  </div>
                  <p className="text-gray-700 italic mb-4">"Best pest control service in Guwahati. The staff is polite, and the pricing is very reasonable compared to others. Haven't seen a single rat since."</p>
                  <div className="font-bold text-blue-900">- Amit Baruah</div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Lower Information Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            
            {/* Col 1 - About Us */}
            <div className="animate-slide-up" style={{ animationDelay: '0.1s' }}>
              <h3 className="text-2xl font-bold text-blue-900 mb-6 flex items-center">
                <span className="border-b-4 border-green-600 pb-1">About Us</span>
              </h3>
              <h4 className="text-xl font-semibold text-gray-900 mb-4">Guwahati's Local Experts</h4>
              <p className="text-gray-600 leading-relaxed">
                At Northeast Pest Control (NPC Pest Management), we are dedicated to providing professional, safe, and fast pest eradication solutions. With years of experience serving Guwahati and surrounding areas, our certified technicians use eco-friendly methods to protect your family, home, and business from unwanted invaders.
              </p>
            </div>

            {/* Col 2 - Why Choose Us */}
            <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <h3 className="text-2xl font-bold text-blue-900 mb-6 flex items-center">
                <span className="border-b-4 border-green-600 pb-1">Why Choose Us</span>
              </h3>
              
              <div className="mb-8 flex items-start space-x-4">
                <div className="bg-blue-50 p-3 rounded-lg text-blue-900">
                  <Clock size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-1">24/7 Always Open</h4>
                  <p className="text-gray-600 text-sm">Pests don't sleep, and neither do we. We are available round the clock for emergency services.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-green-50 p-3 rounded-lg text-green-600">
                  <ShieldCheck size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-1">Safety First</h4>
                  <p className="text-gray-600 text-sm">We use industry-approved, family and pet-safe chemicals that are tough on pests but gentle on your loved ones.</p>
                </div>
              </div>
            </div>

            {/* Col 3 - Contact & Map */}
            <div className="animate-slide-up" style={{ animationDelay: '0.3s' }}>
              <h3 className="text-2xl font-bold text-blue-900 mb-6 flex items-center">
                <span className="border-b-4 border-green-600 pb-1">Contact Us</span>
              </h3>
              
              <form className="mb-8 space-y-4">
                <input 
                  type="text" 
                  placeholder="Your Name" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-900 focus:border-transparent outline-none transition-all"
                />
                <input 
                  type="email" 
                  placeholder="Your Email" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-900 focus:border-transparent outline-none transition-all"
                />
                <textarea 
                  placeholder="Your Message" 
                  rows={3}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-900 focus:border-transparent outline-none transition-all resize-none"
                ></textarea>
                <button 
                  type="button"
                  className="w-full bg-blue-900 hover:bg-blue-800 text-white font-semibold py-2.5 rounded-md transition-colors duration-300"
                >
                  Send Message
                </button>
              </form>

              <div className="space-y-3 text-sm text-gray-600 mb-6">
                <div className="flex items-start space-x-3">
                  <MapPin size={18} className="text-blue-900 flex-shrink-0 mt-0.5" />
                  <span>Bhabanand Boro Path, H.No. 7, Ahom Gaon, Guwahati, Assam-781035 (Near Ayursundra Superspeciality Hospital)</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone size={18} className="text-blue-900 flex-shrink-0" />
                  <span>80993 27682, 88261 67996</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail size={18} className="text-blue-900 flex-shrink-0" />
                  <span>northeastcontrol23@gmail.com</span>
                </div>
                <div className="flex items-center space-x-3 pt-2">
                  <a href="https://www.facebook.com/share/185LGJ4R3U/" target="_blank" rel="noopener noreferrer" className="text-blue-900 hover:text-blue-700 transition-colors flex items-center space-x-2 font-medium">
                    <Facebook size={20} />
                    <span>Follow us on Facebook</span>
                  </a>
                </div>
              </div>

              {/* Map */}
              <div className="h-48 w-full rounded-lg overflow-hidden shadow-sm border border-gray-200">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d114612.3582496739!2d91.66263445820312!3d26.143241500000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x375a5a287f9133ff%3A0x2bbd1332436bde32!2sGuwahati%2C%20Assam!5e0!3m2!1sen!2sin!4v1709000000000!5m2!1sen!2sin" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen={false} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Google Map Guwahati"
                ></iframe>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-950 text-white pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div className="col-span-1 lg:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="bg-white p-1 rounded">
                  <img 
                    src="https://i.ibb.co/5gTKS3yG/slazzer-preview-hmbyk.png" 
                    alt="Logo" 
                    className="h-10 w-auto object-contain"
                  />
                </div>
                <span className="font-bold text-xl tracking-wide">Northeast Pest Control</span>
              </div>
              <p className="text-blue-200 text-sm max-w-md mb-6 leading-relaxed">
                NPC Pest Management provides top-tier pest control services across Guwahati. We guarantee a safe, pest-free environment for your home and business.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-bold mb-6 border-b border-blue-800 pb-2 inline-block">Quick Links</h4>
              <ul className="space-y-3 text-sm text-blue-200">
                <li><a href="#" className="hover:text-white transition-colors">Home</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">Our Services</a></li>
                <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-6 border-b border-blue-800 pb-2 inline-block">Contact Info</h4>
              <ul className="space-y-4 text-sm text-blue-200">
                <li className="flex items-start space-x-3">
                  <MapPin size={18} className="flex-shrink-0 mt-0.5 text-green-400" />
                  <span>Bhabanand Boro Path, H.No. 7, Ahom Gaon, Guwahati, Assam-781035</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Phone size={18} className="flex-shrink-0 text-green-400" />
                  <span>80993 27682, 88261 67996</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Mail size={18} className="flex-shrink-0 text-green-400" />
                  <span>northeastcontrol23@gmail.com</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-blue-900 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-blue-300">
            <p>&copy; {new Date().getFullYear()} Northeast Pest Control (NPC Pest Management). All rights reserved.</p>
            <p className="mt-2 md:mt-0">Designed for Guwahati</p>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <div className="fixed bottom-6 right-6 z-50 flex items-center group">
        <div className="mr-3 bg-white text-gray-800 text-sm font-medium py-1.5 px-3 rounded-lg shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          Chat with us
        </div>
        <a 
          href="https://wa.me/918099327682" 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-transform hover:scale-110 animate-pulse flex items-center justify-center"
        >
          <MessageCircle size={32} />
        </a>
      </div>
      {/* Service Details Modal */}
      {selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg overflow-hidden animate-slide-up relative">
            {/* Close Button */}
            <button 
              onClick={() => setSelectedService(null)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-800 bg-gray-100 hover:bg-gray-200 rounded-full p-2 transition-colors z-10"
            >
              <X size={20} />
            </button>
            
            {/* Modal Header */}
            <div className="bg-blue-50 p-6 sm:p-8 flex items-center space-x-4">
              <div className="w-16 h-16 bg-blue-900 rounded-full flex items-center justify-center flex-shrink-0 shadow-md">
                <selectedService.icon size={32} className="text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-blue-900">{selectedService.title}</h3>
                <p className="text-blue-700 font-medium mt-1">{selectedService.pricing}</p>
              </div>
            </div>
            
            {/* Modal Body */}
            <div className="p-6 sm:p-8">
              <p className="text-gray-700 leading-relaxed mb-6">
                {selectedService.fullDesc}
              </p>
              
              <h4 className="font-bold text-gray-900 mb-3 text-lg">What's Included:</h4>
              <ul className="space-y-3 mb-8">
                {selectedService.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start text-gray-700">
                    <CheckCircle2 size={20} className="text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="https://wa.me/918099327682" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex-1 bg-green-600 hover:bg-green-500 text-white py-3 px-4 rounded-xl font-bold text-center transition-colors flex items-center justify-center space-x-2 shadow-md"
                >
                  <Phone size={20} />
                  <span>Book Now</span>
                </a>
                <button 
                  onClick={() => setSelectedService(null)}
                  className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-800 py-3 px-4 rounded-xl font-bold text-center transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
