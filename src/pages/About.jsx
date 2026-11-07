import { PageHead, Sec, Ul } from '@/components/common/Shared';
import { ABOUT_MISSION_CARDS } from '../data';

export default function About() {
  return (
    <>
      <PageHead
        eyebrow="ABOUT US"
        title="Mission & Vision"
        img={2}
        intro="Share a Smile, an NJ based 501(c)3 non-profit that supports organizations focused on improving the lives of rural underprivileged communities via three focused initiatives: Education, Women Empowerment and, Healthcare."
      />
      <Sec>
        <div className="grid2">
          {ABOUT_MISSION_CARDS.map(([t, d]) => (
            <div className="card pad" key={t}>
              <h3>{t}</h3>
              <p>{d}</p>
            </div>
          ))}
        </div>
      </Sec>
      <Sec alt title="Management">
        <div className="grid2">
          <div className="card pad">
            <h3>Board of Trustees</h3>
            <Ul
              items={[
                'Chintan Shah – Trustee',
                'Premal Doshi – Trustee',
                'Hiren Shah – Trustee',
                'Pritesh Vora – Trustee'
              ]}
            />
          </div>
          <div className="card pad">
            <h3>Board of Advisors</h3>
            <Ul
              items={[
                'Bindesh Shah – M.D., Advisor',
                'Sejal Shah (CPA) – C.P.A., Advisor',
                'Harshad Kothari – C.P.A., Advisor'
              ]}
            />
          </div>
        </div>
        <p className="sub">
          Share A Smile - USA a 501(c)(3) nonprofit organization. Government ID (EIN): 300221345. Email: info@shareasmileusa.org
        </p>
      </Sec>
    </>
  );
}

