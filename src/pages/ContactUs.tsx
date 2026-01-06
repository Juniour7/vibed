// Contact Page Components
import Form from "../components/contact/Form"

const ContactUs = () => {
  const contactdetails = [
    {
      icon: "fa-solid fa-phone-volume",
      url: 'tel:+10123456789',
      text: "+1 (012) 345-6789"
    },
    {
      icon: "fa-solid fa-envelope",
      url: 'mailto:support@vibedapp.com',
      text: "support@vibedapp.com"
    },
    {
      icon: "fa-solid fa-location-dot",
      url: '',
      text: "132 Dartmouth Street Boston, Massachusetts 02156 United States"
    }
  ]
  return (
    <div className="bg-[#fafafa] w-full font-man">
      <div className="max-w-7xl pt-[5rem]  mx-auto flex flex-col justify-center items-center font-man">
        <div className="md:text-center space-y-2">
          <h1 className="font-sans text-2xl md:text-3xl lg:text-4xl font-semibold">Contact Us</h1>
          <p className="text-[#787878] font-medium">Any question or remarks? Just write us a message!</p>
        </div>

        <div className="w-full bg-white rounded-md p-2 flex flex-col md:flex-row gap-6 my-[2rem] md:my-[4rem]">
          <div className="basis-[40%] bg-gradient-to-b from-[#4F3B2B] to-[#B58863] rounded-md p-8 relative text-white">
            {/* Circular mockups */}
            <div className="absolute bottom-0 right-0">
  
              <div className="relative">
                <img src="/assets/Ellipse 793.png" alt="" />
                <img src="/assets/Ellipse 794.png" alt="" className="absolute -top-[3rem] -left-[2rem]" />
              </div>
            </div>

            <div className="space-y-2">
              <h1 className="text-2xl  font-medium">Contact Information</h1>
              <p className="text-lg font-light">Say something to start a live chat!</p>
            </div>

            {/* Contact Details */}
            <div className="space-y-5 my-[4rem]">
              {contactdetails.map((detail, index) => (
                <div key={index} className="flex flex-col md:flex-row text-center md:text-left items-center md:items-start gap-4 mt-6">
                  <div className="text-xl">
                    <i className={detail.icon}></i>
                  </div>
                  <div className="flex flex-col">
                    <a href={detail.url} className="font-light hover:underline">
                      {detail.text}
                    </a>
                  </div>
                </div>
              ))}
            </div>

            <div className="md:flex">
              <div className="basis-[70%] bg-transparent border border-white rounded-xl p-3 w-auto font-light">
                <p className="pb-2 border-white border-b">Thank you for your time we may Email you back on the address you leave on the form</p>
                <div className="pt-2 space-y-2">
                  <p>You can also write us on</p>
                    <div>
                      <a href="mailto:support@vibedapp.com">
                        <button
                          className="bg-white rounded-md text-[#00B5AD] font-medium px-4 py-2"
                        >
                          support@vibedapp.com
                        </button>
                      </a>
                    </div>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="basis-[60%]">
            <Form />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactUs
