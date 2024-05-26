import { FaTelegramPlane, FaTwitter } from "react-icons/fa";


export default function Social({ className }) {
  const socialIcons = [
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
    <ul className={`social-list d-flex align-items-center flex-wrap gap-3 ${className}`}>
      {socialIcons.map((item, index) => (
        <li key={index}>
          <a href={item.url} target="_blank" className="social-link rounded-pill d-flex align-items-center justify-content-center">
            {item.icon}
          </a>
        </li>
      ))}
    </ul>
  )
}