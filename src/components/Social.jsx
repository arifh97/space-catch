import { FaDiscord, FaTelegramPlane, FaTwitter } from "react-icons/fa";


export default function Social({ className }) {
  const socialIcons = [

    {
      name: 'discoard',
      icon: <FaDiscord />,
      url: ''
    },
    {
      name: 'telegram',
      icon: <FaTelegramPlane/>,
      url: ''
    },
    {
      name: 'twitter',
      icon: <FaTwitter />,
      url: ''
    },
  ];
  return (
    <ul className={`social-list d-flex align-items-center flex-wrap gap-2 ${className}`}>
      {socialIcons.map((item, index) => (
        <li key={index}>
          <a href={item.url} data-aos="fade-up" data-aos-duration="1800" data-aos-delay="" data-aos-offset="0"target="_blank" className="social-link d-flex align-items-center justify-content-center ms-1">
            {item.icon}
          </a>
        </li>
      ))}
    </ul>
  )
}