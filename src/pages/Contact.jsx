import { useState } from 'react';
import { PageHead, Sec } from '@/components/common/Shared';

export default function Contact() {
  const [done, setDone] = useState(false);

  return (
    <>
      <PageHead eyebrow="GET IN TOUCH" title="Contact Us" img={3} />
      <Sec>
        <div className="split">
          <div className="card pad">
            <h3>Share a Smile</h3>
            <p>
              📞 <a href="tel:2132103711">213-210-3711</a>
            </p>
            <p>
              📍 45 River Dr S, Apt 3010
              <br />
              Jersey City, NJ – 07310
            </p>
            <p>
              ✉ <a href="mailto:info@shareasmileusa.org">info@shareasmileusa.org</a>
            </p>
          </div>
          <form
            className="card pad form"
            onSubmit={(e) => {
              e.preventDefault();
              setDone(true);
            }}
          >
            <input required placeholder="Name" />
            <input required type="email" placeholder="Email" />
            <input placeholder="Subject" />
            <button className="btn solid">Submit</button>
            {done && <p className="ok">Thanks for submitting!</p>}
          </form>
        </div>
      </Sec>
    </>
  );
}

