import { PageHead, Sec } from '@/components/common/Shared';
import { IMG } from '../data';

export default function Events() {
  return (
    <>
      <PageHead eyebrow="GALLERY" title="Events" img={1} />
      <Sec>
        <div className="gal big">
          {[1, 2, 3, 4, 2, 3].map((n, k) => (
            <div
              key={k}
              style={{ backgroundImage: `url(${IMG(n)})` }}
            />
          ))}
        </div>
        <p className="sub">
          Add event names, dates and short descriptions here as they are announced.
        </p>
      </Sec>
    </>
  );
}

