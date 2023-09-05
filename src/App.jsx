import { useRef } from 'react';
import moon from '/moon.png';
import land from 'public/assets/land.png';

import maveli from './maveli.gif';

import { Parallax, ParallaxLayer } from '@react-spring/parallax';

function App() {
  const ref = useRef();

  return (
    <div>
      <Parallax pages={4} ref={ref}>
        {/* <ParallaxLayer speed={1}>
            <h2>🌟 Mahabali's Marvelous Portfolio 🌟</h2>
            <h3>Greetings, Earthlings and Devas alike! 🌌</h3>
        </ParallaxLayer>

        <ParallaxLayer offset={1} speed={0.5}>
            <h2>Web development is fun!</h2>
        </ParallaxLayer> */}

        <ParallaxLayer
          offset={0}
          speed={1}
          factor={2}
          style={{
            backgroundImage: `url(${moon})`,
            backgroundSize: 'cover',
          }}
        />

        <ParallaxLayer
          offset={2}
          speed={1}
          factor={4}
          style={{
            backgroundImage: `url(${land})`,
            backgroundSize: 'cover',
          }}
        ></ParallaxLayer>

        <ParallaxLayer
          sticky={{ start: 0.9, end: 3.6}}
          style={{ textAlign: 'center' }}
        >
          <img src={maveli} />
        </ParallaxLayer>

        <ParallaxLayer
          offset={0.2}
          speed={0.05}
          onClick={() => ref.current.scrollTo(3)}
        >
          <h2 class="greet-h2">Greetings, Earthlings and Devas alike!</h2>
        </ParallaxLayer>
        <ParallaxLayer
          offset={1.5}
          speed={0.05}
          onClick={() => ref.current.scrollTo(3)}
        >
          <div class="row abt-box">

              <div class="abt">
                    <p class="about-me">
                    <h2>👑 About Me:</h2>
                    <b>Name:</b> Mahabali <br />
                    <b>Alias: </b>King of Generosity <br />
                    <b>Occupation:</b> Ruler of the Netherworld (well, not anymore),<br />currently Kerala's number one beloved celebrity of Onam</p>
              </div>
              <div class="abt">
                 <h2>💪 Skills:</h2>
                  <p>
                  Generosity level: Over 9000! <br />
                  Expert in managing parallel dimensions. <br />
                  Can lift mountains (on Onam, I even lift spirits).
                  </p>
              </div>
          </div>
        </ParallaxLayer>
          
        <ParallaxLayer
          offset={2.3}
          speed={0.05}
          onClick={() => ref.current.scrollTo(3)}
        >
          <div class="exp-box">

                <div class="exp">
                <h2>🌴 Experience:</h2>
                <p class="p-exp">
                <b>King of Giving: </b>Ruled the netherworld with generosity so legendary that even Santa Claus would take notes!
                <br /><b>Onam Festival Planner: </b>Hosted the most epic annual festival in Kerala. Floral decorations? Check. Games? Check. Sadhya feasts? Double check!
                <br /><b>Dimensions Management:</b> Successfully balanced the dimensions of Earth and the Netherworld without causing any interdimensional traffic jams. Impressive, right?
                <br /><b>Vamana Encounter Specialist: </b>Once had a close encounter with Lord Vamana, but he couldn't outwit my generous spirit. #BoonGoals
                <br /><b>Charity Champion:</b> Raised demon charity to a whole new level – donated not just blood but entire kingdoms!
                </p>
                </div>

                <div class="exp">
                <h2>🏆 Achievements:</h2>
                  Winner of the "Most Charitable Demon King" award, a record 27 times!
                  Honorary mention in Lord Vishnu's divine diary.
                  <h2>💃 Hobbies</h2>
                  When I'm not ruling over the atholokam or charming Kerala during Onam, you might catch me with dancing with demons,
                   cooking up and tasting netherworld delicacies, karaoke with other devas, star gazing, or organizing charity chess tournaments. 
                </div>
          </div>
        </ParallaxLayer>
        <ParallaxLayer
          offset={3.3}
          speed={0.05}
          onClick={() => ref.current.scrollTo(3)}
        >
          <div class="ref-box">
              <div class="reff">
                  <h2>🌟 References:</h2>
                    <ul>
                      <li>Lord Vishnu (number one cosplayer in the world) <br /></li>
                      <li>Devas (before they got jealous)</li>
                      <li>Santa Claus (for some secret generosity tips)</li>
                    </ul>
              </div>
          </div>
        </ParallaxLayer>
        <ParallaxLayer
          offset={3.9}
          speed={2}
          onClick={() => ref.current.scrollTo(0)}
        >
          <div class="disclaimer">
            <p>
          Disclaimer: No Devas were harmed during my rule,
           and no kingdoms were harmed in the making of this portfolio
            </p>
          </div>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}

export default App;