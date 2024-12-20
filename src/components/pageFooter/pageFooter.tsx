import LogoImage from "../../static/image/logo.png";

export function PageFooter() {
  return <footer className='container m-auto flex flex-col items-center p-4 gap-4'>
    <img src={LogoImage} alt="logo" />
    <p className="text-center">For educational use only. All characters and content are the property of Disney. This test is for private use and development testing only and should not be distributed for public consumption</p>
  </footer>
}