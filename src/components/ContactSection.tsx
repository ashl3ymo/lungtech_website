import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { X } from "lucide-react";

const ContactSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <section
      id="contact"
      className="bg-white py-16"
    >
      <div className="section-container">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-4">Get In Touch</h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-8">
            We're excited about new collaborators and potential partners! Feel
            free to reach out if you're generally curious to learn more as well.
          </p>
          <Button onClick={openModal} className="py-6 px-8 text-lg font-medium">
            Contact Us
          </Button>
        </div>
      </div>

      {/* Modal Overlay */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          {/* Modal Content */}
          <div className="bg-white rounded-3xl shadow-xl w-full max-w-md relative">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            >
              <X className="h-6 w-6" />
            </button>

            <div className="p-6">
              <h3 className="text-xl font-bold mb-4">Send us a message</h3>

              <form
                action="https://formspree.io/f/manjyyav"
                method="POST"
                className="space-y-4"
              >
                <div>
                  <Input
                    name="email"
                    type="email"
                    placeholder="Your Email"
                    required
                  />
                </div>
                <div>
                  <Textarea
                    name="message"
                    placeholder="Your Message"
                    rows={4}
                    required
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full py-5 text-base font-medium"
                >
                  Submit
                </Button>
              </form>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ContactSection;
