import { useState, useEffect } from 'react';
import "./loader.css";

export const Loader = (props: any) => {
  const [isActive, setIsActive] = useState<boolean>(props.isActive);
  useEffect(() => {
    setIsActive(props.isActive)
  }, [props.isActive])
  return (
    <>
      <div className={`loader_container ${(isActive === true) ? 'active' : ''}`} >
        <div className='loader_block'>
          <div className='loader_title'>Processing</div>
          <Spinner />
        </div>
      </div>
    </>
  );
};

export const Spinner = () => {
  return (
    <div className="spinner">
      <span className="line line-1" />
      <span className="line line-2" />
      <span className="line line-3" />
      <span className="line line-4" />
      <span className="line line-5" />
      <span className="line line-6" />
      <span className="line line-7" />
      <span className="line line-8" />
      <span className="line line-9" />
    </div>
  );
};
