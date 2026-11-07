import { PageHead, Sec, Cards, Ul, Chips, Cta } from '@/components/common/Shared';

export default function Healthcare() {
  return (
    <>
      <PageHead
        eyebrow="INITIATIVES"
        title="Health Care"
        img={4}
        intro="Our supported Medical & Healthcare Center in Parli, Maharashtra, India has been working since last 18 years in the under-privileged & rural regions of Sudhagadh & Khalapur talukas to enhance the healthcare ecosystem through outreach programs for vulnerable communities & in setting up state of the art healthcare infrastructure thereby making basic healthcare services accessible to all."
      />
      <Sec title="Facilities">
        <Cards
          items={[
            ['Medical Camps', 'For all ages.'],
            ['General Health', 'All your basic Health checks.'],
            ['Optometry', 'Care for your eyes.'],
            ['Cardiology', 'Care for your heart.'],
            ['Gastronomy', 'Care for your stomach issues.'],
            ['Dental Clinic', 'Care for your teeth.'],
            ['Ear Nose Throat', 'Caring all around.'],
            ['Homeopathy Clinic', 'Medicine for all your ailments.']
          ]}
        />
      </Sec>
      <Sec alt title="Journey of a Village">
        <div className="grid3">
          <div className="card pad">
            <h3>Past Situation</h3>
            <Ul
              items={[
                'A poor remote area with pitiful conditions and filthy surroundings.',
                'Outbreak of diseases.',
                'No access to healthcare for more than 20 km.',
                'Travel alone made healthcare unaffordable.'
              ]}
            />
          </div>
          <div className="card pad">
            <h3>Current Achievements</h3>
            <Ul
              items={[
                'Multiple medical camps conducted on a regular basis including ENT, dental, vision, skin, gynecological and general camps.',
                'Mobile dispensary van enables healthcare providers to access many villages in the area.',
                '1,400+ cataract surgeries completed with 100% success rate.'
              ]}
            />
          </div>
          <div className="card pad">
            <h3>Mission 2020 Goals</h3>
            <Ul
              items={[
                'Commit 25+ doctors to visit needy areas on a regular basis.',
                'Support construction of a local clinic and a laboratory for basic medical needs.',
                'Provide 5000+ underprivileged health needs via outpatient clinics and surgeries.'
              ]}
            />
          </div>
        </div>
      </Sec>
      <Sec title="Upcoming Projects">
        <Ul
          items={[
            'Capacity would be expandable up to 51 beds.',
            'Building Center Spread over 30,000 Square Feet.',
            'Construction in progress.'
          ]}
        />
      </Sec>
      <Sec alt title="39 Bed Hospital" sub="Bringing Latest Services to Rural Area">
        <p>
          <b>The proposed hospital includes:</b>
        </p>
        <Chips
          items={['Emergency', 'Surgical', 'Cardiac', 'Diagnostic', 'Day Care']}
        />
      </Sec>
      <Sec>
        <Cta>
          Join us in our commitment to making high-quality healthcare accessible for everyone.
        </Cta>
      </Sec>
    </>
  );
}

