import React from 'react';

function Gallery (){
    return (
        <section style={{
            margin: "20px",
            boxSizing: "border-box",
            
          }}
        >
          <h2 style={{ 
            fontSize: "1.5em", 
            margin: "0",
            display: "flex",
            flexDirection: 'column',
            alignItems: "center",
            }}>
                Gallery
            </h2>
            <ul style={{ 
                display: "flex",
                flexDirection: 'column',
                alignItems: "center", 
                listStyle: 'none', 
                padding: 0 
                }}>
            <li style={{ 
                margin: '0 10px' }}>
              <img
                src="https://cdn.britannica.com/54/75854-050-E27E66C0/Eiffel-Tower-Paris.jpg" 
                alt="tower"
                width={200}
                style={{ transition: 'transform 1s ease' }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'scale(1.2)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'scale(1)';
                }}
              />
            </li>
            <li style={{ margin: '0 10px' }}>
              <img
                src="https://cdn.britannica.com/54/75854-050-E27E66C0/Eiffel-Tower-Paris.jpg" 
                alt="tower"
                width={200}
                style={{ transition: 'transform 1s ease' }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'scale(1.2)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'scale(1)';
                }}
              />
            </li>
            <li style={{ margin: '0 10px' }}>
              <img
                src="https://cdn.britannica.com/54/75854-050-E27E66C0/Eiffel-Tower-Paris.jpg" 
                alt="tower"
                width={200}
                style={{ transition: 'transform 1s ease' }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'scale(1.2)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'scale(1)';
                }}
              />
            </li>
          </ul>
        </section>
    );
};
    
export default Gallery;