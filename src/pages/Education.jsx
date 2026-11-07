import { PageHead, Sec, Chips, Cards, Ul, Nums, Cta } from '@/components/common/Shared';
import { IMG } from '../data';

export default function Education() {
  return (
    <>
      <PageHead
        eyebrow="INITIATIVES"
        title="Education"
        img={1}
        intro="Our supported school in Parli, Maharashtra, India stands as a beacon of quality education for rural children. Established as the first English medium school in the locality, it has consistently aspired to offer an education that rivals its urban counterparts. Committed to the all-round development of its students, the Centre employs diverse pedagogical methods and integrates a variety of extra-curricular activities, ensuring a holistic and enriching learning experience."
      />
      <Sec title="School Highlights">
        <Chips
          items={[
            'Interactive Classroom',
            '9 School Buses',
            'Well Stocked Library',
            'Well Equipped Labs',
            'Computer Training',
            'E-Learning',
            'Solar Panel Generation',
            'Fire Compliant Building'
          ]}
        />
      </Sec>
      <Sec alt title="Student Enrichment Activity">
        <Cards
          items={[
            [
              "Maker's Fair",
              'A hands-on event where students create projects using technology and engineering skills.'
            ],
            [
              'Science Fair',
              'Encourage students to conduct experiments and present their findings.'
            ],
            [
              'Art Exhibitions',
              'Students create and showcase visual arts like painting, sculpture, photography, or digital media.'
            ]
          ]}
        />
        <p className="sub">
          Student enrichment activities are programs, experiences, or projects designed to supplement and enhance a student’s education outside of the standard curriculum. These activities aim to foster holistic development by promoting creativity, critical thinking, teamwork, and personal growth.
        </p>
        <p>
          <b>Following are some of the activities groups.</b>
        </p>
        <Chips
          items={[
            'STEM Activities',
            'Arts & Creative Expression',
            'Sports & Physical Fitness',
            'Indoor Strategy Games'
          ]}
        />
      </Sec>
      <Sec
        title="Milestone Journey"
        sub="Honoring Heritage: Celebrating Cultural and National Milestones"
      >
        <div className="gal">
          {[5, 4, 3].map((n, k) => (
            <div
              key={k}
              style={{
                backgroundImage: `url(${n === 5 ? '/images/banner-3.png' : IMG(n === 4 ? 2 : 1)})`
              }}
            />
          ))}
        </div>
      </Sec>
      <Sec alt title="Staff Development Initiatives">
        <div className="grid3">
          <div className="card pad">
            <h3>Promoting Teacher's Development</h3>
            <Ul
              items={[
                'Encouragement for B.Ed. degrees with immediate salary raises.',
                'Paid leaves for exams (Post Graduation, B.Ed., or any educational courses).'
              ]}
            />
          </div>
          <div className="card pad">
            <h3>Training & Development</h3>
            <Ul
              items={[
                'External Training: Academic and non-academic topics.',
                'Coaching Conversations: Aimed at unlearning old habits, improving language skills, offering new perspectives on student learning, managing time, and interacting with authorities.'
              ]}
            />
          </div>
          <div className="card pad">
            <h3>Enriching Language Skills</h3>
            <Ul
              items={[
                'Online English Classes: Focused on refining diction and enunciation to align accent and fluency with urban teaching standards.',
                'Teaching Improvement: Teachers are equipped to innovate their teaching methods and effectively utilize diverse teaching aids.'
              ]}
            />
          </div>
        </div>
      </Sec>
      <Sec title="Building Dreams – Girls Hostel Under Construction">
        <div className="split">
          <div>
            <h3>36 Rooms Girls Hostel</h3>
            <Ul
              items={[
                'The first ever girls hostel in Sudhagad Taluka which is under-construction will house 3 Girls Per Room – with attached Bathroom.'
              ]}
            />
            <Nums items={[['108', 'Girls']]} />
          </div>
          <div>
            <h3>Amenities</h3>
            <Ul
              items={[
                'Medical room',
                'Laundromat and Janitors room',
                'Sewage Treatment Plant and Solar Power Plant etc.'
              ]}
            />
            <h3>New Normal</h3>
            <Ul
              items={[
                'State-of-the-art infrastructure offering these girls the quality of life they deserve.',
                'Empowering them to embrace their backgrounds without Shame.'
              ]}
            />
          </div>
        </div>
      </Sec>
      <Sec alt title="Sponsor a Child">
        <Cta>
          Change a child's life for ever with a monthly donation of $21. Give them hope for a brighter future. $250 a year will help sponsor everything from their books, uniforms, travel as well as school meals.
        </Cta>
      </Sec>
    </>
  );
}

