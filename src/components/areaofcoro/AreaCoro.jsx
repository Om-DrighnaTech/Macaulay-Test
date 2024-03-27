import React from 'react'
import Carousel from 'react-bootstrap/Carousel';


const AreaCoro = () => {
    const crausalData = [
        { id: 1, image: 'https://images2.alphacoders.com/747/747506.jpg', heading: 'Areas of Curriculum', link: 'www.google.com' },
        { id: 2, image: 'https://images.alphacoders.com/691/691452.jpg', heading: 'Areas of Curriculum', link: 'www.google.com' },
        { id: 3, image: 'https://images3.alphacoders.com/753/753192.jpg', heading: 'Areas of Curriculum', link: 'www.google.com' },
      ];
  return (
    <div>
       <>
        <Carousel>
          {crausalData.map(item => (
            <Carousel.Item key={item.id}>
              <div
                style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  backgroundColor: 'rgba(0, 0, 0, 0.7)',
                  padding: '70px',
                  textAlign: 'center',
                  color: '#fff',
                  width: '400px'
                }}
              >
                <h2 style={{ fontSize: '24px', marginBottom: '10px', textDecoration: 'none' }}>{item.heading}</h2>
                <a
                  style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.3)',
                    border: 'none',
                    color: '#fff',
                    padding: '10px 20px',
                    fontSize: '16px',
                    fontWeight: 'bold',
                    cursor: 'pointer',
                    transition: 'background-color 0.3s ease',
                    textDecoration: 'none'
                  }}
                  href="/curriculum"
                  rel="noopener noreferrer"
                >
                  KNOW MORE
                </a>
              </div>
              <img
                style={{ width: '100%', height: '553px', }}
                src={item.image}
                alt=""
              />
            </Carousel.Item>
          ))}
        </Carousel>
        {/* <div style={{ backgroundColor: 'black', color: 'white', height: '100px' }}>
          <h2 style={{ paddingTop: '23px', textDecoration: 'none', textAlign: 'center'}}>Areas of Curriculum</h2>
        </div> */}
      </>
    </div>
  )
}

export default AreaCoro;
