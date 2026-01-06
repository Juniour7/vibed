



const Footer = () => {
  const Company = [
  {
    title: 'About Us',
    url: '/about-us',
  },
  {
    title: 'Contact Us',
    url: '/contact-us',
  }
]

const SupportSection = [
  {
    title: 'Help Center',
    url: '/',
  },
  {
    title: 'Report a Listing or User',
    url: '/',
  },
  {
    title: 'Safety & Verification Policy',
    url: '/',
  }
]


const Legal = [
  {
    title: 'Terms & conditions',
    url: '/',
  },
  {
    title: 'Privacy Policy',
    url: '/',
  }
]
  const SocialMedia = [
    {
      icon: 'fa-brands fa-square-instagram',
      url: 'https://instagram.com',
    },
    {
      icon: 'fa-brands fa-twitter',
      url: 'https://twitter.com',
    },
    {
      icon: 'fa-brands fa-tiktok',
      url: 'https://tiktok.com',
    },
    {
      icon: 'fa-brands fa-youtube',
      url: 'https://youtube.com',
    }
  ]

  return (
    <footer className="bg-[#EAEAEC] w-full py-[4rem] font-man">
      <section className="max-w-7xl  mx-auto px-4 md:px-8 grid md:grid-cols-4 gap-4">
        <div className="space-y-3 ">
          <h4 className="font-semibold">Company</h4>
          <ul className="space-y-2">
            {Company.map((item, index) => (
              <li key={index} className="text-dark">
                <a href={item.url} className="font-medium ">{item.title}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className="space-y-3">
          <h4 className="font-semibold">Support</h4>
          <ul className="space-y-2">
            {SupportSection.map((item, index) => (
              <li key={index} className="text-dark">
                <a href={item.url} className="font-medium ">{item.title}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className="space-y-3">
          <h4 className="font-semibold">Legal</h4>
          <ul className="space-y-2">
            {Legal.map((item, index) => (
              <li key={index} className="text-dark">
                <a href={item.url} className="font-medium ">{item.title}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className="space-y-3">
          <h4 className="font-semibold">Sign up for our newsletter</h4>
          <div className="bg-white rounded-full border border-[#CACACA] p-1 flex items-center justify-between overflow-hidden">
            <input type="email" placeholder="Enter email" required className="w-full px-4 py-2 focus:outline-none rounded-ful" />
            <button type="submit" className="bg-[#3C4A4D] text-white px-4 py-2 rounded-full">Subscribe</button>
          </div>
        </div>
      </section>

      <section className="max-w-7xl  mx-auto px-4 md:px-8 flex flex-col md:flex-row justify-between items-center mt-[2rem]">
        {/* Social Media Icons */}
        <div className="flex space-x-4">
          {SocialMedia.map((item, index) => (
            <div key={index} className="flex flex-col justify-center items-center border bg-white rounded-full w-10 h-10">
              <a  href={item.url} className="text-dark text-xl hover:text-[#3C4A4D]">
              <i className={item.icon}></i>
            </a>
            </div>
          ))}
        </div>

        {/* Copyright */}
        <div className="mt-4 md:mt-0">
          <p className="text-dark text-sm">© {new Date().getFullYear()}, Vibed All rights reserved.</p>
        </div>
      </section>
    </footer>
  )
}

export default Footer
