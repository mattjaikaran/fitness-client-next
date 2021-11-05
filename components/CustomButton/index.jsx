import { useRouter } from 'next/router'
import { Button } from 'react-bootstrap'

const CustomButton = ({ variant, btnText, btnLink, onClick }) => {
  const router = useRouter()
  if (onClick) {
    return (
      <>
        <Button
          size="lg"
          variant={`${variant ?? 'outline-secondary'} mt-3 hidden-xs`}
          onClick={onClick}>
          {btnText}
        </Button>
        <div className="d-grid mt-3">
          <Button
            size="lg"
            variant={`${variant ?? 'outline-secondary'} visible-xs`}
            onClick={onClick}>
            {btnText}
          </Button>
        </div>
      </>
    )
  }
  return (
    <>
      <Button
        size="lg"
        variant={`${variant ?? 'outline-secondary'} mt-3 hidden-xs`}
        onClick={() => router.push(btnLink)}>
        {btnText}
      </Button>
      <div className="d-grid mt-3">
        <Button
          size="lg"
          variant={`${variant ?? 'outline-secondary'} visible-xs`}
          onClick={() => router.push(btnLink)}>
          {btnText}
        </Button>
      </div>
    </>
  )
}

export default CustomButton