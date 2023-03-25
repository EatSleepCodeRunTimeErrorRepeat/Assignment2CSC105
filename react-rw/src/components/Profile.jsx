function Profile (){

        return (
          <section
            style={{
              width: '40%',
              margin: '20px',
              padding: '20px',
              border: '1px solid red',
              transition: 'border-color 1s ease',
              boxSizing: 'border-box',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'red';
              e.currentTarget.querySelector('h2').style.color = 'red';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'initial';
              e.currentTarget.querySelector('h2').style.color = 'initial';
            }}
          >
            <h2 style={{
                display: "flex",
                flexDirection: 'column',
                alignItems: "center", 
                margin: "0", 
                fontSize: "1.5em", 
                transition: "color 1s ease",
            }}>
              Profile
            </h2>
            <p style={{ margin: '10px 0' }}>
              Hi, my name is Ryan. aoishfjoasijfoijglalj
              snldjasdfjsdflka
              jsdfhlskjdalskjdlaksjfhak
              sljlaksjflashfsj
              hflaskfjhaslkjdfhasldjkfsdf
            </p>
          </section>
        );
}
export default Profile;