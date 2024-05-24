
export default function CommonTitle({ subTitle, title, des, className='' }) {
    return (
      <div className={`common-title ${className}`}>
        {subTitle ? (<span className='d-block'>{subTitle}</span>) : ''}
        <h2>{title}</h2>
        {des ? (<p>{des}</p>) : ''}
      </div>
    )
  }
  