import uniqid from 'uniqid'
import LaunchIcon from '@material-ui/icons/Launch'
import PDFIcon from '@material-ui/icons/PictureAsPdf'
import './LabContainer.css'

const LabContainer = ({ lab }) => (
  <div className='lab'>

    {/* {lab.image && (<img
    src={
      lab.image.startsWith("http")
        ? lab.image
        : `${process.env.PUBLIC_URL}/images/${lab.image}`
    }
    alt={`${lab.name} screenshot`}
    style={{ width: '100%', objectFit: 'cover' }}
    />
    )} */}

    {
      lab.pdf && (
        <iframe
          src={lab.pdf}
          title={`${lab.name} PDF Preview`}
          width="100%"
          height="200px"
          className='lab__pdf'
         
        />
      )
    }

    <h3>{lab.name}</h3>



    <p className='lab__description'>{lab.description}</p>
    

    {/* <h5 style={{ paddingTop: '1em' }}>Skills</h5> */}
    {lab.stack && (
      <ul className='lab__stack'>
        {lab.stack.map((item) => (
          <li key={uniqid()} className='lab__stack-item'>
            {item}
          </li>
        ))}
      </ul>
    )}

   {lab.pdf && (
      <a
        href={lab.pdf}
        aria-label='pdf link'
        className='link link--icon'
        style={{ float: 'left', paddingTop: '1em' }}
      >
       <PDFIcon />
      </a>
    )}
  </div>
)

export default LabContainer
