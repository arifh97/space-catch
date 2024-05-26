
export default function CommonTitle({ subTitle, title, des, className='' }) {
    return (
      <div data-aos="fade-up" data-aos-offset="" data-aos-delay="" className={`common-title ${className}`}>
        <h2 className="mb-0">{title}</h2>
      </div>
    )
  }
  