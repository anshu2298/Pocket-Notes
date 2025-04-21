import mainBanner from "../assets/banner.png";
import lock from "../assets/lock.png";
const MainArea = () => {
  return (
    <div className='main-area'>
      <div className='banner'>
        <img
          className='banner-img'
          src={mainBanner}
        />
        <h1 className='banner-heading'>Pocket Notes</h1>
        <p className='banner-subtext'>
          Send and receive messages without keeping your
          phone online.
        </p>
        <p className='banner-subtext'>
          Use pocket Notes on up to 4 linked devices and 1
          mobile phone
        </p>
      </div>
      <div className='banner-footer'>
        <img
          className='footer-img'
          src={lock}
        />
        <p className='footer-subtext'>
          end-to-end encrypted
        </p>
      </div>
    </div>
  );
};

export default MainArea;
